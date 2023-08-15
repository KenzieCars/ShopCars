import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  ICar,
  ICarContext,
  IDefaultProviderProps,
  IImage,
  TCarRequest,
  TCarResponse,
  TListCarsResponse,
  TCarUpdate,
} from "./@types";
import { UserContext } from "../UserProvider/UserContext";

export const CarContext = createContext({} as ICarContext);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  // const navigate = useNavigate();
  const [images, setImages] = useState<IImage[] | []>([]);
  const [car, setCar] = useState<ICar | null>(null);
  const [allcars, setAllCars] = useState<ICar[] | []>([]);

  const { setListCarsUser, listCarsUser } = useContext(UserContext);

  useEffect(() => {
    const allCars = async () => {
      try {
        const response = await api.get<TListCarsResponse[] | []>(`/cars`);
        setAllCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allCars();
  }, []);

  const carRegister = async (formData: TCarRequest) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const res = await api.post<ICar>("/cars", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCar(res.data);

        toast.success("Car registered!");
      } catch (error) {
        console.log(error);

        toast.error("Car already exists.");
      }
    }
  };

  const editeCar = async (formData: TCarUpdate, carId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.patch<TCarResponse>(
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

          setAllCars(newListCars);
          toast.success("Successfully deleted!");
        }
      } catch (error) {
        console.log(error);

        toast.error("Unable to delete car!");
      }
    }
  };

  return (
    <CarContext.Provider
      value={{
        images,
        car,
        allcars,
        listCarsUser,
        setImages,
        setCar,
        setAllCars,
        setListCarsUser,
        carRegister,
        editeCar,
        deleteCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
