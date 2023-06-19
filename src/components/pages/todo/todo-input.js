export default function TodoInput({ todoInput, handleInputChange, addTodo }) {
  return (
    <div>
      <input
        placeholder="Type your todo"
        value={todoInput}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
