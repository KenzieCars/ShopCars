import CardHome from "../../components/CardHome"
import Footer from "../../components/Footer"
import { HeaderUserPage } from "../../components/Header"
import SectionProfileInfo from "../../components/SectionProfileView"
import { CardListProfile, MainContainerProfile } from "./style"

const ProfileView = () => {

  return (
    <>
      <MainContainerProfile>
        <HeaderUserPage />
        <SectionProfileInfo />
        <CardListProfile>
          <CardHome />
        </CardListProfile>
      </MainContainerProfile>
      <Footer />
    </>
  )
}

export default ProfileView