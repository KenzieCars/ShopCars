import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import {
  BannerContainer,
  ButtonNext,
  ListCardContainer,
  MainContainerHome,
  NextButtonContainer,
  TitleContainer,
} from "./style";
import { Header } from "../../components/Header";
import ModalFilter from "../../components/Filter/ModalRenderFilter";
import FilterCars from "../../components/Filter";
import CustomSwiperComponent from "../../components/Swiper";
import { HomeContext } from "../../providers/HomeProvider/HomeProvider";
import { useContext } from "react";
import ButtonHome from "../../components/Filter/ButonModal";
// import { CarContext } from "../../providers/CarProvider/CarContext";

const Home = () => {
  // const { allcars } = useContext(CarContext);
  const { currentPage, setCurrentPage, allcarsPages } = useContext(HomeContext);
  const itemsPerPage = 12;

  const totalItems = allcarsPages.length + 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // if (currentPage == totalPages) {
  //   totalPages = currentPage + 1;
  // }

  // totalPages = Math.ceil(totalPages);
  // console.log(totalPages);

  return (
    <>
      <Header />
      <BannerContainer>
        <TitleContainer>
          <h1>Motors Shop</h1>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </TitleContainer>
        <CustomSwiperComponent />
      </BannerContainer>

      <MainContainerHome>
        <FilterCars />
        <ListCardContainer>
          <CardHome />
        </ListCardContainer>
      </MainContainerHome>
      <ButtonHome />
      <ModalFilter />
      <NextButtonContainer>
        {currentPage > 1 && (
          <ButtonNext
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <BsArrowLeftShort />
            Anterior
          </ButtonNext>
        )}
        <span>
          {currentPage} de {totalPages}
        </span>
        {currentPage < totalPages && (
          <ButtonNext
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Seguinte
            <BsArrowRightShort />
          </ButtonNext>
        )}
      </NextButtonContainer>
      <Footer />
    </>
  );
};

export default Home;
