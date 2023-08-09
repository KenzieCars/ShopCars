import { BsArrowUpCircleFill } from 'react-icons/bs'
import { ButtonToBeginning, FooterContainer } from './style'

const Footer = () => {

  return (
    <FooterContainer>
      <h3>Motors shop</h3>
      <p>® 2023 -  Todos os direitos reservados.</p>
      <ButtonToBeginning to='/'>
        <BsArrowUpCircleFill />
      </ButtonToBeginning>
    </FooterContainer>
  )
}

export default Footer