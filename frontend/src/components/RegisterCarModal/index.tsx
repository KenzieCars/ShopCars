import { useEffect, useState, LegacyRef } from 'react'
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
import { zodResolver } from '@hookform/resolvers/zod'
import useOutClick from '../../hooks/useOutclick'
import useEscapeKey from '../../hooks/useEscapeKey'
import { handleValue, numberToMoney } from './utils'

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

    const showData = (payload) => {
        console.log(payload)
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
                                <option key={`model${index}`}>{model.name}</option>
                            ))}
                        </select>
                    </FieldsetModal>
                    <DualFields>
                        <FieldsetModal>
                            <label>Ano</label>
                            <input disabled placeholder={carInfo.year} {...register('year')} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Combustível</label>
                            <input disabled placeholder={getFuelTipe(carInfo.fuel)} {...register('fuel')} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Quilometragem</label>
                            <input placeholder='informe a quilometragem' {...register('km')} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Cor</label>
                            <input placeholder='informe a cor' />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Preço tabela FIPE</label>
                            <input disabled placeholder={numberToMoney(carInfo.value)} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Preço</label>
                            <input placeholder='R$ 50.000,00' onKeyUp={(event) => handleValue(event)}
                                maxLength={17} />
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label>descrição</label>
                        <textarea placeholder='Digite a descrição' />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Imagem da capa</label>
                        <input placeholder='url da imagem' {...register('imgCover')} />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>1º imagem da galeria</label>
                        <input placeholder='url da imagem' />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>2º imagem da galeria</label>
                        <input placeholder='url da imagem' />
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