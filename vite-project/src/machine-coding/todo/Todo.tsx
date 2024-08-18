import { useContext, useState } from "react";
import Input from "../../component/Input/Input";
import Button from "../../component/Button/Button";
import { todoContext } from "./context/ContextProvider";
import TodoListening from "./components/TodoListening";
import Filter from "./components/Filter";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../customHooks/useLocalStorage/useLocalStorage";

const Todo = () => {
  const navigate = useNavigate();
  const { addTodo, todo } = useContext(todoContext);
  const [task, setTask] = useState("");
  const { removeItems } = useLocalStorage("authToken");
  const handleChange = (text: string) => {
    setTask(text);
  };
  const handleAddTodo = () => {
    addTodo(task);
    setTask("");
  };
  const handleLogout = () => {
    removeItems();
    navigate("/login");
  };
  return (
    <div>
      <Input
        type="text"
        value={task}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <Button onClick={() => handleLogout()}>Logout</Button>
      <Filter />
      <TodoListening todos={todo} />
    </div>
  );
};

export default Todo;
