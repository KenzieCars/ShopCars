import { useEffect, useState, LegacyRef, useContext } from 'react'
import {
    AddImagesContainer,
    DualFields,
    ErrorModal,
    FieldsetModal,
    FormModalContainer,
    ModalButtonContainer,
    ModalContainer,
    ModalWrapper,
    TitleModal,
    TitleOptions
} from "./style"
import { IModalProps, TRegisterCarForm } from './@types'
import { useForm } from 'react-hook-form'
import { fipeApi } from '../../services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import useOutClick from '../../hooks/useOutclick'
import useEscapeKey from '../../hooks/useEscapeKey'
import {
    bestPriceReckoning,
    getFuelTipe, handleKm, handleValue, numberToMoney,
    rectifyKm, rectifyPrice, registerCarSchema
} from './utils'
import { AxiosResponse } from 'axios'
import { CarContext } from '../../providers/CarProvider/CarContext'
import { UserContext } from '../../providers/UserProvider/UserContext'

const carInfoDefault = {
    brand: 'brand',
    fuel: 0,
    id: 'id',
    name: 'name',
    value: 0,
    year: 'ano'
}

const RegisterCarModal = ({ setModal }: IModalProps) => {

    const [fipeOptions, setFipeOptions] = useState({})
    const [models, setModels] = useState([])
    const [modelInfo, setmodelInfo] = useState([])
    const [loadModels, setLoadModels] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterCarForm>({
        resolver: zodResolver(registerCarSchema)
    })
    const [carInfo, setCarInfo] = useState(carInfoDefault)
    const [extraImagesFields, setExtraImagesFields] = useState(0)

    const { carRegister, registerCarImage, allcars, setAllCars } = useContext(CarContext)
    const { user } = useContext(UserContext)

    const modalRef = useOutClick(() => setModal(false));
    const buttonRef = useEscapeKey('Escape', (element) => {
        element.click();
    });

    useEffect(() => {
        fipeApi.get(`/cars`)
            .then((response) => {
                setFipeOptions(response.data)
            }).catch((error) => console.log(error));
    }, [])

    const getModelOptions = async (model: string) => {
        const modelArray = fipeOptions[model]
        setModels(modelArray)
        try {
            setLoadModels(true)
            const modelOptions = await fipeApi.get(`/cars`, { params: { brand: model } })
            setmodelInfo(modelOptions.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadModels(false)
        }
    }

    const getCarInfo = (selectedCar: string) => {
        if (selectedCar !== '') {
            const carFound = modelInfo.find((car) => car.name === selectedCar)
            setCarInfo(carFound!)
        } else {
            setCarInfo(carInfoDefault)
        }
    }

    const registerCar = async (payload) => {
        const createCarData = {
            year: carInfo.year,
            fuel: getFuelTipe(carInfo.fuel),
            ...payload
        }

        createCarData.price = rectifyPrice(createCarData.price)
        createCarData.km = rectifyKm(createCarData.km)
        createCarData.bestPrice = bestPriceReckoning(carInfo.value, createCarData.price)

        const { imgs } = createCarData
        delete createCarData.imgs

        let carId: string = ''

        await carRegister(createCarData)
            .then((res: AxiosResponse) => {
                carId = res.data.id
                let newCarsArray = allcars
                newCarsArray.push({ ...res.data, user: user })
                setAllCars(newCarsArray)
                console.log(allcars)
            }).then(async () => {
                for (let index = 0; index < imgs.length; index++) {
                    const addImageObject = {
                        imgGalery: imgs[index],
                        carId: carId
                    }
                    await registerCarImage(addImageObject)
                }
                setModal(false)
            }).catch((error) => console.log(error))
    }

    const addImageField = (): number[] => {
        // eslint-disable-next-line prefer-const
        let result: number[] = []
        for (let index: number = 0; index < extraImagesFields; index++) {
            result.push(index)
        }
        return result
    }

    const handleErrorField = (field: number) => {
        const errorField = errors.imgs || null

        if (errorField) {
            const errorMessage = errors.imgs![field]?.message
            return <ErrorModal>{errorMessage}</ErrorModal>
        }
        return null
    }

    return (
        <ModalWrapper role='dialog'>
            <ModalContainer ref={modalRef as LegacyRef<HTMLDivElement>}>
                <FormModalContainer onSubmit={handleSubmit(registerCar)}>
                    <TitleModal>
                        <h3>Criar anúncio</h3>
                        <span ref={buttonRef as LegacyRef<HTMLDivElement>} onClick={() => setModal(false)}>X</span>
                    </TitleModal>
                    <TitleOptions>
                        <h4>Informações do veículo</h4>
                    </TitleOptions>
                    <FieldsetModal>
                        <label>Marca</label>
                        <select {...register('brand')} onChange={(event) => getModelOptions(event.target.value)}  >
                            <option value=''>Selecione a marca</option>
                            <option value='chevrolet'>Chevrolet</option>
                            <option value='citroën'>Citröen</option>
                            <option value='fiat'>Fiat</option>
                            <option value='ford'>Ford</option>
                            <option value='honda'>Honda</option>
                            <option value='hyundai'>Hyunday</option>
                            <option value='nissan'>Nissan</option>
                            <option value='peugeot'>Peugeot</option>
                            <option value='renault'>Renault</option>
                            <option value='toyota'>Toyota</option>
                            <option value='volkswagen'>Volkswagen</option>
                            <option value='another'>Outro</option>
                        </select>
                        {errors.brand?.message && <ErrorModal>{errors.brand.message}</ErrorModal>}
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Modelo</label>
                        <select disabled={loadModels} {...register('model')} onChange={(event) => getCarInfo(event.target.value)}>
                            <option value=''>Selecione o modelo</option>
                            {models.map((model, index) => (
                                <option key={`model${index}`} value={model.name}>{model.name}</option>
                            ))}
                        </select>
                        {errors.model?.message && <ErrorModal>{errors.model.message}</ErrorModal>}
                    </FieldsetModal>
                    <DualFields>
                        <FieldsetModal>
                            <label>Ano</label>
                            <input disabled value={carInfo ? carInfo.year : carInfoDefault.year} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Combustível</label>
                            <input disabled value={carInfo ? getFuelTipe(carInfo.fuel) : getFuelTipe(carInfoDefault.fuel)} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Quilometragem</label>
                            <input placeholder='informe a quilometragem' {...register('km')}
                                onKeyUp={(event) => handleKm(event)} maxLength={12} />
                            {errors.km?.message && <ErrorModal>{errors.km.message}</ErrorModal>}
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Cor</label>
                            <select disabled={loadModels} {...register('color')} >
                                <option value=''>Selecione a cor</option>
                                <option value='branca'>Branca</option>
                                <option value='preta'>Preta</option>
                                <option value='azul'>Azul</option>
                                <option value='cinza'>Cinza</option>
                                <option value='prata'>Prata</option>
                                <option value='amarela'>Amarela</option>
                                <option value='vermelha'>Vermelha</option>
                                <option value='marrom'>Marrom</option>
                                <option value='verde'>Verde</option>
                                <option value='laranja'>Laranja</option>
                            </select>
                            {errors.color?.message && <ErrorModal>{errors.color.message}</ErrorModal>}
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Preço tabela FIPE</label>
                            <input disabled value={carInfo ? numberToMoney(carInfo.value) : numberToMoney(carInfoDefault.value)} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Preço</label>
                            <input placeholder={carInfo ? `${numberToMoney(Math.round((carInfo.value * 1.1)))} (Bom preço)` : 'R$ 50.000,00'} onKeyUp={(event) => handleValue(event)}
                                {...register('price')} maxLength={17} />
                            {errors.price?.message && <ErrorModal>{errors.price.message}</ErrorModal>}
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label>descrição</label>
                        <textarea placeholder='Digite a descrição' {...register('description')} />
                        {errors.description?.message && <ErrorModal>{errors.description.message}</ErrorModal>}
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Imagem da capa</label>
                        <input placeholder='url da imagem' {...register('imgCover')} />
                        {errors.imgCover?.message && <ErrorModal>{errors.imgCover.message}</ErrorModal>}
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>1º imagem da galeria</label>
                        <input placeholder='url da imagem' {...register('imgs.0')} />
                        {handleErrorField(0)}
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>2º imagem da galeria</label>
                        <input placeholder='url da imagem' {...register('imgs.1')} />
                        {handleErrorField(1)}
                    </FieldsetModal>
                    {extraImagesFields > 0 ? (<>
                        {addImageField().map((field) => (
                            <FieldsetModal key={`extraField${field}`}>
                                <label>{field + 3}º imagem da galeria</label>
                                <input placeholder='url da imagem' {...register(`imgs.${field + 2}`)} />
                                {handleErrorField(field + 2)}
                            </FieldsetModal>
                        ))}
                    </>) : null}
                    <AddImagesContainer>
                        {extraImagesFields < 8 ? <button type='button' onClick={() => setExtraImagesFields(extraImagesFields + 1)}>Adicionar campo para imagem</button> : null}
                        {/* {extraImagesFields > 0 ?
                            <button type='button' className='remove' onClick={() => setExtraImagesFields(extraImagesFields - 1)}
                            >Remover campo</button> : null} */}
                    </AddImagesContainer>
                    <ModalButtonContainer>
                        <button type='button' onClick={() => setModal(false)}
                            className='cancel'>Cancelar</button>
                        <button type='submit'>Criar anúncio</button>
                    </ModalButtonContainer>
                </FormModalContainer>
            </ModalContainer>
        </ModalWrapper >
    )
}

export default RegisterCarModal