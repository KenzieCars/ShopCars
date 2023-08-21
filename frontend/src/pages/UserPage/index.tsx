import CardHome from "../../components/CardHome";
import {
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile,
} from "./style";
import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";
import { Header } from "../../components/header";
import EditProfileModal from "../../components/EditProfileModal";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

const UserPage = () => {
  const { profileEditModal } = useContext(UserContext);

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
      <Footer />
    </>
  );
};

export default UserPage;
