import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  IImage,
  IImageUpdate,
  TImageRequest,
  TListImages,
} from "./@types";
import { IDefaultProviderProps } from "./@types";

export interface IImageContext {
	allImages: [] | TListImages
	newImageCar: IImage | null
	setAllImages: React.Dispatch<React.SetStateAction<[] | TListImages>>
	setNewImageCar: React.Dispatch<React.SetStateAction<IImage | null>>
	registerImage: (formData: TImageRequest) => Promise<void>
	editeImage: (formData: IImageUpdate, imageId: string) => Promise<void>
	deleteImage: (imageId: string) => Promise<void>
  }

export const ImageContext = createContext({} as IImageContext);

export const ImageProvider = ({ children }: IDefaultProviderProps) => {
  // const navigate = useNavigate();

  const [allImages, setAllImages] = useState<TListImages | []>([]);
  const [newImageCar, setNewImageCar] = useState<IImage | null>(null);

  useEffect(() => {
    const allImages = async () => {
      try {
        const response = await api.get<TListImages | []>(`/images`);

        setAllImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allImages();
  }, []);

  const registerImage = async (formData: TImageRequest) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.post<IImage>("/images", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNewImageCar(response.data);

        toast.success("Image registered!");
      } catch (error) {
        console.log(error);

        toast.error("Image was not registered!");
      }
    }
  };

  const editeImage = async (formData: IImageUpdate, imageId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.patch<IImage>(
          `/images/${imageId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newListImages = allImages.map((image) => {
          if (image.id === imageId) {
            return response.data;
          } else {
            return image;
          }
        });

        setAllImages(newListImages);

        toast.success("Successfully changed!");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

  const deleteImage = async (imageId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        await api.delete(`/images/${imageId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const imageFind = allImages.find(
          (image) => image.id === imageId
        );

        if (!imageFind) {
          toast.error("Image Not Found!");
        } 
        else {
          const newListImages = allImages.filter((image) => {
            if (image !== imageFind) {
              return image;
            }
          });

          setAllImages(newListImages);

          toast.success("Successfully deleted!");
        }
      } catch (error) {
        console.log(error);

        toast.error("Unable to delete Image!");
      }
    }
  };

  return (
    <ImageContext.Provider
      value={{
        allImages,
        newImageCar,
        setAllImages,
        setNewImageCar,
        registerImage,
        editeImage,
        deleteImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
