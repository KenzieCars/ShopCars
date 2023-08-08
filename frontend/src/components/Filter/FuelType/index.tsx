import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider";
import { FuelTypeCarsWrapper } from "./style";

const FuelTypeCars = () => {
  const { selectedFuelType, setSelectedFuelType } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedFuelType(option);
  };

  return (
    <FuelTypeCarsWrapper>
      <div className="select-header">Tipo de Combustível</div>
      <div className="options">
        <div
          className={`option ${
            selectedFuelType === "Elétrico" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Elétrico")}
        >
          Elétrico
        </div>
        <div
          className={`option ${selectedFuelType === "Flex" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Flex")}
        >
          Flex
        </div>
        <div
          className={`option ${
            selectedFuelType === "Híbrido" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Híbrido")}
        >
          Híbrido
        </div>
      </div>
    </FuelTypeCarsWrapper>
  );
};

export default FuelTypeCars;
