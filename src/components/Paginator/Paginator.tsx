interface IProps {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  totalVisibleItems: number;
}

export default function ({ page, setPage, itemsPerPage, totalVisibleItems }: IProps) {
  return (
    <div className="flex flex-col items-center">
      {/* <!-- Help text --> */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(page - 1) * itemsPerPage + 1}{' '}
        </span>
        to{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min((page) * itemsPerPage, totalVisibleItems)}{' '}
        </span>
        of{' '}
        <span className="font-semibold text-gray-900 dark:text-white">{totalVisibleItems}{' '}
        </span>
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {/* <!-- Buttons --> */}
        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => setPage(Math.max(1, page - 1))}>
          <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
          Prev
        </button>
        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() =>
            setPage(Math.min(Math.ceil(totalVisibleItems / itemsPerPage),
              page + 1))}>
          Next
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
