import { useContext } from "react";
import {
  ButtonContainer,
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  DescriptionWithOverFlowAdm,
  FigureContainer,
  FlagGoodDeal,
} from "./style";
import { TbFlag3Filled } from "react-icons/tb";
import NothingHere from "../../NothingHere";
import { UserContext } from "../../../providers/UserProvider/UserContext";

const CardAdmin = () => {
  const { allcarsUserPerPage2, userIdCars } = useContext(UserContext);

  if (allcarsUserPerPage2.length === 0) return <NothingHere />;

  return (
    <>
      {allcarsUserPerPage2.map((car) => (
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
              <span>{userIdCars?.name[0]}</span>
              <span>{userIdCars?.name}</span>
            </ContactUserContainer>
            <ContainerInfoCar>
              <div>
                <span>{car.km} KM</span>
                <span>{car.year}</span>
              </div>
              <span>R$ {car.price}</span>
            </ContainerInfoCar>
            <ButtonContainer>
              <button>Editar</button>
              <button>Ver detalhes</button>
            </ButtonContainer>
          </ContainerInfo>
          <FlagGoodDeal>
            <TbFlag3Filled />
          </FlagGoodDeal>
          {/* <TresPontinhos onClick={() => setCardModal(!cardModal)}>
            <MdMoreVert />
          </TresPontinhos>
          {cardModal && <CardModalAdmin />} */}
        </CardContainer>
      ))}
    </>
  );
};

export default CardAdmin;
