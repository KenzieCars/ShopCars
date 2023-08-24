import { LegacyRef } from "react";
import useOutClick from "../../hooks/useOutclick";
import { FormModalContainer, ModalContainer, ModalWrapper, TitleModal } from "../RegisterCarModal/style";
import { IUpdateModalProps } from "./@types";


const UpdateOrDeleteCarModal = ({ setModal, car }: IUpdateModalProps) => {

    const modalContainerRef = useOutClick(() => setModal(false));
    console.log(car);

    return (
        <ModalWrapper role="dialog">
            <ModalContainer ref={modalContainerRef as LegacyRef<HTMLDivElement>}>
                <FormModalContainer>
                    <TitleModal>
                        <h3>Editar anúncio</h3>
                        <span onClick={() => setModal(false)}>X</span>
                    </TitleModal>
                    <h2>{car?.model}</h2>



                </FormModalContainer>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default UpdateOrDeleteCarModal;