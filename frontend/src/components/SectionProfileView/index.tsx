import { useContext } from "react"
import { ButtonCreate, SectionProfileInfoComponent, SiglaUser, UserDiv } from "./style"
import { UserContext } from "../../providers/UserProvider/UserContext"

const SectionProfileInfo = () => {
  const { userIdCars } = useContext(UserContext)

  return (
    <SectionProfileInfoComponent>
      <UserDiv>
        <SiglaUser>{userIdCars?.name[0]}</SiglaUser>
        <div>
          <span>{userIdCars?.name}</span>
          {userIdCars?.seller === true ? <span>Anunciante</span> : <span>Comprador</span>}
        </div>
      </UserDiv>
      <p>{userIdCars?.description}</p>
      {userIdCars?.seller === true ? <ButtonCreate>Criar anúncio</ButtonCreate> : null }
    </SectionProfileInfoComponent>
  )
}

export default SectionProfileInfo