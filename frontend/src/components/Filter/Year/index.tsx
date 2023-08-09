import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider";
import { YearCarsWrapper } from "./style";

const YearCars = () => {
  const { selectedYear, setSelectedYear } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedYear(option);
  };

  return (
    <YearCarsWrapper>
      <div className="select-header">Ano do Carro</div>
      <div className="options">
        {[...Array(14)].map((_, index) => {
          const year = 2010 + index;
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
