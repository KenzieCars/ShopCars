import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";
import { BsArrowRightShort } from "react-icons/bs";
import {
  BannerContainer,
  ButtonNext,
  ListCardContainer,
  MainContainerHome,
  NextButtonContainer,
  TitleContainer,
} from "./style";
import { Header } from "../../components/Header";
import ButtonHome from "../../components/Filter/butonModal";
import ModalFilter from "../../components/Filter/modalRenderFilter";
import FilterCars from "../../components/Filter";
import CustomSwiperComponent from "../../components/Swiper";

const Home = () => {
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
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </ListCardContainer>
      </MainContainerHome>
      <ButtonHome />
      <ModalFilter />
      <NextButtonContainer>
        <span>1 de 2</span>
        <ButtonNext to="/">
          Seguinte
          <BsArrowRightShort />
        </ButtonNext>
      </NextButtonContainer>
      <Footer />
    </>
  );
};

export default Home;
