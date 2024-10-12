import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  ascSort: PropTypes.bool.isRequired,
};

function TodoList({ todoList, onRemoveTodo, toggleCompleteTodo, ascSort }) {
  const sortTodosAsc = (objA, objB) => {
    if (objA.title.toUpperCase() < objB.title.toUpperCase()) {
      return -1;
    }
    if (objA.title.toUpperCase() > objB.title.toUpperCase()) {
      return 1;
    }
    return 0;
  };
  const sortTodosDsc = (objA, objB) => {
    if (objA.title.toUpperCase() < objB.title.toUpperCase()) {
      return 1;
    }
    if (objA.title.toUpperCase() > objB.title.toUpperCase()) {
      return -1;
    }
    return 0;
  };

  return (
    <ul>
      {ascSort
        ? todoList
            .sort(sortTodosAsc)
            .map((item) => (
              <TodoListItem
                key={item.id}
                todo={item.title}
                onRemoveTodo={onRemoveTodo}
                id={item.id}
                toggleCompleteTodo={toggleCompleteTodo}
                completed={item.completed}
              />
            ))
        : todoList
            .sort(sortTodosDsc)
            .map((item) => (
              <TodoListItem
                key={item.id}
                todo={item.title}
                onRemoveTodo={onRemoveTodo}
                id={item.id}
                toggleCompleteTodo={toggleCompleteTodo}
                completed={item.completed}
              />
            ))}
      {}
    </ul>
  );
}

export default TodoList;
