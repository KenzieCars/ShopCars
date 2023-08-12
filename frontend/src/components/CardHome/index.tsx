import { useContext } from "react";
import {
  CardContainer,
  ContactUserContainer,
  ContainerInfo,
  ContainerInfoCar,
  FigureContainer,
} from "./style";
import { HomeContext } from "../../providers/HomeProvider";

const CardHome = () => {
  const { cars } = useContext(HomeContext)

  return (
    <>
      {cars.map((car) => (
      <CardContainer>
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
            <span>S</span>
            <span>Samuel Leão</span>
          </ContactUserContainer>
          <ContainerInfoCar>
            <div>
                <span>{car.km} KM</span>
                <span>{car.year}</span>
            </div>
              <span>R$ {car.price}</span>
          </ContainerInfoCar>
        </ContainerInfo>
      </CardContainer>
        
      ))}
    </>
  );
};

export default CardHome;
