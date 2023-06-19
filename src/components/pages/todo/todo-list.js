export default function TodoList({ todoList = [], onDelete }) {
  return (
    <div>
      {todoList.map((item, i) => (
        <div key={i} onClick={() => onDelete(item)}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
