import { useContext } from "react"
import { ButtonCreate, SectionProfileInfoComponent, SiglaUser, UserDiv } from "./style"
import { UserContext } from "../../providers/UserProvider/UserContext"

const SectionProfileInfo = () => {
  const { user } = useContext(UserContext)

  return (
    <SectionProfileInfoComponent>
      <UserDiv>
        <SiglaUser>{user?.name[0]}</SiglaUser>
        <div>
          <span>{user?.name}</span>
          {user?.seller === true ? <span>Anunciante</span> : <span>Comprador</span>}
        </div>
      </UserDiv>
      <p>{user?.description}</p>
      {user?.seller === true ? <ButtonCreate>Criar anúncio</ButtonCreate> : null }
    </SectionProfileInfoComponent>
  )
}

export default SectionProfileInfo