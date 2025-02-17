export default function DrawerIcon({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 20H4C3.448 20 3 19.553 3 19C3 18.447 3.448 18 4 18H20C20.552 18 21 18.447 21 19C21 19.553 20.552 20 20 20Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6H4C3.448 6 3 5.553 3 5C3 4.447 3.448 4 4 4H20C20.552 4 21 4.447 21 5C21 5.553 20.552 6 20 6Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13H4C3.448 13 3 12.553 3 12C3 11.447 3.448 11 4 11H20C20.552 11 21 11.447 21 12C21 12.553 20.552 13 20 13Z"
        fill="black"
      />
    </svg>
  );
}
