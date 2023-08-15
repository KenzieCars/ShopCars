import { useEffect, useState } from 'react'
import { DualFields, FieldsetModal, FormModalContainer, ModalButtonContainer, ModalContainer, ModalWrapper, TitleModal, TitleOptions } from "./style"
import { IModalProps } from './@types'
import { fipeApi } from '../../services/api'


const RegisterCarModal = ({ setModal }: IModalProps) => {

    const [fipeOptions, setFipeOptions] = useState({})
    const [models, setModels] = useState([])
    const [modelInfo, setmodelInfo] = useState([])
    const [carInfo, setCarInfo] = useState({
        brand: 'brand',
        fuel: 0,
        id: 'id',
        name: 'name',
        value: 0,
        year: 'ano'
    })

    useEffect(() => {
        fipeApi.get(`/cars`)
            .then((response) => {
                console.log(response.data)
                setFipeOptions(response.data)
            }).catch((error) => console.log(error))
    }, [])

    const getModelOptions = async (model: string) => {
        const modelArray = fipeOptions[model]
        setModels(modelArray)
        await fipeApi.get(`/cars`, { params: { brand: model } })
            .then((response) => {
                console.log(response.data)
                setmodelInfo(response.data)
            }).catch((error) => console.log(error))
    }

    const getCarInfo = async (selectedCar: string) => {
        const carFound = modelInfo.find((car) => car.name === selectedCar)
        setCarInfo(carFound!)
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

    return (
        <ModalWrapper role='dialog'>
            <ModalContainer>
                <FormModalContainer>
                    <TitleModal>
                        <h3>Criar anúncio</h3>
                        <span onClick={() => setModal(false)}>X</span>
                    </TitleModal>
                    <TitleOptions>
                        <h4>Informações do veículo</h4>
                    </TitleOptions>
                    <FieldsetModal>
                        <label>Marca</label>
                        <select onChange={(event) => getModelOptions(event.target.value)}>
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
                        <select onChange={(event) => getCarInfo(event.target.value)}>
                            {models.map((model) => (
                                <option>{model.name}</option>
                            ))}
                        </select>
                    </FieldsetModal>
                    <DualFields>
                        <FieldsetModal>
                            <label>Ano</label>
                            <input disabled placeholder={carInfo.year} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Combustível</label>
                            <input disabled placeholder={getFuelTipe(carInfo.fuel)} />
                        </FieldsetModal>
                    </DualFields>
                    <DualFields>
                        <FieldsetModal>
                            <label>Preço tabela FIPE</label>
                            <input disabled placeholder={carInfo.value.toLocaleString()} />
                        </FieldsetModal>
                        <FieldsetModal>
                            <label>Preço</label>
                            <input placeholder='R$ 50.000,00' />
                        </FieldsetModal>
                    </DualFields>
                    <FieldsetModal>
                        <label>descrição</label>
                        <textarea placeholder='Digite a descrição' />
                    </FieldsetModal>
                    <FieldsetModal>
                        <label>Imagem da capa</label>
                        <input placeholder='url da imagem' />
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
                        <button type='button' onClick={() => setModal(false)}>Cancelar</button>
                        <button type='submit'>Criar anúncio</button>
                    </ModalButtonContainer>
                </FormModalContainer>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default RegisterCarModal