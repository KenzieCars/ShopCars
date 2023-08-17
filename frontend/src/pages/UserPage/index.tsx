import CardHome from "../../components/CardHome";
import {
  DivCar,
  DivCard,
  DivCardUser,
  DivNameUser,
  Divanucios,
  ListCardUserPage,
  SpanAnuciant,
  UserPageSection,
} from "./style";
import { HeaderUserPage } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import Footer from "../../components/Footer";

const UserPage = () => {
  const { userIdCars } = useContext(UserContext);

  return (
    <>
      <HeaderUserPage />
      <UserPageSection>
        <DivCard>
          <DivCardUser>
            <h2>{userIdCars?.name.slice(0, 2)}</h2>
          </DivCardUser>

          <DivNameUser>
            <h1>
              {userIdCars?.name.split(" ")[0]} {userIdCars?.name.split(" ")[1]}
            </h1>
            <SpanAnuciant>Anunciante</SpanAnuciant>
          </DivNameUser>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            obcaecati non maxime quaerat aut nihil rerum accusamus ipsa.
            Similique quibusdam officiis
          </span>
        </DivCard>
        <DivCar>
          <Divanucios>
            <h2>Anúncios</h2>
          </Divanucios>
          <ListCardUserPage>
            <CardHome />
          </ListCardUserPage>
        </DivCar>
      </UserPageSection>
      <Footer />
    </>
  );
};

export default UserPage;
