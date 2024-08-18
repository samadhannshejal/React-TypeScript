import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../dashboard/DashBoard";
import Login from "../login/Login";
import Register from "../Register/Register";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const AuthenticationRootLayout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AuthenticationRootLayout;
