import Icon from "../Icon/Icon";

interface IProps {
  done: boolean;
  content: string;
  onCheck: () => void;
  onDelete: () => void;
}

export default function ({ done, content, onCheck, onDelete }: IProps) {
  return (
    <li className="group flex items-center min-h-7">
      <input
        type="checkbox"
        onChange={onCheck}
        checked={done}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <span className="ml-2">{content}</span>
      {/* <button
        onClick={onDelete}
        type="button"
        className="ml-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-0.5 py-0.25 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete
      </button> */}
      <button onClick={onDelete} type="button" className="ml-2">
        <Icon
          className="w-5 h-5 text-red-500 invisible hover:visible hover:text-red-700 dark:text-red-700 dark:hover:text-red-900 group-hover:visible"
          type="close-circle"
        />
      </button>
    </li>
  );
}
