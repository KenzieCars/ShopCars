import React, { useContext, useState } from 'react'
import { BackgroundModalEditAddress, ButtonAddressContainer, FieldsetAddressContainer, FormAddressContainer, TitleAddressContainer } from './style'
import { UserContext } from '../../../providers/UserProvider/UserContext'

const EditAddressModal = () => {
  const { updateUser, user, userIdCars, addressEditModal, setAddressEditModal } = useContext(UserContext)

  const [formData, setFormData] = useState({
    cep: user?.cep || '',
    state: user?.state || '',
    city: user?.city || '',
    street: user?.street || '',
    number: user?.number || '',
    complement: user?.complement || '',
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
          <label>CEP</label> 
          <input type="text" name='cep' placeholder="CEP" value={formData.cep} onChange={handleChange} />
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