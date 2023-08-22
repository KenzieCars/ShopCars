import { useContext, useState } from "react";
import {
  ButtonContainer,
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  DescriptionWithOverFlowAdm,
  FigureContainer,
  FlagGoodDeal,
  TresPontinhos,
} from "./style";
import { TbFlag3Filled } from "react-icons/tb";
// import { CarContext } from "../../../providers/CarProvider/CarContext";
import NothingHere from "../../NothingHere";
import { UserContext } from "../../../providers/UserProvider/UserContext";
import { MdMoreVert } from 'react-icons/md'
import CardModalAdmin from "./CardModalAdmin";

const CardAdmin = () => {
  const { allcarsUserPerPage, user, cardModal, setCardModal } = useContext(UserContext);

  if (allcarsUserPerPage.length === 0) return <NothingHere />;
  // const user = localStorage.getItem("UserData")!;
  
  return (
    <>
      {allcarsUserPerPage.map((car) => (
        <CardContainer key={car.id}>
          <FigureContainer>
            <img src={car.imgCover} alt={car.model} />
          </FigureContainer>
          <ContainerInfo>
            <h3>
              {car.brand} - {car.model}
            </h3>
            <DescriptionWithOverFlowAdm>
              <p>{car.description}</p>
            </DescriptionWithOverFlowAdm>
            <ContactUserContainer>
              <span>{user?.name[0]}</span>
              <span>{user?.name}</span>
            </ContactUserContainer>
            <ContainerInfoCar>
              <div>
                <span>{car.km} KM</span>
                <span>{car.year}</span>
              </div>
              <span>R$ {car.price}</span>
            </ContainerInfoCar>
            {/* <ButtonContainer>
              <button>Editar</button>
              <button>Ver detalhes</button>
            </ButtonContainer> */}
          </ContainerInfo>
          <FlagGoodDeal>
            <TbFlag3Filled />
          </FlagGoodDeal>
          <TresPontinhos onClick={() => setCardModal(!cardModal)}>
            <MdMoreVert />
          </TresPontinhos>
          {cardModal && <CardModalAdmin />}
        </CardContainer>
      ))}
    </>
  );
};
export default CardAdmin;
