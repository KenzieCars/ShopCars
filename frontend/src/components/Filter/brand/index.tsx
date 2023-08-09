import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider";
import { CustomSelect } from "./style";

const FilterBrand = () => {
  const { selectedbrand, setSelectedbrand } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedbrand(option);
  };

  return (
    <CustomSelect>
      <div className="select-header">Marca</div>
      <div className="options">
        <div
          className={`option ${
            selectedbrand === "general motors" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("general motors")}
        >
          General Motors
        </div>
        <div
          className={`option ${selectedbrand === "fiat" ? "selected" : ""}`}
          onClick={() => handleOptionClick("fiat")}
        >
          Fiat
        </div>
        <div
          className={`option ${selectedbrand === "ford" ? "selected" : ""}`}
          onClick={() => handleOptionClick("ford")}
        >
          Ford
        </div>
        <div
          className={`option ${selectedbrand === "honda" ? "selected" : ""}`}
          onClick={() => handleOptionClick("honda")}
        >
          Honda
        </div>
        <div
          className={`option ${selectedbrand === "porsche" ? "selected" : ""}`}
          onClick={() => handleOptionClick("porsche")}
        >
          Porsche
        </div>
        <div
          className={`option ${
            selectedbrand === "volkswagen" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("volkswagen")}
        >
          Volkswagen
        </div>
      </div>
    </CustomSelect>
  );
};

export default FilterBrand;
