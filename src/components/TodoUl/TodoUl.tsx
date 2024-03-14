import { ITodo } from "../../App";
import TodoLi from "../TodoLi/TodoLi";

interface IProps {
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  todos: ITodo[];
}

export default function ({ onCheck, onDelete, todos }: IProps) {
  return (
    <ul className="list-none list-inside space-y-1">
      {todos.map((todo) => (
        <TodoLi
          key={todo.id}
          id={todo.id} /* PYTANIE czy można/powinno się używać key? */
          done={todo.done}
          content={todo.content}
          onCheck={() =>
            onCheck(todo.id)
          } /* PYTANIE czemu to się typuje skoro to jest funkcja (void) => void, a nie (number) => void ? */
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
