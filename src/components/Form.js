import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
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
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
    {/* set value to inputText to keep UI and UX same without it  */}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Am the Boss</option>
          <option value="uncompleted">Slackin'</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
