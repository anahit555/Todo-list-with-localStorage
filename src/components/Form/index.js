import React from "react";

import "./styles.scss";

function Form({ inputText, setInputText, todos, setTodos }) {
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

  return (
    <form className="form">
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
