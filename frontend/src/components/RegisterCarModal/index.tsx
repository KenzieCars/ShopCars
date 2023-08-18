import { useEffect, useState, LegacyRef, useContext } from 'react'
import {
    DualFields,
    FieldsetModal,
    FormModalContainer,
    ModalButtonContainer,
    ModalContainer,
    ModalWrapper,
    TitleModal,
    TitleOptions
} from "./style"
import { IModalProps } from './@types'
import { useForm } from 'react-hook-form'
import { fipeApi } from '../../services/api'
// import { zodResolver } from '@hookform/resolvers/zod'
import useOutClick from '../../hooks/useOutclick'
import useEscapeKey from '../../hooks/useEscapeKey'
import { handleValue, numberToMoney } from './utils'
import { CarContext } from '../../providers/CarProvider/CarContext'
import { AxiosResponse } from 'axios'

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
    const { register, handleSubmit, formState: { errors } } = useForm({
        // resolver: zodResolver()
    })
    const [carInfo, setCarInfo] = useState(carInfoDefault)
    const { carRegister, registerCarImage } = useContext(CarContext)

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

    console.log(fipeOptions)
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

    const getCarInfo = async (selectedCar: string) => {
        if (selectedCar !== 'none') {
            const carFound = modelInfo.find((car) => car.name === selectedCar)
            setCarInfo(carFound!)
        } else {
            setCarInfo(carInfoDefault)
        }
    }

    const getFuelTipe = (number: number) => {
        if (number === 1) {
            return 'Flex'
        } else if (number === 2) {
            return 'Híbrido'
        } else if (number === 3) {
            return 'Elétrico'
        } else {
            return 'Indefinido'
        }
    }

    const showData = async (payload) => {
        const createCarData = {
            year: carInfo.year,
            fuel: getFuelTipe(carInfo.fuel),
            ...payload
        }

        let rectifyPrice = createCarData.price
        rectifyPrice = rectifyPrice.split(' ')[1]
        rectifyPrice = rectifyPrice.split(',')[0]
        rectifyPrice = rectifyPrice.replace('.', '')

        createCarData.price = Number(rectifyPrice)
        createCarData.km = Number(createCarData.km)

        const { imgs } = createCarData
        delete createCarData.imgs

        let carId: string = ''
        
        await carRegister(createCarData).then((res: AxiosResponse<any>): void => {
            carId = res.data.id
        }).then(async () => {
            for (let index = 0; index < imgs.length; index++) {
                const addImageObject = {
                    imgGalery: imgs[index],
                    carId: carId
                }
                console.log(addImageObject)
                await registerCarImage(addImageObject)
            }
        }).catch((error) => console.log(error))
    }

    return (
        <ModalWrapper role='dialog'>
            <ModalContainer ref={modalRef as LegacyRef<HTMLDivElement>}>
                <FormModalContainer onSubmit={handleSubmit(showData)}>
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
                            <option>Selecione a marca</option>
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
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Modelo</label>
                        <select disabled={loadModels} {...register('model')} onChange={(event) => getCarInfo(event.target.value)}>
                            <option value='none'>Selecione o modelo</option>
                            {models.map((model, index) => (
                                <option key={`model${index}`} value={model.name}>{model.name}</option>
                            ))}
                        </select>
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
                            <input placeholder='informe a quilometragem' {...register('km')} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Cor</label>
                            <input placeholder='informe a cor' {...register('color')} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Preço tabela FIPE</label>
                            <input disabled value={carInfo ? numberToMoney(carInfo.value) : numberToMoney(carInfoDefault.value)} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Preço</label>
                            <input placeholder='R$ 50.000,00' onKeyUp={(event) => handleValue(event)}
                                {...register('price')} maxLength={17} />
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label>descrição</label>
                        <textarea placeholder='Digite a descrição' {...register('description')} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Imagem da capa</label>
                        <input placeholder='url da imagem' {...register('imgCover')} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>1º imagem da galeria</label>
                        <input placeholder='url da imagem' {...register('imgs.0')} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>2º imagem da galeria</label>
                        <input placeholder='url da imagem' {...register('imgs.1')} />
                    </FieldsetModal>
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