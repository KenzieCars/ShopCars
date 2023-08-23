import { useContext } from "react";
import {
  ButtonContainer,
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  DescriptionWithOverFlowAdm,
  FigureContainer,
  FlagAvailable,
  FlagGoodDeal,
  FlagNotAvailable,
} from "./style";
import { TbFlag3Filled } from "react-icons/tb";
import NothingHere from "../../NothingHere";
import { UserContext } from "../../../providers/UserProvider/UserContext";
import { Link } from "react-router-dom";

const CardAdmin = () => {
  const { allcarsUserPerPage, userIdCars } =
    useContext(UserContext);

  if (allcarsUserPerPage.length === 0) return <NothingHere />;

  return (
    <>
      {allcarsUserPerPage.map((car) => (
        <Link to={`/product/${car.id}`} key={car.id}>
          <CardContainer key={car.id}>
            {car.status === false ? <FlagNotAvailable>Inativo</FlagNotAvailable> : <FlagAvailable>Ativo</FlagAvailable>}
            <FigureContainer>
              <img src={car.imgCover} alt={car.model} />
            </FigureContainer>
            <ContainerInfo>
              <h3 className="truncated-title">
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
          </CardContainer>
        </Link>
      ))}
    </>
  );
};

export default CardAdmin;
