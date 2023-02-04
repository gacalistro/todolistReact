import clsx from "clsx";
import { Trash } from "phosphor-react";

interface ItemProps {
  title: string;
  checked: boolean;
  checkItem: () => void;
  deleteItem: () => void;
  openModal: () => void;
}

export function Item({
  title,
  checked,
  openModal,
  checkItem,
  deleteItem,
  ...rest
}: ItemProps) {
  return (
    <div className="p-4 flex justify-between gap-3 bg-gray-500 border border-gray-400 rounded-lg text-sm">
      <input
        {...rest}
        type="checkbox"
        checked={checked}
        onChange={checkItem}
        className="flex appearance-none border-2 border-blue-500 w-6 h-6 rounded-full hover:border-blue-900 hover:bg-blue-500/20 checked:bg-purple-900 checked:border-none checked:hover:bg-purple-500 checked:before:content-['L'] checked:before:-scale-x-[1] checked:before:rotate-45 checked:before:flex checked:before:items-center checked:before:justify-center checked:before:w-full"
      />

      <div
        onClick={openModal}
        className={clsx("flex-1", {
          ["text-gray-300 line-through"]: checked,
        })}
      >
        {title}
      </div>

      <div className="flex items-center justify-center before:content-[''] before:w-8 before:h-8 hover:before:bg-gray-400 before:rounded-lg before:absolute before:z-0">
        <button
          onClick={deleteItem}
          className=" [&>svg>*]:stroke-gray-300 [&>svg>*]:hover:stroke-danger [&>svg>rect]:stroke-none [&>svg>rect]:hover:stroke-none relative z-1"
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
