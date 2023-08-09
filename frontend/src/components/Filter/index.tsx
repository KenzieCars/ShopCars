import { useContext } from "react";
import FilterBrand from "./brand";
import ModelCars from "./model";
import ColorCars from "./color";
import YearCars from "./year";
import FuelTypeCars from "./fuelType";
import RangeSlider from "./price";
import RangeKMSlider from "./km";
import { FilterStyle } from "./style";
import ModalFilter from "./modalRenderFilter";
import { HomeContext } from "../../providers/HomeProvider";

const FilterCars = () => {
  const { clearFilters } = useContext(HomeContext);

  return (
    <FilterStyle>
      <ModalFilter />
      <FilterBrand />
      <ModelCars />
      <ColorCars />
      <YearCars />
      <FuelTypeCars />
      <RangeKMSlider />
      <RangeSlider />
      <button onClick={clearFilters}> Limpar Filtros </button>
    </FilterStyle>
  );
};

export default FilterCars;
