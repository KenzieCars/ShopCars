import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider";
import Login from "./pages/Login";
import { UserProvider } from "./providers/UserContext";
import Register from "./pages/Register";
import { CarProvider } from "./providers/CarProvider/CarContext";
import { ImageProvider } from "./providers/ImageProvider/ImageContext";
import { CommentProvider } from "./providers/CommentProvider/CommentContext";

const AppRoutes = () => {
  return (
    <UserProvider>
      <CarProvider>
        <ImageProvider>
          <CommentProvider>
            <HomeProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </HomeProvider>
          </CommentProvider>
        </ImageProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default AppRoutes;
