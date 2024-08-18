import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "../Todo";
import ContextProvider from "../context/ContextProvider";
import Register from "../auth/Register";
import Login from "../auth/Login";
import ProtectectedRoute from "../auth/ProtectectedRoute";

const TodoRootLayout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectectedRoute>
                <ContextProvider>
                  <Todo />
                </ContextProvider>
              </ProtectectedRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default TodoRootLayout;
