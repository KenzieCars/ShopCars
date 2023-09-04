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
import { useContext } from "react";
import { CarContext } from "../../providers/CarProvider/CarContext";
import { ButtonNext, NextButtonContainer } from "../Home/style";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const UserAds = () => {
  const userData: TDataCarResponse[] | null = JSON.parse(
    localStorage.getItem("@carsSellerSelect") || "null"
  );

  const { carsSellerSelect, currentPageprofile, setCurrentPageprofile } =
    useContext(CarContext);

  const itemsPerPage = 12;
  let totalPages = 1;
  if (carsSellerSelect!.length < 12) {
    const totalItems = carsSellerSelect!.length + 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  } else {
    const totalItems = carsSellerSelect!.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
  }

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

      <NextButtonContainer>
        {currentPageprofile > 1 && (
          <ButtonNext
            to={`/user/${userData![0].user.id}`}
            onClick={() => {
              setCurrentPageprofile(currentPageprofile - 1);
            }}
          >
            <BsArrowLeftShort />
            Anterior
          </ButtonNext>
        )}

        <span>
          {currentPageprofile} de {totalPages}
        </span>
        {currentPageprofile < totalPages && (
          <ButtonNext
            to={`/user/${userData![0].user.id}`}
            onClick={() => {
              setCurrentPageprofile(currentPageprofile + 1);
            }}
          >
            Seguinte
            <BsArrowRightShort />
          </ButtonNext>
        )}
      </NextButtonContainer>
      <Footer />
    </>
  );
};

export default UserAds;
