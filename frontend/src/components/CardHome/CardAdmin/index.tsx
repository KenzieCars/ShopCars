import { useContext, useState } from "react";
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
import { BiSolidBadgeDollar } from "react-icons/bi";
import NothingHere from "../../NothingHere";
import { UserContext } from "../../../providers/UserProvider/UserContext";
import UpdateOrDeleteCarModal from "../../UpdateOrDeleteCarModal";
import { TDataCarResponse } from "../../../providers/CarProvider/@types";
import Loading from "../../Loading";

const CardAdmin = () => {
  const { allcarsUserPerPage2, userIdCars, loading } = useContext(UserContext);
  const [updateOrDeleteModal, setUpdateOrDeleteModal] = useState<boolean>(false);
  const [carToUpdate, setCarToUpdate] = useState<null | TDataCarResponse>(null);
  
  if (allcarsUserPerPage2.length === 0) return <NothingHere />;

  if (loading)
    return (
      <h1>
        <Loading />
      </h1>
    );
  
  const handleUpdateOrDeleteCarModal = (car: TDataCarResponse,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    setCarToUpdate(car);
    setUpdateOrDeleteModal(true);
  };

  return (
    <>
      {allcarsUserPerPage2.map((car) => (
        <CardContainer key={car.id}>
          {car.status === false ? (
            <FlagNotAvailable>Inativo</FlagNotAvailable>
          ) : (
            <FlagAvailable>Ativo</FlagAvailable>
          )}
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
              <button onClick={(event) => handleUpdateOrDeleteCarModal(car, event)}>Editar</button>
              <button>Ver detalhes</button>
            </ButtonContainer>
          </ContainerInfo>
          {car.bestPrice && (
            <FlagGoodDeal>
                <BiSolidBadgeDollar />
            </FlagGoodDeal>
          )}
        </CardContainer>
      ))}
      {updateOrDeleteModal && <UpdateOrDeleteCarModal
        setModal={setUpdateOrDeleteModal} car={carToUpdate} />}
    </>
  );
};
export default CardAdmin;
