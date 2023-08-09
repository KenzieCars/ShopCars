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
import { Header } from "../../components/header";
import ButtonHome from "../../components/Filter/butonModal";
import ModalFilter from "../../components/Filter/modalRenderFilter";
import FilterCars from "../../components/Filter";

const Home = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <TitleContainer>
          <h1>Motors Shop</h1>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </TitleContainer>
        <img
          src="https://images.pexels.com/photos/6969035/pexels-photo-6969035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
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
