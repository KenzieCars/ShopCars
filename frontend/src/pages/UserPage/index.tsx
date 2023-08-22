import CardHome from "../../components/CardHome";
import {
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile,
} from "./style";
import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";
import { Header } from "../../components/Header";
import EditProfileModal from "../../components/EditProfileModal";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";

const UserPage = () => {
  const { profileEditModal, addressEditModal, userLogged } =
    useContext(UserContext);

  userLogged();

  return (
    <>
      <MainContainerUserProfile>
        <Header />
        <SectionProfileView />
        <Divanucios>
          <h2>Anúncios</h2>
        </Divanucios>
        <ListCardUserPage>
          <CardHome />
        </ListCardUserPage>
      </MainContainerUserProfile>
      {profileEditModal && <EditProfileModal />}
      {addressEditModal && <EditAddressModal />}
      <Footer />
    </>
  );
};

export default UserPage;
