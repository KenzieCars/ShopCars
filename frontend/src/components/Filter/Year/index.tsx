import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { YearCarsWrapper } from "./style";

const YearCars = () => {
  const { selectedYear, setSelectedYear } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedYear((prevSelected) => (prevSelected === option ? "" : option));
  };

  return (
    <YearCarsWrapper>
      <div className="select-header">Ano do Carro</div>
      <div className="options">
        {[...Array(5)].map((_, index) => {
          const year = 2019 + index;
          return (
            <div
              key={year}
              className={`option ${
                selectedYear === year.toString() ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(year.toString())}
            >
              {year}
            </div>
          );
        })}
      </div>
    </YearCarsWrapper>
  );
};

export default YearCars;
