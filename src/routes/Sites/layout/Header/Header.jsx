import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Aside from "../Aside/Aside";
import { CgClose } from "react-icons/cg";
import { navList } from "./navList";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <header
        className={`${
          menuIsOpen
            ? "from-gray-950 via-gray-950 to-black bg-gradient-to-br"
            : "bg-black/60 backdrop-blur"
        } transition fixed top-0 left-0 w-full text-white justify-around z-100`}
      >
        <div className="flex justify-around py-3">
          <h1>@RaonyDev ☕ </h1>
          <div className="md:hidden">
            {!menuIsOpen ? (
              <button className="text-2xl" onClick={() => setMenuIsOpen(true)}>
                <BiMenu />
              </button>
            ) : (
              <button className="text-2xl" onClick={() => setMenuIsOpen(false)}>
                <CgClose />
              </button>
            )}
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-10">
            {navList.map((item) => (
              <a
                href={`#${item.path}`}
                className="flex items-center gap-1 cursor-pointer hover:scale-95 transition opacity-70 hover:opacity-100"
              >
                {item.icon}
                {item.title}
              </a>
            ))}
          </nav>
        </div>
        <AnimatePresence>
          {menuIsOpen && <Aside setMenu={setMenuIsOpen} />}
        </AnimatePresence>
        <AnimatePresence>
          {!menuIsOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full py-1 bg-yellow-400"
            >
              <h2 className="text-sm text-black text-center">
                PROMOÇÃO DE 30% PARA NOVOS CLIENTES
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
