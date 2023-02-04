import { useState } from "react";
import { EditModal } from "./EditModal";
import { EmptyList } from "./EmptyList";
import { Item } from "./Item";

export interface TodoListProps {
  todoList: {
    id: string;
    title: string;
    checked: boolean;
  }[];
  setTodos: (
    todoList: { id: string; title: string; checked: boolean }[]
  ) => void;
}

export function List({ todoList, setTodos }: TodoListProps) {
  const [openModal, setOpenModal] = useState(false);
  const [editTodoData, setEditTodoData] = useState<{
    id: string;
    title: string;
  }>({ id: "", title: "" });

  function toggleCheckItem(id: string) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function handleDeleteItem(id: string) {
    setTodos(todoList.filter((todo) => todo.id !== id));
  }

  function openEditModal(id: string, title: string) {
    setEditTodoData({ id, title });
    setOpenModal(true);
  }

  return (
    <div className="mb-12">
      {openModal && (
        <EditModal
          todoData={editTodoData}
          todoState={{ todoList, setTodos }}
          closeModal={() => setOpenModal(false)}
        />
      )}

      <div className="mt-16 flex justify-between">
        <div className="flex gap-2 text-blue-500 text-sm font-bold">
          Tarefas criadas
          <span className="px-2 py-[2px] rounded-full text-gray-200 bg-gray-400 text-xs">
            {todoList?.length || 0}
          </span>
        </div>

        <div className="flex gap-2 text-purple-500 text-sm font-bold">
          Concluídas
          <span className="px-2 py-[2px] rounded-full text-gray-200 bg-gray-400 text-xs">
            {(todoList?.length &&
              `${todoList.filter((todo) => todo.checked).length} de ${
                todoList.length
              }`) ||
              0}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <Item
              key={todo.id}
              title={todo.title}
              checked={todo.checked}
              checkItem={() => toggleCheckItem(todo.id)}
              deleteItem={() => handleDeleteItem(todo.id)}
              openModal={() => openEditModal(todo.id, todo.title)}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}
