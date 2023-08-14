import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider";
import Login from "./pages/Login";
import { UserProvider } from "./providers/UserContext";
import Register from "./pages/Register";
import { CarProvider } from "./providers/CarProvider/CarContext";

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
          </Routes>
        </HomeProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default AppRoutes;
