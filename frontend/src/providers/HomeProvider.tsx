import { createContext, ReactNode, useState } from "react";

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
  const [modalFilter, setModalFilter] = useState(true);

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
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
