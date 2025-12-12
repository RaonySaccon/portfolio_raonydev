import { FaWhatsapp } from "react-icons/fa";

export default function Button({ text = "Entrar em contato", className }) {
  return (
    <a
      href="#"
      className={`${className} inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-indigo-800 text-white px-8 py-3 font-medium shadow-lg hover:bg-indigo-700 transition hover:scale-95`}
    >
      {text} <FaWhatsapp />
    </a>
  );
}
