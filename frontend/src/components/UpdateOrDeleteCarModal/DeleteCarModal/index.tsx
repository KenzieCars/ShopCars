import { DeleteModalButtons, DeleteModalContainer, DeleteModalHeader, DeleteModalWrapper } from "./style";
import { IDeleteModalProps } from "../@types";
import { useContext } from "react";
import { CarContext } from "../../../providers/CarProvider/CarContext";


const DeleteCarModal = ({ carId, setDeleteCarModal, setUpdateModal }: IDeleteModalProps) => {
    const { deleteCar } = useContext(CarContext);

    const handleDeleteCar = async (id: string): Promise<void> => {
        try {
            await deleteCar(id);
            setDeleteCarModal(false);
            setUpdateModal(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <DeleteModalWrapper role="dialog">
            <DeleteModalContainer>
                <DeleteModalHeader>
                    <h3>Excluir anúncio</h3>
                    <span onClick={() => setDeleteCarModal(false)}>X</span>
                </DeleteModalHeader>
                <h4>Tem certeza que deseja remover este anúncio?</h4>
                <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>
                <DeleteModalButtons>
                    <button type="button" className="cancel" onClick={() => setDeleteCarModal(false)}>Cancelar</button>
                    <button type="button" className="delete" onClick={() => handleDeleteCar(carId!)}>Sim, excluir anúncio</button>
                </DeleteModalButtons>
            </DeleteModalContainer>
        </DeleteModalWrapper>
    )
}

export default DeleteCarModal