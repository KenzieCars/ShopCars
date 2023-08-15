import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider/HomeProvider";
import Login from "./pages/Login";
import { UserProvider } from "./providers/UserProvider/UserContext";
import Register from "./pages/Register";
import { CarProvider } from "./providers/CarProvider/CarContext";
import ProfileView from "./pages/ProfileView";
import UserPage from "./pages/UserPage";

const AppRoutes = () => {
  return (
    <UserProvider>
      <CarProvider>
        <HomeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/userPage" element={<UserPage />} />
          </Routes>
        </HomeProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default AppRoutes;
