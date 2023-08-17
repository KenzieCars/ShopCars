import CardAdmin from "../../components/CardHome/CardAdmin";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

import SectionProfileInfo from "../../components/SectionProfileView";
import { CardListProfile, MainContainerProfile } from "./style";

const ProfileView = () => {
  return (
    <>
      <MainContainerProfile>
        <Header />
        <SectionProfileInfo />
        <CardListProfile>
          <CardAdmin />
        </CardListProfile>
      </MainContainerProfile>
      <Footer />
    </>
  );
};

export default ProfileView;
