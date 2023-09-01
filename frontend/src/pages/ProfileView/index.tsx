import { useContext, useEffect } from "react";
import CardAdmin from "../../components/CardHome/CardAdmin";
import EditProfileModal from "../../components/EditProfileModal";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import SectionProfileInfo from "../../components/SectionProfileView";
import { CardListProfile, MainContainerProfile } from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";
import { ButtonNext, NextButtonContainer } from "../Home/style";
import { CarContext } from "../../providers/CarProvider/CarContext";
import DetailsCarModal from "../../components/DetailsCarModal";

const ProfileView = () => {
  const {
    profileEditModal,
    currentPageprofile,
    setCurrentPageprofile,
    allcarsUser2,
    addressEditModal,
  } = useContext(UserContext);
  const { carDetailModal } = useContext(CarContext)

  const itemsPerPage = 12;
  let totalPages = 1;
  if (allcarsUser2.length < 12) {
    const totalItems = allcarsUser2.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsUser2.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainContainerProfile>
        <Header />
        <SectionProfileInfo />
        <CardListProfile>
          <CardAdmin />
        </CardListProfile>
      </MainContainerProfile>
      {profileEditModal && <EditProfileModal />}
      {addressEditModal && <EditAddressModal />}
      {carDetailModal && <DetailsCarModal />}

      <NextButtonContainer>
        {currentPageprofile > 1 && (
          <ButtonNext
            to="/profile"
            onClick={() => {
              setCurrentPageprofile(currentPageprofile - 1);
            }}
          >
            <BsArrowLeftShort />
            Anterior
          </ButtonNext>
        )}

        <span>
          {currentPageprofile} de {totalPages}
        </span>
        {currentPageprofile < totalPages && (
          <ButtonNext
            to="/profile"
            onClick={() => {
              setCurrentPageprofile(currentPageprofile + 1);
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

export default ProfileView;
