import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setFilterStat }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10000 },
    ]);
    setInputText("");
  };
  const filterHandler = (e) => {
    console.log(e.target.value);
    setFilterStat(e.target.value);
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      {/* set value to inputText to keep UI and UX same without it  */}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Shit Done</option>
          <option value="uncompleted">Shit Todo</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
