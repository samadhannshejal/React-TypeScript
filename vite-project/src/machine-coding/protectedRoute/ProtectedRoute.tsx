import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import ProtectedRouteComponent from "./Auth/ProtectedRouteComponent";
const ProtectedRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"about"}>About</Link>
          <Link to={"login"}>Login</Link>
        </nav>
        <Routes>
          <Route element={<ProtectedRouteComponent />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ProtectedRoute;
