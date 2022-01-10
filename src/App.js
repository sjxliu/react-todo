import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStat, setFilterStat] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filterStat]);
  //array at end means arrow func will run only once when component is first rendered & everytime value in brackets is changed

  // Functions
  const filterHandler = () => {
    switch (filterStat) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Could put filter handler in useEffect since I'm only using the handler once

  //Save to local
  const saveLocalTodos = () => {
    // if (localStorage.getItem("todos") === null) {
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Jace's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setFilterStat={setFilterStat}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
