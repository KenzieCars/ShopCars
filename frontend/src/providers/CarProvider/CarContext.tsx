import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../UserProvider/UserContext";
import {
  ICar,
  ICarContext,
  IDefaultProviderProps,
  IImage,
  IImageRequest,
  TCarDataIdResponse,
  TCarRequest,
  TCarUpdate,
  TDataCarResponse,
} from "./@types";
import { AxiosResponse } from "axios";

export const CarContext = createContext({} as ICarContext);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  const [images, setImages] = useState<IImage[] | []>([]);
  const [car, setCar] = useState<ICar | null>(null);
  const [allcars, setAllCars] = useState<TCarDataIdResponse[] | []>([]);
  const [carDetailModal, setCarDetailModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null);

  //Vem todos os carros cadastrado em um array só
  //Sem paginação
  const [allCarsRegistered, setAllCarsRegistered] = useState<
    TCarDataIdResponse[] | []
  >([]);

  const {
    setListCarsUser,
    listCarsUser,
    carUserSeller,
  } = useContext(UserContext);


  useEffect(() => {
    const allCars = async () => {
      try {
        const response = await api.get<TCarDataIdResponse[]>(`/cars`);

        setAllCars(response.data);
        setAllCarsRegistered(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    allCars();
  }, []);

  const carRegister = async (formData: TCarRequest): Promise<AxiosResponse<ICar>> => {
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
        carUserSeller();
        toast.success("Car registered!");
      } catch (error) {
        console.log(error);

        toast.error("Car already exists.");
      }
    }
    return response as AxiosResponse<ICar>;
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
        carUserSeller();
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

        carUserSeller();
        toast.success("Successfully deleted!");

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
        allCarsRegistered,
        setImages,
        setCar,
        setAllCars,
        setAllCarsRegistered,
        carRegister,
        editeCar,
        deleteCar,
        registerCarImage,
        carDetailModal,
        setCarDetailModal,
        selectedCar,
        setSelectedCar
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
