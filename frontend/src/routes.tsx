import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider";
import Login from "./pages/Login";
import { UserProvider } from "./providers/UserContext";
import Register from "./pages/Register";

const AppRoutes = () => {

  return (
    <UserProvider>
      <HomeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HomeProvider>
    </UserProvider>
  );
};

export default AppRoutes;
