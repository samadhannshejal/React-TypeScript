import React, { createContext, ReactNode, useEffect, useState } from "react";
export interface Todo {
  id: string;
  text: string;
  complete: boolean;
}
interface TodoContext {
  todo: Todo[];
  addTodo: (task: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}
export const todoContext = createContext<TodoContext>({
  todo: [],
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  
});
const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (task: string) => {
    if (!task) return;
    const obj: Todo = {
      id: crypto.randomUUID(),
      text: task,
      complete: false,
    };
    setTodo((previousTodos) => [...previousTodos, obj]);
  };
  const editTodo = (id: string, text: string) => {
    setTodo((previous) =>
      previous.map((item) => (item.id === id ? { ...item, text } : item))
    );
  };
  const deleteTodo = (id: string) => {
    const filterData = todo.filter((item) => item.id !== id);
    setTodo(filterData);
  };
  return (
    <todoContext.Provider value={{ todo, addTodo, editTodo, deleteTodo }}>
      {children}
    </todoContext.Provider>
  );
};

export default ContextProvider;
