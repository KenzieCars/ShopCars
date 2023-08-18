import { useContext } from "react";
import {
  ButtonCreate,
  SectionProfileInfoComponent,
  SiglaUser,
  UserDiv,
} from "./style";
import { UserContext } from "../../providers/UserProvider/UserContext";

const SectionProfileInfo = () => {
  const { user, userIdCars } = useContext(UserContext);

  return (
    <SectionProfileInfoComponent>
      <UserDiv>
        <SiglaUser>{userIdCars?.name[0]}</SiglaUser>
        <div>
          <span>{userIdCars?.name}</span>
          <span>Anunciante</span>
        </div>
      </UserDiv>
      {/* <p>{userIdCarsser?.description}</p> */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam
        eligendi eius perferendis nesciunt cumque ab, accusantium ratione
        voluptatibus? Quasi quia distinctio cupiditate velit numquam officiis
        pariatur autem quae alias?
      </p>
      <ButtonCreate>Criar anúncio</ButtonCreate>
      {user?.isAdmin === true ? (
        <ButtonCreate>Criar anúncio</ButtonCreate>
      ) : null}
    </SectionProfileInfoComponent>
  );
};

export default SectionProfileInfo;
