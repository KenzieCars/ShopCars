import { useContext } from "react"
import { InfoContainer, KmAndYear, ModalContainer, ModalDetails, NameAndPrice, PictureAndInfos, TitleAndCloseBtn } from "./style"
import { CarContext } from "../../providers/CarProvider/CarContext"
import { UserContext } from "../../providers/UserProvider/UserContext"

const DetailsCarModal = () => {
  const { carDetailModal, setCarDetailModal, selectedCar } = useContext(CarContext)
  const { userIdCars } =  useContext(UserContext)

  return (
    <ModalContainer>
      <ModalDetails>
        <TitleAndCloseBtn>
          <h4>Detalhes do veículo</h4>
          <span onClick={() => setCarDetailModal(!carDetailModal)}>X</span>
        </TitleAndCloseBtn>
        <PictureAndInfos>
          <figure>
            <img src={selectedCar?.imgCover} />
          </figure>
          <InfoContainer>
            <h5>{selectedCar?.brand} - {selectedCar?.model}</h5>
            <KmAndYear>
              <span>Km {selectedCar?.km}</span>
              <span>{selectedCar?.year}</span>
            </KmAndYear>
            <NameAndPrice>
              <div>
                <span>{userIdCars?.name[0]}</span>
                <span>{userIdCars?.name}</span>
              </div>
              <span>R$ {selectedCar?.price}</span>
            </NameAndPrice>
            <p>{selectedCar?.description}</p>
          </InfoContainer>
        </PictureAndInfos>
      </ModalDetails>
    </ModalContainer>
  )
}

export default DetailsCarModal