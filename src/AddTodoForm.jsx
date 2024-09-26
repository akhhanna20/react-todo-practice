import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    console.log("todoTitle", todoTitle);
    setTodoTitle("");
  };

  //Created autofocus for input
  const inputRef = React.useRef();
  useEffect(() => inputRef.current.focus());

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
}
export default AddTodoForm;
