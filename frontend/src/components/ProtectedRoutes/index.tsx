import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userId: string | null = localStorage.getItem("@userId") || "null";
  console.log(userId)
  return userId != "null" ? <Outlet /> : <Navigate to="/" />;
};
