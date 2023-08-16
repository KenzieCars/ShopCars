import { useContext } from "react";
import {
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  FigureContainer,
  FlagGoodDeal,
} from "./style";
import { CarContext } from "../../providers/CarProvider/CarContext";
import NothingHere from "../NothingHere";
import { TbFlag3Filled  } from 'react-icons/tb'

const CardHome = () => {
  const { allcars } = useContext(CarContext)

  // console.log(allcars)

  if (allcars.length === 0) return <NothingHere />
  
  return (
    <>
      {allcars.map((car) => (
      <CardContainer key={car.id}>
        <FigureContainer>
          <img
            src={car.imgCover}
            alt={car.model}
          />
        </FigureContainer>
        <ContainerInfo>
            <h3>{car.brand} - {car.model}</h3>
          <p>
            {car.description}
          </p>
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
          <FlagGoodDeal><TbFlag3Filled /></FlagGoodDeal>
        </CardContainer>
      ))}
    </>
  );
};

export default CardHome;
