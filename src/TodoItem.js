import styels from "./TodoItem.module.css";
import { useState } from "react";

function TodoItem({ id, userId, title }) {
  // function TodoItem({ text, index, name, total, time }) {
  //   const [time, setTime] = useState(""); // inifite loop

  return (
    <div className={styels.todoItem}>
      <h3>{id}번째 todo list 입니다.</h3>
      <li>{title}</li>
    </div>
  );
}

export default TodoItem;
