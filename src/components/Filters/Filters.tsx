import { useState } from "react";
import { ISort } from "../../App";

interface IProps {
  classNames?: string;
  onDoneChange: (onlyDone: boolean) => void;
  onlyUndone: boolean;
  onSearchChange: (search: string) => void;
  search: string;
  setSort: (sort: ISort) => void;
  sort: ISort;
}

type Sorts = {
  [key in ISort]: { caption: string };
};
const sorts: Sorts = {
  default: { caption: "Default sort" },
  "a-z": { caption: "Sort a-z" },
  "z-a": { caption: "Sort z-a" },
};

export default function ({
  classNames,
  onDoneChange,
  onlyUndone: onlyDone,
  onSearchChange,
  search,
  setSort,
  sort,
}: IProps) {
  const [dropdownShow, setDropdownShow] = useState<boolean>(false);

  return (
    <form className={classNames}>
      <div className="flex">
        <input
          type="text"
          className="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search your todos..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 mr-2">
          <input
            id="only-done-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            checked={onlyDone}
            onChange={(e) => onDoneChange(e.target.checked)}
          />
          <label
            htmlFor="only-done-checkbox"
            className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            not done
          </label>
        </div>

        <div className="relative inline-block">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-40 inline-flex items-center justify-between"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDropdownShow(!dropdownShow);
            }}
          >
            {sorts[sort].caption}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`absolute left-0 top-full z-50 ${
              dropdownShow ? "" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {Object.entries(sorts).map(([key, value]) => (
                <li
                  key={key}
                  onClick={() => {
                    setSort(key);
                    setDropdownShow(false);
                  }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {value.caption}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}
