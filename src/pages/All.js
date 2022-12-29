import React, { useState, useEffect, useCallback } from "react";

import Form from "../components/Form";
import Filter from "../components/Filter";
import TodoList from "../components/TodoList";

import {
  STATUS_ALL,
  STATUS_DONE,
  TODO_STATUSES,
  STATUS_UNDONE,
  TODO_ITEMS_STORAGE_KEY,
} from "../config";

function All() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(STATUS_ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case STATUS_DONE:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case STATUS_UNDONE:
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem(TODO_ITEMS_STORAGE_KEY, JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem(TODO_ITEMS_STORAGE_KEY) === null) {
      localStorage.setItem(TODO_ITEMS_STORAGE_KEY, JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem(TODO_ITEMS_STORAGE_KEY));
      setTodos(localTodos);
    }
  };

  const handleFilterChange = useCallback((e) => {
    setStatus(e.target.value);
  }, [setStatus]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>

      <Filter
        items={TODO_STATUSES}
        onChange={handleFilterChange}
      />

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default All;
