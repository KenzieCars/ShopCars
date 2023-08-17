import CardHome from "../../components/CardHome";
import {
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile
} from "./style";
import { HeaderUserPage } from "../../components/Header";
import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";

const UserPage = () => {

  return (
    <>
      <MainContainerUserProfile>
        <HeaderUserPage />
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
