import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../providers/UserProvider/UserContext";
import { ModalHeaderContainer, ModalItem } from "./style";
import { useNavigate } from "react-router-dom";

const UserModalHeader = () => {
  const {
    logout,
    userIdCars,
    profileEditModal,
    setProfileEditModal,
    setAddressEditModal,
    addressEditModal,
  } = useContext(UserContext);

  const path = window.location.pathname;

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/profile");
  };

  const handleClickNavigateToUserPage = () => {
    navigate("/userPage");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ModalHeaderContainer
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {userIdCars?.seller === false && path !== "/userPage" ? (
        <ModalItem onClick={() => handleClickNavigateToUserPage()}>
          Ver perfil
        </ModalItem>
      ) : null}
      <ModalItem onClick={() => setProfileEditModal(!profileEditModal)}>
        Editar Perfil
      </ModalItem>
      <ModalItem onClick={() => setAddressEditModal(!addressEditModal)}>
        Editar endereço
      </ModalItem>
      {userIdCars?.seller === true && path !== "/profile" ? (
        <ModalItem onClick={() => handleClickNavigate()}>
          Meus anúncios
        </ModalItem>
      ) : null}
      <ModalItem onClick={() => logout()}>Sair</ModalItem>
    </ModalHeaderContainer>
  );
};

export default UserModalHeader;
