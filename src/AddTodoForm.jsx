import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
    console.log("title", newTodoTitle);
  };

  const inputRef = React.useRef();
  useEffect(() => inputRef.current.focus());

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
}
export default AddTodoForm;
