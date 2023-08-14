import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import { ModelCarsWrapper } from "./style";

const ModelCars = () => {
  const { selectedModel, setSelectedModel } = useContext(HomeContext);

  const handleOptionClick = (option: string) => {
    setSelectedModel(option);
  };

  return (
    <ModelCarsWrapper>
      <div className="select-header">Modelo</div>
      <div className="options">
        <div
          className={`option ${selectedModel === "civic" ? "selected" : ""}`}
          onClick={() => handleOptionClick("civic")}
        >
          Civic
        </div>
        <div
          className={`option ${selectedModel === "corola" ? "selected" : ""}`}
          onClick={() => handleOptionClick("corola")}
        >
          Corola
        </div>
        <div
          className={`option ${selectedModel === "cruze" ? "selected" : ""}`}
          onClick={() => handleOptionClick("cruze")}
        >
          Cruze
        </div>
        <div
          className={`option ${selectedModel === "fit" ? "selected" : ""}`}
          onClick={() => handleOptionClick("fit")}
        >
          Fit
        </div>
        <div
          className={`option ${selectedModel === "gol" ? "selected" : ""}`}
          onClick={() => handleOptionClick("gol")}
        >
          Gol
        </div>
        <div
          className={`option ${selectedModel === "Ka" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Ka")}
        >
          Ka
        </div>
        <div
          className={`option ${selectedModel === "onix" ? "selected" : ""}`}
          onClick={() => handleOptionClick("onix")}
        >
          Onix
        </div>
        <div
          className={`option ${selectedModel === "Porsche 718" ? "selected" : ""
            }`}
          onClick={() => handleOptionClick("Porsche 718")}
        >
          Porsche 718
        </div>
      </div>
    </ModelCarsWrapper>
  );
};

export default ModelCars;
