import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [ascSort, setAscSort] = useState(true);

  const toggleSort = () => {
    setAscSort(!ascSort);
  };

  const addTodo = (newTodo) => {
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {ascSort ? (
        <button onClick={toggleSort}>Sort A-Z</button>
      ) : (
        <button onClick={toggleSort}>Sort Z-A</button>
      )}

      <TodoList
        todoList={todoList}
        onRemoveTodo={removeTodo}
        ascSort={ascSort}
      />
    </>
  );
}

export default App;
