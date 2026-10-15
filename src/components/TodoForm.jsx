import { useState } from "react";
function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();          // stop the page from reloading
    if (text.trim() === "") return;  // ignore empty input
    onAdd(text);                     // tell App to add the todo
    setText("");                     // clear the input box
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add list item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default TodoForm;