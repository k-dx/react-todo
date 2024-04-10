type iconType = "search" | "plus-circle" | "close-circle";

interface IProps {
  type: iconType;
  viewbox?: string;
  className?: string;
}

const icons: Record<iconType, JSX.Element> = {
  search: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    />
  ),
  "plus-circle": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  ),
  "close-circle": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  ),
};

export default function ({ type, viewbox, className }: IProps) {
  return (
    <svg
      className={className ? className : "w-5 h-5"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={viewbox ? viewbox : "0 0 24 24"}
    >
      {icons[type]}
    </svg>
  );
}
