import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../providers/UserProvider/UserContext"
import { ModalHeaderContainer, ModalItem } from "./style"

const UserModalHeader = () => {
  const { logout, user, profileEditModal, setProfileEditModal } = useContext(UserContext) 

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <ModalHeaderContainer style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)", opacity: isVisible ? 1 : 0 }}>
      <ModalItem onClick={() => { console.log("Botão clicado");  setProfileEditModal(!profileEditModal)}}>Editar Perfil</ModalItem>
      <ModalItem>Editar endereço</ModalItem>
      {user?.seller === true ? <ModalItem>Meus anúncios</ModalItem> : null}
      <ModalItem onClick={() => logout()}>Sair</ModalItem>
    </ModalHeaderContainer>
  )
}

export default UserModalHeader