import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CarContext } from "../CarProvider/CarContext";
import { api } from "../../services/api";
import { ICar, TDataCarResponse } from "../CarProvider/@types";

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
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  allcarsPages: [] | ICar[];
  // totalPages: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  seller: boolean;
  isAdm: boolean;
  cellPhone: string;
  cpf: string;
  dateOfBirth: string;
  description: string;
  city: string;
  state: string;
  street: string;
  number: number;
  complement: string;
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

  const { setAllCars } = useContext(CarContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  // let totalPages = 1;

  const [allcarsPages, setallcarsPages] = useState<ICar[] | []>([]);

  const filterCars = async () => {
    try {
      const response = await api.get<TDataCarResponse[]>("/cars");
      setallcarsPages(response.data);

      let filteredCars = response.data;

      // const totalItems = filteredCars.length + 1;
      // totalPages = Math.ceil(totalItems / itemsPerPage);

      if (selectedbrand !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.brand === selectedbrand
        );
        // setCurrentPage(1);
      }

      if (selectedModel !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.model === selectedModel
        );
        // setCurrentPage(1);
      }
      if (selectedColor !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.color === selectedColor
        );
        // setCurrentPage(1);
      }

      if (selectedYear !== "") {
        filteredCars = filteredCars.filter((car) => car.year === selectedYear);
        // setCurrentPage(1);
      }

      if (selectedFuelType !== "") {
        filteredCars = filteredCars.filter(
          (car) => car.fuel === selectedFuelType
        );
        // setCurrentPage(1);
      }

      if (valueKmCar[0] > 0 || valueKmCar[1] < 650000) {
        filteredCars = filteredCars.filter(
          (car) => car.km >= valueKmCar[0] && car.km <= valueKmCar[1]
        );
        // setCurrentPage(1);
      }

      if (valueCar[0] > 0 || valueCar[1] < 550000) {
        filteredCars = filteredCars.filter(
          (car) => car.price >= valueCar[0] && car.price <= valueCar[1]
        );
        // setCurrentPage(1);
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setallcarsPages(filteredCars);

      const listpagination = filteredCars.slice(startIndex, endIndex);
      setAllCars(listpagination);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const totalItems = allcarsPages.length + 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  useEffect(() => {
    filterCars();
  }, [
    selectedbrand,
    selectedModel,
    selectedColor,
    selectedYear,
    selectedFuelType,
    valueKmCar,
    valueCar,
    currentPage,
    allcarsPages,
  ]);

  useEffect(() => {
    filterCars();
    setValueKmCar([0, 640000]);
    setValueKmCar([0, 650000]);
  }, []);

  const clearFilters = () => {
    setSelectedbrand("");
    setSelectedModel("");
    setSelectedColor("");
    setSelectedYear("");
    setSelectedFuelType("");
    setValueCar([0, 550000]);
    setValueKmCar([0, 650000]);

    filterCars();
  };

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
        currentPage,
        setCurrentPage,
        allcarsPages,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
