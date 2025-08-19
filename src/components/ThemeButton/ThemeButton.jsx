import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { useContext } from "react";

export default function ThemeButton({ className }) {
  const { isLight, alternateTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={alternateTheme}
      className={`${isLight ? "bg-amber-50" : "bg-slate-800"} ${
        className ? className : "hidden"
      } trasition-all duration-300 cursor-pointer text-white text-2xl px-2 py-1 sm:flex gap-1 rounded-3xl items-center shadow-[inset_0_6px_6px_rgba(0,0,0,0.3)]`}
    >
      <FaSun
        className={`${
          isLight &&
          "bg-blue-600 rounded-full text-shadow opacity-100 text-amber-100"
        } p-1 opacity-0 transition-all duration-300`}
      ></FaSun>
      <FaMoon
        className={`${
          !isLight &&
          "bg-blue-600 rounded-full text-shadow opacity-100 text-slate-800"
        } p-1 opacity-0 transition-all duration-300`}
      ></FaMoon>
    </button>
  );
}
