import { FormEvent, useState } from "react";
import uuid from "react-uuid";

import { PlusCircle } from "phosphor-react";

import { TodoListProps } from "./List";
import { Input } from "./Input";
import { Button } from "./Button";

export function Form({ todoList, setTodos }: TodoListProps) {
  const [title, setTitle] = useState("");

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();

    if (!title.trim()) {
      setTitle("");
      return alert("Escreva o nome da tarefa.");
    }

    try {
      setTodos([
        ...todoList,
        {
          id: uuid(),
          title,
          checked: false,
        },
      ]);
    } catch (error) {
      console.log(error);
      alert("Não foi possível criar a tarefa.");
    } finally {
      setTitle("");
    }
  }

  return (
    <form onSubmit={handleCreateTodo} className="mt-12 flex gap-2">
      <Input
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </Button>
    </form>
  );
}
