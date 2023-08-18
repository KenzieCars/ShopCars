import { useContext, useState } from "react"
import { ButtonCreate, SectionProfileInfoComponent, SiglaUser, UserDiv } from "./style"
import { UserContext } from "../../providers/UserProvider/UserContext"
import RegisterCarModal from "../RegisterCarModal"

const SectionProfileInfo = () => {
  const { user } = useContext(UserContext)
  const [modal, setModal] = useState(false)

  return (
    <SectionProfileInfoComponent>
      {modal && <RegisterCarModal setModal={setModal} />}
      <UserDiv>
        <SiglaUser>{user?.name[0]}</SiglaUser>
        <div>
          <span>{user?.name}</span>
          {user?.seller === true ? <span>Anunciante</span> : <span>Comprador</span>}
        </div>
      </UserDiv>
      <p>{user?.description}</p>
      {user?.seller === true ? <ButtonCreate onClick={() => setModal(true)}>Criar anúncio</ButtonCreate> : null}
    </SectionProfileInfoComponent>
  )
}

export default SectionProfileInfo