import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider";
import Login from "./pages/Login";
import { UserProvider } from "./providers/UserContext";

const AppRoutes = () => {
  
  return (
    <UserProvider>
      <HomeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </HomeProvider>
    </UserProvider>
  );
};

export default AppRoutes;
