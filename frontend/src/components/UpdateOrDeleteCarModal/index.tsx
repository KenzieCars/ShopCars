import { LegacyRef, useState } from "react";
import useOutClick from "../../hooks/useOutclick";
import {
    AddImagesContainer,
    DualFields, FieldsetModal, FormModalContainer,
    ModalButtonContainer,
    ModalContainer, ModalWrapper, TitleModal
} from "../RegisterCarModal/style";
import { IChangeStyles, IUpdateModalProps, TUpdateSchema } from "./@types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getFuelTipe, numberToMoney } from "../RegisterCarModal/utils";
import { CarStatusField, UpdateButtonsContainer } from "./style";


const UpdateOrDeleteCarModal = ({ setModal, car }: IUpdateModalProps) => {

    const [isPublished, setIsPublished] = useState<boolean | undefined>(car?.status);
    const [extraImagesFields, setExtraImagesFields] = useState(0);
    const [deleteCarModal, setDeleteCarModal] = useState<boolean>(false);

    const modalContainerRef = useOutClick(() => setModal(false));
    const { register, handleSubmit, formState: { errors } } = useForm<TUpdateSchema>({
        // resolver: zodResolver()
    })

    const updateCar = (data: TUpdateSchema) => {
        console.log(data);
    }

    const changePublishedStyle = (): IChangeStyles => {
        if (isPublished) {
            return { background: "var(--black)" };
        } else {
            return {};
        }
    };

    const changeNotPublishedStyle = (): IChangeStyles => {
        if (!isPublished) {
            return { background: "var(--black)" };
        } else {
            return {};
        }
    };

    const addImageField = (): number[] => {
        // eslint-disable-next-line prefer-const
        let result: number[] = []
        for (let index: number = 0; index < extraImagesFields; index++) {
            result.push(index)
        }
        return result
    };

    return (
        <ModalWrapper role="dialog">
            <ModalContainer ref={modalContainerRef as LegacyRef<HTMLDivElement>}>
                <FormModalContainer onSubmit={handleSubmit(updateCar)}>
                    <TitleModal>
                        <h3>Editar anúncio</h3>
                        <span onClick={() => setModal(false)}>X</span>
                    </TitleModal>
                    <FieldsetModal>
                        <label>Marca</label>
                        <select {...register('brand')} >
                            <option value={car?.brand}>{car?.brand}</option>
                            {/* {anotherBrandOptions()} */}
                        </select>
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Modelo</label>
                        <select {...register('model')}>
                            <option value={car?.model}>{car?.model}</option>
                            {/* {anotherModelOptions()} */}
                        </select>
                    </FieldsetModal>
                    <DualFields>
                        <FieldsetModal>
                            <label>Ano</label>
                            <input {...register('year')} placeholder={car?.year} value={car?.year} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Combustivel</label>
                            <input disabled value={getFuelTipe(Number(car?.fuel))} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Quilometragem</label>
                            <input placeholder={car?.km.toString()} {...register('km')}
                                value={car?.km} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Cor</label>
                            <select {...register('color')}>
                                <option value={car?.color}>{car?.color}</option>
                                {/* {anotherColorOptions()} */}
                            </select>
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Preço tabela FIPE</label>
                            <input disabled value={"Em desenvolvimento"} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Preço</label>
                            <input placeholder={numberToMoney(car!.price)} {...register('price')}
                                value={car?.price} />
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label>Descrição</label>
                        <textarea placeholder={car?.description} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Publicado</label>
                    </FieldsetModal>
                    <CarStatusField>
                        <input {...register('status')} checked={car?.status} type="radio" value="true" id="published" onClick={() => setIsPublished(true)} />
                        <label style={changePublishedStyle()} htmlFor="published">Sim</label>
                        <input {...register('status')} checked={!car?.status} type="radio" value="false" id="not-published" onClick={() => setIsPublished(false)} />
                        <label style={changeNotPublishedStyle()} htmlFor="not-published" >Não</label>
                    </CarStatusField>
                    <FieldsetModal>
                        <label>Imagem da capa</label>
                        <input placeholder={car?.imgCover} {...register('imgCover')}
                            value={car?.imgCover} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>1º imagem da galeria</label>
                        <input placeholder="url da imagem" {...register('imgs.0')} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>2º imagem da galeria</label>
                        <input placeholder="url da imagem" {...register('imgs.1')} />
                    </FieldsetModal>
                    {extraImagesFields > 0 ? (<>
                        {addImageField().map((field) => (
                            <FieldsetModal key={`extraField${field}`}>
                                <label>{field + 3}º imagem da galeria</label>
                                <input placeholder='url da imagem' {...register(`imgs.${field + 2}`)} />
                                {/* {handleErrorField(field + 2)} */}
                            </FieldsetModal>
                        ))}
                    </>) : null}
                    <AddImagesContainer>
                        {extraImagesFields < 8 ? <button type='button' onClick={() => setExtraImagesFields(extraImagesFields + 1)}>Adicionar campo para imagem</button> : null}
                        {extraImagesFields > 0 ?
                            <button type='button' className='remove' onClick={() => setExtraImagesFields(extraImagesFields - 1)}
                            >Remover campo</button> : null}
                    </AddImagesContainer>
                    <UpdateButtonsContainer>
                        <button type="button" className="cancel"
                            onClick={() => setDeleteCarModal(true)}>Excluir anúncio</button>
                        <button type="submit">Salvar alterações</button>
                    </UpdateButtonsContainer>
                </FormModalContainer>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default UpdateOrDeleteCarModal;