import { useContext } from "react";
import {
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  FigureContainer,
  FlagGoodDeal,
  DescriptionWithOverFlow
} from "./style";
import { CarContext } from "../../providers/CarProvider/CarContext";
import NothingHere from "../NothingHere";
import { TbFlag3Filled } from "react-icons/tb";
import { Link } from "react-router-dom";

const CardHome = () => {
  const { allcars } = useContext(CarContext);

  if (allcars.length === 0) return <NothingHere />;

  return (
    <>
      {allcars.map((car) => (
        <Link to={`/product/${car.id}`} key={car.id}>
          <CardContainer key={car.id}>
            <FigureContainer>
              <img src={car.imgCover} alt={car.model} />
            </FigureContainer>
            <ContainerInfo>
              <h3 className="truncated-title">
                {car.brand} - {car.model}
              </h3>
              <DescriptionWithOverFlow>
                <p>{car.description}</p>
              </DescriptionWithOverFlow>
  
              <ContactUserContainer>
                <span>{car.user.name[0]}</span>
                <span>{car.user.name}</span>
              </ContactUserContainer>
              <ContainerInfoCar>
                <div>
                  <span>{car.km} KM</span>
                  <span>{car.year}</span>
                </div>
                <span>R$ {car.price}</span>
              </ContainerInfoCar>
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

export default CardHome;
