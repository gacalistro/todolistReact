import { useEffect, useState } from "react";

import "./styles/main.css";

import { Form } from "./components/Form";
import { List } from "./components/List";

export type TodosProps = {
  id: string;
  title: string;
  checked: boolean;
}[];

function App() {
  const [todos, setTodos] = useState<TodosProps>([]);

  useEffect(() => {
    const todoList = JSON.parse(`${localStorage.getItem("todoList")}`);
    if (todoList.length > 0) {
      setTodos(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="before:content-[''] before:w-full before:h-[180px] before:bg-gray-700 before:absolute" />

      <div className="w-full min-h-screen relative">
        <div className="max-w-4xl mx-auto px-8 flex flex-col">
          <div className="mt-16 flex justify-center text-4xl font-extrabold text-purple-900">
            <span className="text-blue-500">to</span>do
          </div>

          <Form todoList={todos} setTodos={setTodos} />

          <List todoList={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
