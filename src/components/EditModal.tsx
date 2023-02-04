import { FormEvent, useState } from "react";

import { TodoListProps } from "./List";

import { Input } from "./Input";
import { Button } from "./Button";

interface ModalProps {
  todoData: {
    id: string;
    title: string;
  };
  todoState: TodoListProps;
  closeModal: () => void;
}

export function EditModal({ todoData, todoState, closeModal }: ModalProps) {
  const [newTitle, setNewTitle] = useState(todoData.title);

  function handleEditModal(event: FormEvent) {
    event.preventDefault();

    const todoListUpdated = todoState.todoList.map((todo) => {
      if (todo.id === todoData.id) {
        todo.title = newTitle;
      }

      return todo;
    });

    todoState.setTodos(todoListUpdated);

    closeModal();
  }

  return (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-gray-700/60">
      <form
        onSubmit={handleEditModal}
        className="grid grid-rows-2 gap-2 relative"
      >
        <Input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <div className="grid grid-cols-2 gap-2">
          <Button colorType="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button>Salvar</Button>
        </div>
      </form>
    </div>
  );
}
