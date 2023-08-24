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

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/profile");
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
      <ModalItem onClick={() => setProfileEditModal(!profileEditModal)}>
        Editar Perfil
      </ModalItem>
      <ModalItem onClick={() => setAddressEditModal(!addressEditModal)}>
        Editar endereço
      </ModalItem>
      {userIdCars?.seller === true ? (
        <ModalItem onClick={() => handleClickNavigate()}>
          Meus anúncios
        </ModalItem>
      ) : null}
      <ModalItem onClick={() => logout()}>Sair</ModalItem>
    </ModalHeaderContainer>
  );
};

export default UserModalHeader;
