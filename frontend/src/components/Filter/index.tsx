import { useContext } from "react";
import FilterBrand from "./brand";
import ModelCars from "./model";
import ColorCars from "./color";
import YearCars from "./Year";
import FuelTypeCars from "./FuelType";
import RangeSlider from "./price";
import RangeKMSlider from "./km";
import { ButtonFilter, FilterStyle } from "./style";
import ModalFilter from "./modalRenderFilter";
import { HomeContext } from "../../providers/HomeProvider";

const FilterCars = () => {
  const { setModalFilter } = useContext(HomeContext);

  return (
    <>
      <div>
        <ButtonFilter
          onClick={() => {
            setModalFilter(true);
          }}
        >
          Filtros
        </ButtonFilter>
      </div>

      <FilterStyle>
        <ModalFilter />
        <FilterBrand />
        <ModelCars />
        <ColorCars />
        <YearCars />
        <FuelTypeCars />
        <RangeKMSlider />
        <RangeSlider />
        <button> Limpar Filtros </button>
      </FilterStyle>
    </>
  );
};

export default FilterCars;
