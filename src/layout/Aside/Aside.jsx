import { IoMdClose } from "react-icons/io";
import { navItems } from "../Header/Nav";
import { FaWhatsapp } from "react-icons/fa";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { motion } from "motion/react";

export default function Aside({ toggleMenu }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-black/60 fixed w-full h-screen z-100"
        onClick={toggleMenu}
      ></motion.div>
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.2 }}
        className="z-110 sm:hidden w-70 fixed h-screen bg-blue-700 text-white"
      >
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
            <li className={`${item?.active && "opacity-100"} opacity-75`}>
              <a
                href={item.path}
                className="flex items-center"
                onClick={toggleMenu}
              >
                <span className="w-8">{item.icon}</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              className="mt-4 px-6 w-full py-2 bg-blue-900 rounded flex items-center justify-center gap-2"
              href="https://wa.me/5551999355193"
            >
              Contato
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </motion.aside>
    </>
  );
}
