import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HomeProvider } from "./providers/HomeProvider/HomeProvider";
import Login from "./pages/Login";
import { UserProvider } from "./providers/UserProvider/UserContext";
import Register from "./pages/Register";
import { CarProvider } from "./providers/CarProvider/CarContext";
import { ImageProvider } from "./providers/ImageProvider/ImageContext";
import { CommentProvider } from "./providers/CommentProvider/CommentContext";
import ProfileView from "./pages/ProfileView";

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
                <Route path="/profile" element={<ProfileView />} />
              </Routes>
            </HomeProvider>
          </CommentProvider>
        </ImageProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default AppRoutes;
