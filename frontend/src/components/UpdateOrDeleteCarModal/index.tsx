/* eslint-disable no-extra-semi */
import {
    useEffect, useState, useContext
} from "react";
import {
    AddImagesContainer, DualFields,
    ErrorModal, FieldsetModal, FormModalContainer,
    ModalContainer, ModalWrapper, TitleModal
} from "../RegisterCarModal/style";
import { IChangeStyles, IObjectImages, IUpdateModalProps, TUpdateSchema } from "./@types";
import { useForm } from "react-hook-form";
import { numberToKm, numberToCash, rectifyKm, rectifyPrice, bestPriceReckoning } from "../RegisterCarModal/utils";
import { CarStatusField, GoodPriceAnotation, UpdateButtonsContainer } from "./style";
import { handleNumber } from "../RegisterForm/utils";
import { fipeApi } from "../../services/api";
import { AxiosResponse } from "axios";
import { IFipeCars, IUpdateCars } from "../RegisterCarModal/@types";
import { convertObjectToArray, handleKm, handleValue } from "./utils";
import DeleteCarModal from "./DeleteCarModal";
// import { CarContext } from "../../providers/CarProvider/CarContext";
// import { TCarRequest } from "../../providers/CarProvider/@types";
import { UserContext } from "../../providers/UserProvider/UserContext";


