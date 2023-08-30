import { Link } from "react-router-dom"
import { CardContainer, ContactUserContainer, ContainerInfo, ContainerInfoCar, DescriptionWithOverFlow, FigureContainer, FlagGoodDeal } from "./style"
import { TbFlag3Filled } from "react-icons/tb"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserProvider/UserContext"
import { CarContext } from "../../../providers/CarProvider/CarContext"

const CardUserAds = () => {
  const { userSelected } = useContext(UserContext)
  const { carsSellerId } = useContext(CarContext)

  const searchDataCar = async (carId: string) => {
    await carsSellerId(carId);
  };

  // console.log(userSelected)

  return (
    <>
      {userSelected.cars?.map((car) => (
        <Link
          to={`/product/${car.id}`}
          key={car.id}
          onClick={() => searchDataCar(car.id)}
        >
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
            {car.bestPrice && (
              <FlagGoodDeal>
                <TbFlag3Filled />
              </FlagGoodDeal>
            )}
          </CardContainer>
        </Link>
      ))}
    </>
  )
}

export default CardUserAds
