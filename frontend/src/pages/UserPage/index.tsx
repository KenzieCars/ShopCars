import {
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile,
} from "./style";
import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";
import { Header } from "../../components/Header";
import EditProfileModal from "../../components/EditProfileModal";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";
import CardUserProfile from "../../components/CardUserPage";
import { ButtonNext, NextButtonContainer } from "../Home/style";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const UserPage = () => {
  const {
    profileEditModal,
    addressEditModal,
    currentPageprofileComum,
    setCurrentPageprofileComum,
    allcarsComumProfile,
  } = useContext(UserContext);

  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let totalPages = 1;
  if (allcarsComumProfile.length < 12) {
    const totalItems = allcarsComumProfile.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = allcarsComumProfile.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  return (
    <>
      <MainContainerUserProfile>
        <Header />
        <SectionProfileView />
        <Divanucios>
          <h2>Anúncios</h2>
        </Divanucios>
        <ListCardUserPage>
          <CardUserProfile />
        </ListCardUserPage>
      </MainContainerUserProfile>
      {profileEditModal && <EditProfileModal />}
      {addressEditModal && <EditAddressModal />}
      <NextButtonContainer>
        {currentPageprofileComum > 1 && (
          <ButtonNext
            to="/userPage"
            onClick={() => {
              setCurrentPageprofileComum(currentPageprofileComum - 1);
            }}
          >
            <BsArrowLeftShort />
            Anterior
          </ButtonNext>
        )}

        <span>
          {currentPageprofileComum} de {totalPages}
        </span>
        {currentPageprofileComum < totalPages && (
          <ButtonNext
            to="/userPage"
            onClick={() => {
              setCurrentPageprofileComum(currentPageprofileComum + 1);
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

export default UserPage;
