import { useState } from "react";
import Filters from "./components/Filters/Filters";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoUl from "./components/TodoUl/TodoUl";
import Paginator from "./components/Paginator/Paginator";

export interface ITodo {
  id: number;
  done: boolean;
  content: string;
}

export interface IFilters {
  search: string;
  onlyUndone: boolean;
}

export type ISort = 'default' | 'a-z' | 'z-a';

const initialTodos: ITodo[] = [
  { id: 0, done: false, content: "Hello" },
  { id: 1, done: true, content: "World" },
  { id: 2, done: false, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dictum velit. Etiam ut felis enim. Ut aliquet felis a est dapibus sodales. Nam non metus eget magna posuere tristique. Cras a accumsan turpis. Mauris molestie viverra leo, non placerat sem congue consectetur. Fusce scelerisque pretium urna sed dictum. Integer pharetra ligula sed viverra convallis. " },
  { id: 3, done: true, content: "a" },
  { id: 4, done: true, content: "aa" },
  { id: 5, done: true, content: "ab" },
  { id: 6, done: true, content: "b" },
  { id: 7, done: true, content: "bab" },
  { id: 8, done: true, content: "zzz" }
];

const itemsPerPage = 5;

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [currId, setCurrId] = useState<number>(
    initialTodos.reduce((acc, todo) => (todo.id > acc ? todo.id : acc), 0) + 1
  );
  const [filters, setFilters] = useState<IFilters>({
    search: "",
    onlyUndone: false,
  });
  const [sort, setSort] = useState<ISort>('default');
  const [page, setPage] = useState<number>(1);

  const getNextId = () => {
    setCurrId(currId + 1);
    return currId;
  };

  const getCompare = (sort: ISort) => {
    if (sort === 'a-z') {
      return (a: ITodo, b: ITodo) => a.content.localeCompare(b.content);
    } else if (sort === 'z-a') {
      return (a: ITodo, b: ITodo) => b.content.localeCompare(a.content);
    }
    return (a: ITodo, b: ITodo) => a.id - b.id;
  }

  return (
    <div className="p-4 dark:bg-gray-800 min-h-screen dark:text-gray-100">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-4">Todo app</h1>
        <TodoAdd
          onAdd={(content) =>
            setTodos([...todos, { id: getNextId(), done: false, content }])
          }
          classNames="mb-2"
        />
        <Filters
          search={filters.search}
          onlyUndone={filters.onlyUndone}
          sort={sort}
          setSort={setSort}
          onDoneChange={(onlyUndone) => 
            { setFilters({ ...filters, onlyUndone }) }}
          onSearchChange={(search) => 
            { setFilters({ ...filters, search }) }}
          classNames="mb-2"
        />
        <TodoUl
          compare={getCompare(sort)}
          filters={filters}
          page={page}
          setTodos={setTodos}
          todos={todos}
          itemsPerPage={itemsPerPage}
        />
        <Paginator
          page={page}
          setPage={setPage}
          itemsPerPage={itemsPerPage}
          totalVisibleItems={todos.length}
        />
      </div>
    </div>
  );
}
