// import React from "react";
import { IFilters, ITodo } from "../../App";
import TodoLi from "../TodoLi/TodoLi";

interface IProps {
  filters: IFilters;
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  compare: (a: ITodo, b: ITodo) => number;
  page: number;
  itemsPerPage: number;
}

export default function ({
  todos,
  setTodos,
  filters,
  compare,
  page,
  itemsPerPage
}: IProps) {
  return (
    <ul className="list-none list-inside space-y-1">
      {todos
        .filter((todo) => !filters.onlyUndone || !todo.done)
        .filter((todo) =>
          filters.search !== "" ? todo.content.includes(filters.search) : true
        )
        .sort(compare)
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((todo) => (
          <TodoLi
            key={todo.id}
            done={todo.done}
            content={todo.content}
            onCheck={() => {
              const newTodos = todos.map((t) =>
                t.id === todo.id ? { ...t, done: !t.done } : t
              );
              setTodos(newTodos);
            }}
            onDelete={() => {
              const filteredTodos = todos.filter((t) => t.id !== todo.id);
              setTodos(filteredTodos);
            }}
          />
        ))}
    </ul>
  );
}
