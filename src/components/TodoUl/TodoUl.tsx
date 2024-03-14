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
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ({
  todos,
  setTodos,
  onDelete,
  filters,
  compare,
  page,
  itemsPerPage,
  onCheck
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
            id={todo.id} /* PYTANIE czy można/powinno się używać key? */
            done={todo.done}
            content={todo.content}
            onCheck={() => onCheck(todo.id)} /* PYTANIE czemu to się typuje skoro to jest funkcja (void) => void, a nie (number) => void ? */
            onDelete={() => onDelete(todo.id)}
          />
        ))}
    </ul>
  );
}
