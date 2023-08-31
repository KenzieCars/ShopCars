import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  CardListUserAds,
  SectionProfileInfoComponent,
  Shadow,
  SiglaUser,
  UserDiv,
} from "./style";
import CardUserAds from "./CardUserAds";
import { TDataCarResponse } from "../../providers/CarProvider/@types";

const UserAds = () => {
  const userData: TDataCarResponse[] | null = JSON.parse(
    localStorage.getItem("@carsSellerSelect") || "null"
  );

  return (
    <>
      <Header />
      <SectionProfileInfoComponent>
        <Shadow>
          <UserDiv>
            <SiglaUser>{userData![0].user.name[0]}</SiglaUser>
            <div>
              <span>{userData![0].user?.name}</span>
              <span>Anunciante</span>
            </div>
          </UserDiv>
          <p>{userData![0].user?.description}</p>
        </Shadow>
        <h2>Anúncios de {userData![0].user.name}</h2>
        <CardListUserAds>
          <CardUserAds />
        </CardListUserAds>
      </SectionProfileInfoComponent>
      <Footer />
    </>
  );
};

export default UserAds;
