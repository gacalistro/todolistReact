import { ListDashes } from "phosphor-react";

export function EmptyList() {
  return (
    <div className="mt-8 flex flex-col gap-4 items-center">
      <ListDashes size={56} className="[&>line]:stroke-gray-400" />
      <div className="flex flex-col text-gray-300">
        <span className="font-bold leading-snug">
          Você ainda não tem tarefas cadastradas
        </span>
        Crie tarefas e organize seus itens a fazer
      </div>
    </div>
  );
}
