import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { ColorCarsWrapper } from "./style";

const ColorCars = () => {
  const { selectedColor, setSelectedColor } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedColor(option);
  };

  return (
    <ColorCarsWrapper>
      <div className="select-header">Cor</div>
      <div className="options">
        <div
          className={`option ${selectedColor === "azul" ? "selected" : ""}`}
          onClick={() => handleOptionClick("azul")}
        >
          Azul
        </div>
        <div
          className={`option ${selectedColor === "branca" ? "selected" : ""}`}
          onClick={() => handleOptionClick("branca")}
        >
          Branca
        </div>
        <div
          className={`option ${selectedColor === "cinza" ? "selected" : ""}`}
          onClick={() => handleOptionClick("cinza")}
        >
          Cinza
        </div>
        <div
          className={`option ${selectedColor === "prata" ? "selected" : ""}`}
          onClick={() => handleOptionClick("prata")}
        >
          Prata
        </div>
        <div
          className={`option ${selectedColor === "preta" ? "selected" : ""}`}
          onClick={() => handleOptionClick("preta")}
        >
          Preta
        </div>
        <div
          className={`option ${selectedColor === "verde" ? "selected" : ""}`}
          onClick={() => handleOptionClick("verde")}
        >
          Verde
        </div>
      </div>
    </ColorCarsWrapper>
  );
};

export default ColorCars;
