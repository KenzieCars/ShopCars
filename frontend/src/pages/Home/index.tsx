import CardHome from '../../components/CardHome'
import Footer from '../../components/Footer'
import { BsArrowRightShort } from 'react-icons/bs'
import { BannerContainer, ButtonNext, ListCardContainer, MainContainerHome, NextButtonContainer, TitleContainer } from './style'
import { Header } from '../../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <TitleContainer>
          <h1>Motors Shop</h1>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </TitleContainer>
        <img src="https://images.pexels.com/photos/6969035/pexels-photo-6969035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </BannerContainer>
      <MainContainerHome>
        <ListCardContainer>
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </ListCardContainer>
        <NextButtonContainer>
          <span>1 de 2</span>
          <ButtonNext to='/'>
            Seguinte
            <BsArrowRightShort />
          </ButtonNext>
        </NextButtonContainer>
      </MainContainerHome>
      <Footer />
    </>

  )
}

export default Home