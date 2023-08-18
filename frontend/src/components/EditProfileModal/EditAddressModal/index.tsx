import React, { useContext, useState } from 'react'
import { BackgroundModalEditAddress, ButtonAddressContainer, FieldsetAddressContainer, FormAddressContainer, TitleAddressContainer } from './style'
import { UserContext } from '../../../providers/UserProvider/UserContext'

const EditAddressModal = () => {
  const { updateUser, userIdCars, addressEditModal, setAddressEditModal } = useContext(UserContext)

  const [formData, setFormData] = useState({
    // OBS: alterar CPF para CEP
    cpf: userIdCars?.cpf || '',
    state: userIdCars?.state || '',
    city: userIdCars?.city || '',
    street: userIdCars?.street || '',
    number: userIdCars?.number || '',
    complement: userIdCars?.complement || '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await updateUser(formData)
    setAddressEditModal(!addressEditModal)
  }

  return (
    <BackgroundModalEditAddress>
      <FormAddressContainer onSubmit={handleSubmit}>
        <TitleAddressContainer>
          <h3>Editar endereço</h3>
          <button onClick={() => setAddressEditModal(!addressEditModal)}>X</button>
        </TitleAddressContainer>
        <FieldsetAddressContainer>
          <label>CPF</label> 
          <input type="text" name='cpf' placeholder="CPF" value={formData.cpf} onChange={handleChange} />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer>
          <label>Estado</label>
          <input type="text" name='state' placeholder="Estado" value={formData.state} onChange={handleChange} />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer>
          <label>Cidade</label>
          <input type="text" name='city' placeholder="Cidade" value={formData.city} onChange={handleChange} />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer>
          <label>Rua</label>
          <input type="text" name='street' placeholder="Rua" value={formData.street} onChange={handleChange} />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer>
          <label>Número</label>
          <input type="text" name='number' placeholder="Número" value={formData.number} onChange={handleChange} />
        </FieldsetAddressContainer>
        <FieldsetAddressContainer>
          <label>Complemento</label>
          <input type="text" name='complement' placeholder="Complemento" value={formData.complement} onChange={handleChange} />
        </FieldsetAddressContainer>
        <ButtonAddressContainer>
          <button onClick={() => setAddressEditModal(!addressEditModal)}>Cancelar</button>
          <button type="submit">Salvar alterações</button>
        </ButtonAddressContainer>
      </FormAddressContainer>
    </BackgroundModalEditAddress>
  )
}

export default EditAddressModal