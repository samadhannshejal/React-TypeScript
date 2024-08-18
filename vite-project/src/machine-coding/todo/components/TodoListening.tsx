import React, { useContext, useState } from "react";
import { Todo, todoContext } from "../context/ContextProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { LuCheck } from "react-icons/lu";

import styles from "../style/Todo.module.css";
import Input from "../../../component/Input/Input";

interface TodoListeningProps {
  todos: Todo[];
}
const TodoListening: React.FC<TodoListeningProps> = ({ todos }) => {
  const { deleteTodo, editTodo } = useContext(todoContext);
  const [isEditId, setIsEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  if (!todos || todos.length === 0) {
    return <div>No todos available.</div>;
  }
  const handleEdit = (id: string, value: string) => {
    setIsEditId(id);
    setEditText(value);
  };

  const handleSave = (id: string) => {
    editTodo(id, editText);
    setIsEditId(null);
  };

  const handleStatus = (id: string, status: boolean) => {
  };

  return (
    <div>
      <table width={500}>
        <thead>
          <tr>
            <th style={{ textAlign: "start" }}>Task Name</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo) => (
            <tr key={todo.id}>
              {isEditId === todo.id ? (
                <td style={{ textAlign: "start" }}>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </td>
              ) : (
                <td style={{ textAlign: "start" }} className={styles.td}>
                  {todo.text}
                </td>
              )}

              <td onClick={() => deleteTodo(todo.id)}>
                <RiDeleteBinLine />
              </td>
              <td>
                {isEditId === todo.id ? (
                  <div>
                    <LuCheck
                      style={{ marginRight: "10px" }}
                      onClick={() => handleSave(todo.id)}
                    />
                    <RxCross1 onClick={() => setIsEditId(null)} />
                  </div>
                ) : (
                  <FaPencilAlt onClick={() => handleEdit(todo.id, todo.text)} />
                )}
              </td>
              <td>
                <Input
                  type="checkbox"
                  onChange={() => handleStatus(todo.id, todo.complete)}
                  checked={todo.complete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListening;
