import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteComponent = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to={"./login"} />;
};

export default ProtectedRouteComponent;
