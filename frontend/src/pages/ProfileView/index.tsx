import { useContext } from "react";
import CardAdmin from "../../components/CardHome/CardAdmin";
import EditProfileModal from "../../components/EditProfileModal";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import SectionProfileInfo from "../../components/SectionProfileView";
import { CardListProfile, MainContainerProfile } from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { ButtonNext, NextButtonContainer } from "../Home/style";

const ProfileView = () => {
  const {
    profileEditModal,
    currentPageprofile,
    setCurrentPageprofile,
    allcarsUser,
  } = useContext(UserContext);

  const itemsPerPage = 12;

  const totalItems = allcarsUser.length + 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
