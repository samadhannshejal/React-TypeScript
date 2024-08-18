import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const isAuthenticated: string = localStorage.getItem("authToken") || "";
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return children;
};

export default ProtectectedRoute;
