import React, { useState } from "react";
import Button from "../../../component/Button/Button";
import Input from "../../../component/Input/Input";
import useLocalStorage from "../../../customHooks/useLocalStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setItems } = useLocalStorage("user");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems({ email, name, password });
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div>
      Register
      <form
        action=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Please enter name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Please enter email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Please enter password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </form>
      <Button type="submit" onClick={() => navigate("/login")}>
        Login
      </Button>
    </div>
  );
};

export default Register;
