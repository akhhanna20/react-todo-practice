import PropTypes from "prop-types";

TodoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

function TodoListItem({
  todo,
  onRemoveTodo,
  id,
  toggleCompleteTodo,
  completed,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleteTodo(id)}
      />{" "}
      <span className={completed ? "completed" : ""}>{todo}</span>{" "}
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}

export default TodoListItem;
