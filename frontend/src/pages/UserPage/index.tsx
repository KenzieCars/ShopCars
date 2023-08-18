import CardHome from "../../components/CardHome";
import {
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile,
} from "./style";
import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";
import { Header } from "../../components/Header";

const UserPage = () => {
  return (
    <>
      <MainContainerUserProfile>
        <Header />
        <SectionProfileView />
        <Divanucios>
          <h2>Anúncios</h2>
        </Divanucios>
        <ListCardUserPage>
          <CardHome />
        </ListCardUserPage>
      </MainContainerUserProfile>
      <Footer />
    </>
  );
};

export default UserPage;
