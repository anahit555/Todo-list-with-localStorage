import React from "react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

import "./styles.scss";

function TodoItem({ text, todo, todos, setTodos }) {
  //Event Handlers
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        <li className={`list ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <FaCheckCircle className="complete-btn" />
        </button>
        <button onClick={deleteHandler} className="complete-btn">
          <FaTrash className="trash-btn " />
        </button>
      </ul>
    </div>
  );
}

export default TodoItem;
