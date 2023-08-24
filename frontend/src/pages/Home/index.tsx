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
import FilterCars from "../../components/Filter";
import CustomSwiperComponent from "../../components/Swiper";
import { HomeContext } from "../../providers/HomeProvider/HomeProvider";
import { useContext, useEffect } from "react";
import ButtonHome from "../../components/Filter/ButonModal";
import ModalFilter from "../../components/Filter/ModalRenderFilter";
import { Header } from "../../components/Header";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditProfileModal from "../../components/EditProfileModal";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";

// import { CarContext } from "../../providers/CarProvider/CarContext";

const Home = () => {
  const { currentPage, setCurrentPage, allcarsPages } = useContext(HomeContext);
  const { profileEditModal, addressEditModal } = useContext(UserContext)
  const itemsPerPage = 12;

  // const totalItems = allcarsPages.length + 1;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  let totalPages = 1;
  if (allcarsPages.length < 12) {
    const totalItems = allcarsPages.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsPages.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  useEffect(() => {
    // Rolar para o topo da página quando o componente for montado
    window.scrollTo(0, 0);
  }, []);

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
            to="/"
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
            to="/"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Seguinte
            <BsArrowRightShort />
          </ButtonNext>
        )}
      </NextButtonContainer>
      {profileEditModal && <EditProfileModal />}
      {addressEditModal && <EditAddressModal />}
      <Footer />
    </>
  );
};

export default Home;
