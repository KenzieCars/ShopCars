import { useContext, useState } from "react";
import {
  ButtonCreate,
  SectionProfileInfoComponent,
  SiglaUser,
  UserDiv,
} from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";
import RegisterCarModal from "../RegisterCarModal";

const SectionProfileInfo = () => {
  const { userIdCars } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  return (
    <SectionProfileInfoComponent>
      {modal && <RegisterCarModal setModal={setModal} />}
      <UserDiv>
        <SiglaUser>{userIdCars?.name[0]}</SiglaUser>
        <div>
          <span>{userIdCars?.name}</span>
          {userIdCars?.seller === true ? (
            <span>Anunciante</span>
          ) : (
            <span>Comprador</span>
          )}
        </div>
      </UserDiv>
      <p>{userIdCars?.description}</p>
      {userIdCars?.seller === true ? (
        <ButtonCreate onClick={() => setModal(true)}>
          Criar anúncio
        </ButtonCreate>
      ) : null}
    </SectionProfileInfoComponent>
  );
};

export default SectionProfileInfo;
