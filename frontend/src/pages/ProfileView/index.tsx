import { useContext } from "react";
import CardAdmin from "../../components/CardHome/CardAdmin";
import EditProfileModal from "../../components/EditProfileModal";
import Footer from "../../components/Footer";
import { Header } from "../../components/header";

import SectionProfileInfo from "../../components/SectionProfileView";
import { CardListProfile, MainContainerProfile } from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";

const ProfileView = () => {
  const { profileEditModal, addressEditModal } = useContext(UserContext)

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
      <Footer />
    </>
  );
};

export default ProfileView;
