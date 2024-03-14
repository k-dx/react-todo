import { useState } from "react";
import Icon from "../Icon/Icon";

interface IProps {
  onAdd: (content: string) => void;
  classNames?: string;
}

export default function ({ onAdd, classNames }: IProps) {
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
      }}
      className={`flex items-center ${classNames}`}
    >
      <label htmlFor="todo-add" className="sr-only">
        Add todo
      </label>
      <div className="relative w-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="todo-add"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What will you do today?"
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Icon type="plus-circle" />
        <span className="sr-only">Add todo</span>
      </button>
    </form>
  );
}
