import PropTypes from "prop-types";

TodoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li>
      {todo}
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}

export default TodoListItem;
