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
import Loading from "../../Loading";

const CardAdmin = () => {
  const { allcarsUserPerPage2, userIdCars, loading } = useContext(UserContext);

  if (allcarsUserPerPage2.length === 0) return <NothingHere />;

  if(loading) return <h1><Loading /></h1>
  
  return (
    <>
      {allcarsUserPerPage2.map((car) => (
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
      ))}
    </>
  );
};
export default CardAdmin;