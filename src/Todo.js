import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setTodos(data);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit Click");

    setTodos((currentTodos) => [...currentTodos, todo]);
    setTodo("");
  };

  return (
    <div>
      <button>Add todo</button>
      {todos.map((item) => {
        console.log(item);
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            userId={item.userId}
            title={item.title}
          />
        );
      })}
    </div>
  );
}

export default Todo;
