import CardHome from "../../components/CardHome";

import {
  DivCar,
  DivCard,
  DivTest,
  ListCardUserPage,
  UserPageSection,
} from "./style";
import RegisterFooter from "../../components/RegisterFooter";
import { HeaderUserPage } from "../../components/Header";

const UserPage = () => {
  return (
    <>
      <HeaderUserPage />
      <UserPageSection>
        <DivCard>
          <div>
            <h2>SL</h2>
          </div>
          <h1>Samuel Leão</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            obcaecati non maxime quaerat aut nihil rerum accusamus ipsa.
            Similique quibusdam officiis
          </span>
        </DivCard>
        <DivCar>
          <DivTest>
            <h2>Anúncios</h2>
          </DivTest>
          <ListCardUserPage>
            <CardHome />
          </ListCardUserPage>
        </DivCar>
      </UserPageSection>
      <RegisterFooter />
    </>
  );
};

export default UserPage;
