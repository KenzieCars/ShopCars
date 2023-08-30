import { useContext, useEffect } from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { CardListUserAds, SectionProfileInfoComponent, SiglaUser, UserDiv } from "./style"
import CardUserAds from "./CardUserAds"
import { UserContext } from "../../providers/UserProvider/UserContext"

const UserAds = () => {
  const { userSelected, setUserSelected } = useContext(UserContext)

  useEffect(() => {
    // Aqui você pode buscar as informações do usuário selecionado pelo ID no localStorage
    const userData = JSON.parse(localStorage.getItem('@carsSellerSelect'));

    setUserSelected(userData);

  }, [])

  console.log(userSelected[0].user.name)

  return (
    <>
      <Header />
      <SectionProfileInfoComponent>
        <UserDiv>
          <SiglaUser>{userSelected[0].user.name[0]}</SiglaUser>
          <div>
            <span>{userSelected[0]?.user?.name}</span>
            <span>Anunciante</span>
          </div>
        </UserDiv>
        <p>{userSelected[0]?.user?.description}</p>
        <CardListUserAds>
          {/* <CardUserAds /> */}
        </CardListUserAds>
      </SectionProfileInfoComponent>
      <Footer />
    </>
  )
}

export default UserAds