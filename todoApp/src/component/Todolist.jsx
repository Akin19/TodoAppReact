import TodoItems from "./TodoItems";
export default function Todolist({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}
