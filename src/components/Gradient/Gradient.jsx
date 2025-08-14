export default function Gradient({ children }) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-400 to-purple-800 w-fit bg-clip-text text-transparent pb-2`}
    >
      {children}
    </span>
  );
}
