import { useContext } from "react";
import { ModalContainer, ModalContent, CloseButton, Title } from "./style";
import { HomeContext } from "../../../providers/HomeProvider";
import FilterBrand from "../brand";
import ModelCars from "../model";
import ColorCars from "../color";
import YearCars from "../Year";
import FuelTypeCars from "../FuelType";
import RangeKMSlider from "../km";
import RangeSlider from "../price";

const ModalFilter = () => {
  const { modalFilter, setModalFilter } = useContext(HomeContext);

  const closeModal = () => {
    setModalFilter(false);
  };

  if (!modalFilter) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Title>Filtro</Title>
        <FilterBrand />
        <ModelCars />
        <ColorCars />
        <YearCars />
        <FuelTypeCars />
        <RangeKMSlider />
        <RangeSlider />
        <button> Limpar Filtros </button>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalFilter;
