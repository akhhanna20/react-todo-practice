import { useState } from "react";
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

  const handleRemoveTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const toggleCompleteTodo = (id) => {
    const updatedTasks = todoList.map((item) =>
      item.id === id
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );
    setTodoList(updatedTasks);
  };

  return (
    <>
      <h1>TodoList</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {ascSort ? (
        <button onClick={toggleSort}>Sort A-Z</button>
      ) : (
        <button onClick={toggleSort}>Sort Z-A</button>
      )}

      <TodoList
        todoList={todoList}
        onRemoveTodo={handleRemoveTodo}
        toggleCompleteTodo={toggleCompleteTodo}
        ascSort={ascSort}
      />
    </>
  );
}

export default App;
