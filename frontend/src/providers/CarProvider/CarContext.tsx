import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../UserProvider/UserContext";
import {
  ICar,
  ICarContext,
  IDefaultProviderProps,
  IImage,
  IImageRequest,
  TCarRequest,
  TCarUpdate,
  TDataCarResponse,
} from "./@types";
import { AxiosResponse } from "axios";
// import { useNavigate } from "react-router-dom";

export const CarContext = createContext({} as ICarContext);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  // const navigate = useNavigate();
  const [images, setImages] = useState<IImage[] | []>([]);
  const [car, setCar] = useState<ICar | null>(null);
  const [allcars, setAllCars] = useState<TDataCarResponse[] | []>([]);

  const { setListCarsUser, listCarsUser, setAllcarsUserPerPage, allcarsUserPerPage } = useContext(UserContext);

  useEffect(() => {
    const allCars = async () => {
      try {
        const response = await api.get<TDataCarResponse[]>(`/cars`);
        setAllCars(response.data);

        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    allCars();
  }, []);

  const carRegister = async (formData: TCarRequest) => {
    const token = localStorage.getItem("@userToken");
    let response: AxiosResponse<ICar> | "" = "";
    if (token) {
      try {
        response = await api.post<ICar>("/cars", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCar(response.data);
        setAllcarsUserPerPage([...allcarsUserPerPage, response.data])
        toast.success("Car registered!");
      } catch (error) {
        console.log(error);
        toast.error("Car already exists.");
      }
    }
    console.log(response)
    return response;
  };

  const editeCar = async (formData: TCarUpdate, carId: string) => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      try {
        const response = await api.patch<TDataCarResponse>(
          `/cars/${carId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const newListCars = listCarsUser.map((car) => {
          if (car.id === carId) {
            return response.data;
          } else {
            return car;
          }
        });
        setListCarsUser(newListCars);
        toast.success("Successfully changed!");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

  const deleteCar = async (carId: string) => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      try {
        await api.delete(`/cars/${carId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const carFind = listCarsUser.find((car) => car.id === carId);
        if (!carFind) {
          toast.error("Car Not Found!");
        } else {
          const newListCars = listCarsUser.filter((car) => {
            if (car !== carFind) {
              return car;
            }
          });
          setListCarsUser(newListCars);
          toast.success("Successfully deleted!");
        }
      } catch (error) {
        console.log(error);
        toast.error("Unable to delete car!");
      }
    }
  };

  const registerCarImage = async (payload: IImageRequest) => {
    const token = localStorage.getItem("@userToken");
    try {
      await api.post(`/images`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("imagem cadastrada!");
    } catch (error) {
      console.log(error);
      toast.error("Error on upload images");
    }
  };

  return (
    <CarContext.Provider
      value={{
        images,
        car,
        allcars,
        setImages,
        setCar,
        setAllCars,
        carRegister,
        editeCar,
        deleteCar,
        registerCarImage,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
