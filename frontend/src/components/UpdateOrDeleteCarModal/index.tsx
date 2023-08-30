/* eslint-disable no-extra-semi */
import {
    // LegacyRef,
    useEffect, useState
} from "react";
// import useOutClick from "../../hooks/useOutclick";
import {
    AddImagesContainer, DualFields,
    ErrorModal, FieldsetModal, FormModalContainer,
    ModalContainer, ModalWrapper, TitleModal
} from "../RegisterCarModal/style";
import { IChangeStyles, IUpdateModalProps, TUpdateSchema } from "./@types";
import { useForm } from "react-hook-form";
import { numberToKm, numberToCash, rectifyKm, rectifyPrice } from "../RegisterCarModal/utils";
import { CarStatusField, GoodPriceAnotation, UpdateButtonsContainer } from "./style";
import { handleNumber } from "../RegisterForm/utils";
import { fipeApi } from "../../services/api";
import { AxiosResponse } from "axios";
import { IFipeCars, IUpdateCars } from "../RegisterCarModal/@types";
import { handleKm, handleValue } from "./utils";
import DeleteCarModal from "./DeleteCarModal";


const UpdateOrDeleteCarModal = ({ setModal, car }: IUpdateModalProps) => {

    const [isPublished, setIsPublished] = useState<boolean | undefined>(car?.status);
    const [extraImagesFields, setExtraImagesFields] = useState<number>(0);
    const [deleteCarModal, setDeleteCarModal] = useState<boolean>(false);
    const [imgCoverError, setImgCoverError] = useState<string | null>(null);
    const [fipePrice, setFipePrice] = useState<number>(0);
    const [updateData, setUpdateData] = useState({
        brand: car?.brand || "",
        model: car?.model || "",
        year: car?.year || "",
        km: numberToKm(car!.km) || numberToKm(0),
        color: car?.color || "",
        price: numberToCash(car!.price * 100) || numberToCash(0),
        description: car?.description || "",
        status: getCarStatus(car!.status!) || "",
        imgCover: car?.imgCover || ""
    });

    // const modalContainerRef = useOutClick(() => setModal(false));
    const { register, handleSubmit } = useForm<TUpdateSchema>();

    useEffect(() => {
        const getFipePrice = async (brand: string, model: string) => {
            const fipeRequest: AxiosResponse<IFipeCars[]> = await fipeApi.get("/cars", { params: { brand } });
            const getFipeCar = fipeRequest.data.filter((car) => car.name === model);
            setFipePrice(getFipeCar[0].value * 100);
        };

        try {
            getFipePrice(updateData.brand, updateData.model);
        } catch (err) {
            console.log(err);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateCar = () => {
        // eslint-disable-next-line prefer-const
        let updatePayload: IUpdateCars = { ...updateData };

        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _url = new URL(updateData.imgCover!);
            updatePayload.imgCover = _url;
            setImgCoverError(null);
        } catch (err) {
            setImgCoverError("Deve ser uma fonte url da imagem *");
            return null;
        };

        // for() validação das imagens restantes

        updateData.status === "true" ?
            updatePayload.status = true : updatePayload.status = false

        updatePayload.km = rectifyKm(updateData.km as string);
        updatePayload.price = rectifyPrice(updateData.price as string);
        updatePayload.imgCover = updatePayload.imgCover.href;




        // verifyIfIsUrl(updateCarData.imgCover!);

        // data.status === "true" ?
        //     updateCarData.status = true : updateCarData.status = false

        console.log(updatePayload);
        console.log(updateData);
    };

    function getCarStatus(status: boolean): string {
        return status ? "true" : "false";
    }

    const anotherColorOptions = (color: string = "branca") => {
        const allColorOptions = [
            { color: "branca", option: "Branca" },
            { color: "preta", option: "Preta" },
            { color: "azul", option: "Azul" },
            { color: "cinza", option: "Cinza" },
            { color: "prata", option: "Prata" },
            { color: "amarela", option: "Amarela" },
            { color: "vermelha", option: "Vermelha" },
            { color: "marrom", option: "Marrom" },
            { color: "verde", option: "Verde" },
            { color: "laranja", option: "Laranja" },
        ];

        const anotherOptions = allColorOptions.filter((option) => option.color !== color);

        return (
            <>
                {anotherOptions.map((option) => (
                    <option value={option.color} key={`option${option.color}`}>{option.option}</option>
                ))}
            </>
        );
    };

    const changePublishedStyle = (): IChangeStyles => {
        if (isPublished) {
            return { background: "var(--black)", textDecorationLine: "underline" };
        } else {
            return {};
        }
    };

    const changeNotPublishedStyle = (): IChangeStyles => {
        if (!isPublished) {
            return { background: "var(--black)", textDecorationLine: "underline" }
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

    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setUpdateData(oldData => ({
            ...oldData,
            [name]: value
        }));
    };

    return (
        <ModalWrapper role="dialog">
            <ModalContainer
            // ref={modalContainerRef as LegacyRef<HTMLDivElement>}
            >
                <FormModalContainer onSubmit={handleSubmit(updateCar)}>
                    <TitleModal>
                        <h3>Editar anúncio</h3>
                        <span onClick={() => setModal(false)}>X</span>
                    </TitleModal>
                    <FieldsetModal>
                        <label>Marca</label>
                        <input value={updateData.brand} disabled />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Modelo</label>
                        <input value={updateData.model} disabled />
                    </FieldsetModal>
                    <DualFields>
                        <FieldsetModal>
                            <label>Ano</label>
                            <input name="year" value={updateData.year} onChange={handleUpdate}
                                maxLength={4} onKeyUp={(event) => handleNumber(event)} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Combustivel</label>
                            <input disabled value={car?.fuel} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Quilometragem</label>
                            <input name="km" value={updateData.km} onChange={handleUpdate}
                                onKeyDown={(event) => handleKm(event)} maxLength={12} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Cor</label>
                            <select name="color" onChange={handleUpdate} >
                                <option value={car?.color}>{car?.color}</option>
                                {anotherColorOptions(car?.color)}
                            </select>
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Preço tabela FIPE</label>
                            <input value={numberToCash(fipePrice)} disabled />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Preço</label>
                            <input name="price" value={updateData.price} onChange={handleUpdate}
                                onKeyDown={(event) => handleValue(event)} maxLength={16} />
                            <GoodPriceAnotation>{`(Bom preço: ${numberToCash(Math.floor(fipePrice * 1.05))})`}</GoodPriceAnotation>
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label>Descrição</label>
                        <textarea name="description" value={updateData.description} onChange={handleUpdate} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Publicado</label>
                    </FieldsetModal>
                    <CarStatusField>
                        <input checked={isPublished} type="radio" value="true" id="published" onClick={() => setIsPublished(true)}
                            onChange={handleUpdate} name="status" />
                        <label style={changePublishedStyle()} htmlFor="published">Sim</label>
                        <input checked={!isPublished} type="radio" value="false" id="not-published" onClick={() => setIsPublished(false)}
                            onChange={handleUpdate} name="status" />
                        <label style={changeNotPublishedStyle()} htmlFor="not-published" >Não</label>
                    </CarStatusField>
                    <FieldsetModal>
                        <label>Imagem da capa</label>
                        <input name="imgCover" value={updateData.imgCover} onChange={handleUpdate} />
                        {/* {errors.imgCover?.message ? <ErrorModal>{errors.imgCover.message}</ErrorModal> : null} */}
                        {imgCoverError && <ErrorModal>{imgCoverError}</ErrorModal>}
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
            {deleteCarModal && <DeleteCarModal carId={car?.id} setModal={setDeleteCarModal} />}
        </ModalWrapper>
    )
}

export default UpdateOrDeleteCarModal;