import { useContext } from "react";
import { ModalContainer, ModalContent, CloseButton, Title, TitleAndBtnCloseContainer, RangeContainer, CarFilters } from "./style";
import { HomeContext } from "../../../providers/HomeProvider/HomeProvider";
import FilterBrand from "../brand";
import ModelCars from "../model";
import ColorCars from "../color";
import YearCars from "../year";
import FuelTypeCars from "../fuelType";
import { RangeKMSlider } from "../km";
import { RangeSlider } from "../price";

const ModalFilter = () => {
  const { modalFilter, setModalFilter, clearFilters } = useContext(HomeContext);

  const closeModal = () => {
    setModalFilter(false);
  };

  if (!modalFilter) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <TitleAndBtnCloseContainer>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <Title>Filtro</Title>
        </TitleAndBtnCloseContainer>
        <CarFilters>
          <FilterBrand />
          <ModelCars />
          <ColorCars />
          <YearCars />
          <FuelTypeCars />
        </CarFilters>
        <RangeContainer>
          <RangeKMSlider />
          <RangeSlider />
          <button onClick={clearFilters}> Limpar Filtros </button>
        </RangeContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalFilter;
