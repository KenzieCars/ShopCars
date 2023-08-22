import { useContext, useEffect, useState } from "react"
import { CardModalItem, CloseThisModal, ModalCardContainer } from "./style"
import { UserContext } from "../../../../providers/UserProvider/UserContext"

const CardModalAdmin = () => {
  const { logout, user, profileEditModal, setProfileEditModal, setAddressEditModal, addressEditModal, cardModal, setCardModal } = useContext(UserContext)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <ModalCardContainer style={{ transform: isVisible ? "translateY(0)" : "translateY(-30%)", opacity: isVisible ? 1 : 0 }}>
      <CloseThisModal onClick={() => setCardModal(!cardModal)}>X</CloseThisModal>
      <CardModalItem onClick={() => console.log('Editar carro')}>Editar</CardModalItem>
      <CardModalItem onClick={() => console.log('ver carro')}>Ver anúncio</CardModalItem>
    </ModalCardContainer>
  )
}

export default CardModalAdmin