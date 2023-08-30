import { DeleteModalButtons, DeleteModalContainer, DeleteModalHeader, DeleteModalWrapper } from "./style";
import { IDeleteModalProps } from "../@types";


const DeleteCarModal = ({ carId, setModal }: IDeleteModalProps) => {

    return (
        <DeleteModalWrapper role="dialog">
            <DeleteModalContainer>
                <DeleteModalHeader>
                    <h3>Excluir anúncio</h3>
                    <span onClick={() => setModal(false)}>X</span>
                </DeleteModalHeader>
                <h4>Tem certeza que deseja remover este anúncio?</h4>
                <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>
                <DeleteModalButtons>
                    <button type="button" className="cancel" onClick={() => setModal(false)}>Cancelar</button>
                    <button type="button" className="delete">Sim, excluir anúncio</button>
                </DeleteModalButtons>
            </DeleteModalContainer>
        </DeleteModalWrapper>
    )
}

export default DeleteCarModal