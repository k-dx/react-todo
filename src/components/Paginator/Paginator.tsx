import { useState } from "react";

interface IProps {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  totalVisibleItems: number;
  setItemsPerPage: (n: number) => void;
}

export default function ({
  page,
  setPage,
  itemsPerPage,
  totalVisibleItems,
  setItemsPerPage,
}: IProps) {
  const [formItemsPerPage, setFormItemsPerPage] = useState<string>(
    itemsPerPage.toString()
  );
  return (
    <div className="flex flex-col items-center">
      {/* <!-- Help text --> */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(page - 1) * itemsPerPage + 1}{" "}
        </span>
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min(page * itemsPerPage, totalVisibleItems)}{" "}
        </span>
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalVisibleItems}{" "}
        </span>
        Entries <span>(Page {page})</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {/* <!-- Buttons --> */}
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => setPage(Math.max(1, page - 1))}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() =>
            setPage(
              Math.min(Math.ceil(totalVisibleItems / itemsPerPage), page + 1)
            )
          }
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <form
        className="flex mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!Number.isNaN(formItemsPerPage) && Number(formItemsPerPage) < 1) {
            setFormItemsPerPage(itemsPerPage.toString());
            return;
          }
          setPage(1);
          setItemsPerPage(+formItemsPerPage);
        }}
      >
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
          type="number"
          value={formItemsPerPage}
          onChange={(e) => setFormItemsPerPage(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          OK
        </button>
      </form>
    </div>
  );
}
