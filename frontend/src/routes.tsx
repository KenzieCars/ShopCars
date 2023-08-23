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
import UserPage from "./pages/UserPage";
import ResetPasswordPage from "./pages/resetPassword";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import ProductPage from "./pages/ProductPage";

const AppRoutes = () => {
  return (
    <UserProvider>
      <CarProvider>
        <ImageProvider>
          <CommentProvider>
            <HomeProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProfileView />} />
                <Route path="/userPage" element={<UserPage />} />
                <Route
                  path="/resetPassword/:token"
                  element={<ResetPasswordPage />}
                />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/userPage" element={<UserPage />} />
                <Route path="/userPage/:userId" element={<UserPage />} />

                <Route path="/" element={<ProtectedRoutes />}>
                  <Route path="/profile" element={<ProfileView />} />
                </Route>
              </Routes>
            </HomeProvider>
          </CommentProvider>
        </ImageProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default AppRoutes;
