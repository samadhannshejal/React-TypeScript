import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Input from "../../../component/Input/Input";
import { useState } from "react";
import useLocalStorage from "../../../customHooks/useLocalStorage/useLocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { getItems } = useLocalStorage("user");
  const{setItems:setAuthToken}=useLocalStorage('authToken');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerUsers = getItems();
    const user = registerUsers.find((user: unknown) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });
    if (user) {
      setAuthToken(user.id)
      navigate("/");
    }
  };
  return (
    <div>
      login
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Please enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Please enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <Button type="submit" onClick={() => navigate("/register")}>
        Register
      </Button>
    </div>
  );
};

export default Login;
