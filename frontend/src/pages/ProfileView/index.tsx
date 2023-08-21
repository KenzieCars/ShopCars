import { useContext, useEffect, useRef } from "react";
import CardAdmin from "../../components/CardHome/CardAdmin";
import EditProfileModal from "../../components/EditProfileModal";
import Footer from "../../components/Footer";
import { Header } from "../../components/header";

import SectionProfileInfo from "../../components/SectionProfileView";
import { CardListProfile, MainContainerProfile } from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import EditAddressModal from "../../components/EditProfileModal/EditAddressModal";

const ProfileView = () => {
  const { profileEditModal, setProfileEditModal, setAddressEditModal, addressEditModal } = useContext(UserContext)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleOutClick = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setProfileEditModal(false)
        setAddressEditModal(false)
      }
    }

    window.addEventListener('mousedown', handleOutClick)

    return () => {
      window.removeEventListener('mousedown', handleOutClick)
    }
  }, [])

  return (
    <>
      <MainContainerProfile>
        <Header />
        <SectionProfileInfo />
        <CardListProfile>
          <CardAdmin />
        </CardListProfile>
      </MainContainerProfile>
      {profileEditModal && <EditProfileModal ref={modalRef} />}
      {addressEditModal && <EditAddressModal ref={modalRef} />}
      <Footer />
    </>
  );
};

export default ProfileView;