const UpdateOrDeleteCarModal = ({ setModal: setUpdateModal, car }: IUpdateModalProps) => {

    const [isPublished, setIsPublished] = useState<boolean | undefined>(car?.status);
    const [deleteCarModal, setDeleteCarModal] = useState<boolean>(false);
    const [imgCoverError, setImgCoverError] = useState<string | null>(null);
    const [fipePrice, setFipePrice] = useState<number | string>(0);
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

    // const { editeCar } = useContext(CarContext);
    const { allcarsComumProfile } = useContext(UserContext);

    const allCarImages = allcarsComumProfile
        .filter((vehicle) => vehicle.id === car!.id)[0].images;

    const [imagesFields, setImagesFields] = useState<number>(allCarImages.length);

    const arrayToObjectImages = (): IObjectImages => {
        // eslint-disable-next-line prefer-const
        let objectImages: IObjectImages = {};

        for (let index: number | string = 0; index < allCarImages.length; index++) {
            objectImages[`img${index}` as keyof IObjectImages] = allCarImages[index].imgGalery;
        };
        return objectImages;
    };

    const [updateImages, setUpdateImages] = useState<IObjectImages>(arrayToObjectImages());
    const [updateImagesError, setUpdateImagesError] = useState<IObjectImages>({});


    const { handleSubmit } = useForm<TUpdateSchema>();

    useEffect(() => {
        const getFipePrice = async (brand: string, model: string) => {
            const fipeRequest: AxiosResponse<IFipeCars[]> = await fipeApi.get("/cars", { params: { brand } });
            const getFipeCar = fipeRequest.data.filter((car) => car.name === model);
            if (getFipeCar.length !== 0) {
                setFipePrice(getFipeCar[0].value * 100);
            } else {
                setFipePrice("Indeterminado");
            }
        };
        getFipePrice(updateData.brand, updateData.model);
    });

    const updateCar = async (): Promise<void | null> => {
        // eslint-disable-next-line prefer-const
        let updatePayload: IUpdateCars = { ...updateData };

        try {
            const _url = new URL(updateData.imgCover!);
            updatePayload.imgCover = _url;
            setImgCoverError(null);
        } catch (err) {
            setImgCoverError("Deve ser uma fonte url da imagem *");
            return null;
        };

        // eslint-disable-next-line prefer-const
        let imagesObjects = updateImages;

        if (Object.keys(imagesObjects).length !== imagesFields) {
            for (let index: number = Object.keys(imagesObjects).length - 1; index > imagesFields - 1; index--) {
                if (imagesObjects[`img${index}` as keyof IObjectImages]) {
                    delete imagesObjects[`img${index}` as keyof IObjectImages];
                };
            };
        };

        for (let index: number = 0; index < Object.keys(imagesObjects).length; index++) {
            try {
                if (imagesObjects[`img${index}` as keyof IObjectImages] === "") {
                    delete imagesObjects[`img${index}` as keyof IObjectImages];
                } else {
                    const _url = new URL(imagesObjects[`img${index}` as keyof IObjectImages]!);
                    imagesObjects[`img${index}` as keyof IObjectImages]! = _url.href;
                    setUpdateImagesError({
                        ...updateImagesError,
                        [`img${index}` as keyof IObjectImages]: null,
                    });
                };
            } catch (err) {
                setUpdateImagesError({
                    ...updateImagesError,
                    [`img${index}` as keyof IObjectImages]: "Deve ser uma fonte url da imagem *",
                });
                return null;
            };
        };

        setUpdateImagesError({});

        const imagesToUpdate = convertObjectToArray(imagesObjects);

        updateData.status === "true" ?
            updatePayload.status = true : updatePayload.status = false

        updatePayload.km = rectifyKm(updateData.km as string);
        updatePayload.price = rectifyPrice(updateData.price as string);
        updatePayload.imgCover = updatePayload.imgCover.href;
        updatePayload.bestPrice = bestPriceReckoning(fipePrice as number / 100, updatePayload.price);

        // await editeCar(updatePayload as TCarRequest, car!.id);

        let counter: number = 0;

        if (imagesToUpdate.length === allCarImages.length) {

            for (let index: number = 0; index < imagesToUpdate.length; index++) {
                console.log("UPDATE " + index);
            };

        } else if (imagesToUpdate.length > allCarImages.length) {

            for (let index: number = 0; index < imagesToUpdate.length; index++) {

                if (counter >= allCarImages.length) {
                    console.log("CREATE " + index);
                    counter = counter + 1;

                } else {
                    console.log("UPDATE " + index);
                    counter = counter + 1;
                };
            };
        } else {

            for (let index: number = 0; index < allCarImages.length; index++) {

                if (counter >= imagesToUpdate.length) {
                    console.log("DELETE " + index);
                    counter++;

                } else {
                    console.log("UPDATE" + index);
                    counter++;
                };
            };
        };

        // setUpdateModal(false);
    };

    function getCarStatus(status: boolean): string {
        return status ? "true" : "false";
    };

    const handleFipePrice = (): string => {
        if (fipePrice === "Indeterminado") {
            return "Indeterminado";
        }
        return numberToCash(fipePrice as number);
    };

    const handleGoodPriceAnotation = (): string | null => {
        if (fipePrice === "Indeterminado") {
            return null;
        }
        return `(Bom preço: ${numberToCash(Math.floor(fipePrice as number * 0.95))})`;
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
        for (let index: number = 0; index < imagesFields; index++) {
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

    const handleUpdateImages = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setUpdateImages(oldData => ({
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
                        <span onClick={() => setUpdateModal(false)}>X</span>
                    </TitleModal>
                    <FieldsetModal>
                        <label htmlFor="brand" >Marca</label>
                        <input id="brand" value={updateData.brand} disabled />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label htmlFor="model">Modelo</label>
                        <input id="model" value={updateData.model} disabled />
                    </FieldsetModal>
                    <DualFields>
                        <FieldsetModal>
                            <label htmlFor="year">Ano</label>
                            <input id="year" name="year" value={updateData.year} onChange={handleUpdate}
                                maxLength={4} onKeyUp={(event) => handleNumber(event)} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label htmlFor="fuel">Combustivel</label>
                            <input id="fuel" disabled value={car?.fuel} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label htmlFor="km">Quilometragem</label>
                            <input id="km" name="km" value={updateData.km} onChange={handleUpdate}
                                onKeyDown={(event) => handleKm(event)} maxLength={12} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label htmlFor="color">Cor</label>
                            <select id="color" name="color" onChange={handleUpdate} >
                                <option value={car?.color}>{car?.color}</option>
                                {anotherColorOptions(car?.color)}
                            </select>
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label htmlFor="fipePrice">Preço tabela FIPE</label>
                            <input id="fipePrice" value={handleFipePrice()} disabled />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label htmlFor="price">Preço</label>
                            <input id="price" name="price" value={updateData.price} onChange={handleUpdate}
                                onKeyDown={(event) => handleValue(event)} maxLength={16} />
                            <GoodPriceAnotation>{handleGoodPriceAnotation()}</GoodPriceAnotation>
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" name="description" value={updateData.description} onChange={handleUpdate} />
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
                        <label htmlFor="imgCover">Imagem da capa</label>
                        <input id="imgCover" name="imgCover" value={updateData.imgCover} onChange={handleUpdate} />
                        {imgCoverError && <ErrorModal>{imgCoverError}</ErrorModal>}
                    </FieldsetModal>
                    {imagesFields > 0 ? (<>
                        {addImageField().map((field) => (
                            <FieldsetModal key={`field${field}`}>
                                <label htmlFor={`imgGallery_${field}`}>{field + 1}º imagem da galeria</label>
                                <input id={`imgGallery_${field}`} value={updateImages[`img${field}` as keyof IObjectImages]}
                                    onChange={handleUpdateImages} name={`img${field}`} autoComplete="OLAAAAA" />
                                {updateImagesError[`img${field}` as keyof IObjectImages] &&
                                    <ErrorModal>{updateImagesError[`img${field}` as keyof IObjectImages]}</ErrorModal>}
                            </FieldsetModal>
                        ))}
                    </>) : null}
                    <AddImagesContainer>
                        {imagesFields < 10 ? <button type='button' onClick={() => setImagesFields(imagesFields + 1)}>Adicionar campo para imagem</button> : null}
                        {imagesFields > 0 ?
                            <button type='button' className='remove' onClick={() => setImagesFields(imagesFields - 1)}
                            >Remover campo</button> : null}
                    </AddImagesContainer>
                    <div className="division_between_buttons"></div>
                    <UpdateButtonsContainer>
                        <button type="button" className="cancel"
                            onClick={() => setDeleteCarModal(true)}>Excluir anúncio</button>
                        <button type="submit">Salvar alterações</button>
                    </UpdateButtonsContainer>
                </FormModalContainer>
            </ModalContainer>
            {deleteCarModal && <DeleteCarModal carId={car?.id} setDeleteCarModal={setDeleteCarModal}
                setUpdateModal={setUpdateModal} />}
        </ModalWrapper>
    )
};

export default UpdateOrDeleteCarModal;