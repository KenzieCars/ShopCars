import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider";

const AppRoutes = () => {
  return (
    <HomeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HomeProvider>
  );
};

export default AppRoutes;
