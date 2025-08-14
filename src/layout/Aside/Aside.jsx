import { IoMdClose } from "react-icons/io";
import { navItems } from "../Header/nav";
import { FaWhatsapp } from "react-icons/fa";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

export default function Aside({ toggleMenu }) {
  return (
    <>
      <div
        className="bg-black/60 fixed w-full h-screen z-100"
        onClick={toggleMenu}
      ></div>
      <aside className="z-110 sm:hidden w-70 fixed h-screen bg-blue-700 text-white">
        <header className="py-2 px-8 w-full border-b border-white/30 flex justify-between items-center">
          <h2 className="font-bold text-2xl">RaonyDev</h2>
          <button
            className="text-2xl bg-black/10 rounded p-1"
            aria-label="Fechar menu"
            onClick={toggleMenu}
          >
            <IoMdClose />
          </button>
        </header>
        <ul className="px-8 my-8 mb-12 text-xl gap-4 flex flex-col">
          <ThemeButton className="flex w-fit mb-4"></ThemeButton>
          {navItems.map((item) => (
            <li
              className={`${
                item?.active && "opacity-100"
              } flex items-center opacity-75`}
            >
              <span className="w-8">{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
          <li>
            <button className="mt-4 px-6 w-full py-2 bg-blue-900 rounded flex items-center justify-center gap-2">
              Contato
              <FaWhatsapp />
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
