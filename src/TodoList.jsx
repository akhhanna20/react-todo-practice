import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import { useEffect, useState } from "react";

//Type-checking tool for props
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

function TodoList({ todoList, onRemoveTodo, ascSort }) {
  console.log("ascSort", ascSort);
  console.log("todoList", todoList);

  const sortTodosByFieldAsc = (objectA, objectB) => {
    if (objectA.title.toUpperCase() < objectB.title.toUpperCase()) {
      return -1;
    }
    if (objectA.title.toUpperCase() > objectB.title.toUpperCase()) {
      return 1;
    }
    return 0;
  };

  const sortTodosByFieldDsc = (objectA, objectB) => {
    if (objectA.title.toUpperCase() < objectB.title.toUpperCase()) {
      return 1;
    }
    if (objectA.title.toUpperCase() > objectB.title.toUpperCase()) {
      return -1;
    }
    return 0;
  };

  return (
    <ul>
      {ascSort
        ? todoList
            .sort(sortTodosByFieldAsc)
            .map((item) => (
              <TodoListItem
                key={item.id}
                todo={item.title}
                id={item.id}
                onRemoveTodo={onRemoveTodo}
              />
            ))
        : todoList
            .sort(sortTodosByFieldDsc)
            .map((item) => (
              <TodoListItem
                key={item.id}
                todo={item.title}
                id={item.id}
                onRemoveTodo={onRemoveTodo}
              />
            ))}
    </ul>
  );
}

export default TodoList;
