import { CardContainer, ContactUserContainer, ContainerInfo, ContainerInfoCar, FigureContainer } from './style'

const CardHome = () => {

  return (
    <CardContainer>
      <FigureContainer>
        <img src="https://cdn.buttercms.com/PxDTu9VtS3uuVA2sogHB" alt="car name" />
      </FigureContainer>
      <ContainerInfo>
        <h3>Maseratti - Ghibli</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Veritatis, quisquam provident. Expedita rerum magnam incidunt culpa.
        </p>
        <ContactUserContainer>
          <span>S</span>
          <span>Samuel Leão</span>
        </ContactUserContainer>
        <ContainerInfoCar>
          <div>
            <span>0 KM</span>
            <span>2019</span>
          </div>
          <span>R$ 00.000,00</span>
        </ContainerInfoCar>
      </ContainerInfo>
    </CardContainer>
  )
}

export default CardHome