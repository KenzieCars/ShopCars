import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider";
import Login from "./pages/Login";

const AppRoutes = () => {
  return (
    <HomeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </HomeProvider>
  );
};

export default AppRoutes;
