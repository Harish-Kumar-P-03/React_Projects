function TodoList({ todos, onToggle }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add one above!</p>;
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.done ? "done" : ""}
          onClick={() => onToggle(todo.id)}
        >
          <input type="checkbox" checked={todo.done} readOnly />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
