import { useEffect, useState } from "react";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";

export default function Todo() {
  const [todoList, todoListSet] = useState([]);
  const [todoInput, todoInputSet] = useState("");
  const [dataFake,dataFakeSet] = useState([])

  // handle add todo
  function addTodo() {
    if (!todoInput) return;
    todoListSet((prev) => [...prev, todoInput]);
    todoInputSet("");
  }

  // handle input change
  function handleInputChange(value) {
    todoInputSet(value);
  }

  function handleDelete(item) {
      todoListSet((prev) => {
        let sample = [...prev];
        let filteredSample = sample.filter((i) => i !== item)
        return filteredSample
      })
  }

  console.log(dataFake)
  return (
    <div>
      <TodoList onDelete={handleDelete} todoList={todoList} />
      <TodoInput
        todoInput={todoInput}
        handleInputChange={(value) => handleInputChange(value)}
        addTodo={addTodo}
      />
    </div>
  );
}
