const todoList = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn JavaScript",
  },
  {
    id: 3,
    title: "Learn CSS",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
