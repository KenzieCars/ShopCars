import CardHome from "../../components/CardHome";
import {
  Divanucios,
  ListCardUserPage,
  MainContainerUserProfile
} from "./style";

import Footer from "../../components/Footer";
import SectionProfileView from "../../components/SectionProfileView";
import { HeaderUserPage } from "../../components/Header";

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
