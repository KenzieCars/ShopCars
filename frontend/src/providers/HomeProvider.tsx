import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface IHomeProviderProps {
  children: ReactNode;
}

interface HomeContextValues {
  selectedbrand: string;
  setSelectedbrand: React.Dispatch<React.SetStateAction<string>>;
  selectedModel: string;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedFuelType: string;
  setSelectedFuelType: React.Dispatch<React.SetStateAction<string>>;
  valueCar: number[];
  setValueCar: React.Dispatch<React.SetStateAction<number[]>>;
  valueKmCar: number[];
  setValueKmCar: React.Dispatch<React.SetStateAction<number[]>>;
  modalFilter: boolean;
  setModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
  clearFilters: () => void;
  cars: ICars[];
}

export interface ICars {
  id: string
  brand: string
  model: string
  year: string
  km: number
  color: string
  status: boolean
  fuel: string
  price: number
  description: string
  imgCover: string
  bestPrice: boolean
  userId: string
  images: any[]
  comments: any[]
  user: User
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  seller: boolean
  isAdm: boolean
  cellPhone: string
  cpf: string
  dateOfBirth: string
  description: string
  city: string
  state: string
  street: string
  number: number
  complement: string
}

export const HomeContext = createContext({} as HomeContextValues);

export const HomeProvider = ({ children }: IHomeProviderProps) => {
  const [selectedbrand, setSelectedbrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [valueCar, setValueCar] = useState<number[]>([0, 550000]);
  const [valueKmCar, setValueKmCar] = useState<number[]>([0, 650000]);
  const [modalFilter, setModalFilter] = useState(false);
  const [cars, setCars] = useState<ICars[]>([]);

  const clearFilters = () => {
    setSelectedbrand("");
    setSelectedModel("");
    setSelectedColor("");
    setSelectedYear("");
    setSelectedFuelType("");
    setValueCar([0, 550000]);
    setValueKmCar([0, 650000]);
  };

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await api.get('/cars')
        setCars(res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCars()
  }, [])

  return (
    <HomeContext.Provider
      value={{
        selectedbrand,
        setSelectedbrand,
        selectedModel,
        setSelectedModel,
        selectedColor,
        setSelectedColor,
        selectedYear,
        setSelectedYear,
        selectedFuelType,
        setSelectedFuelType,
        valueCar,
        setValueCar,
        valueKmCar,
        setValueKmCar,
        modalFilter,
        setModalFilter,
        clearFilters,
        cars
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
