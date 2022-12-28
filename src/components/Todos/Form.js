import "./Form.scss";
import React from "react";
import { useEffect } from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(todos));
  }, [todos]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="form">
      <div>
        <select onChange={statusHandler} name="todos" className="select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="input">
        <input
          className="todo-input"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
        />
        <button className="btn" onClick={submitTodoHandler} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
