export default function Gradient({ children }) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-300 to-purple-900 w-fit bg-clip-text text-transparent pb-2`}
    >
      {children}
    </span>
  );
}
