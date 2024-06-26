export default function Caret({ className }: { className: string }) {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      style={{ pointerEvents: "none", color: "currentcolor" }}
      viewBox="0 0 16 16"
      width="16"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
