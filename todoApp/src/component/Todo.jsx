import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completeTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const remainTodos = totalTodos - completeTodos;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer
        completeTodos={completeTodos}
        totalTodos={totalTodos}
        remainTodos={remainTodos}
      />
    </div>
  );
}
