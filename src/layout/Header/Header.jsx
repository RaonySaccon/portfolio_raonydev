import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Aside from "../Aside/Aside";
import { navItems } from "./nav";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuView, setMenuView] = useState(false);
  function toggleMenu() {
    setMenuView((prev) => !prev);
  }
  return (
    <>
      <AnimatePresence>
        {menuView && <Aside key="aside-menu" toggleMenu={toggleMenu}></Aside>}
      </AnimatePresence>
      <header
        className="z-90 shadow fixed w-full flex px-8 justify-between items-center py-3 bg-blue-700 text-white"
        data-aos="slide-down"
      >
        <h1 className="text-md font-bold block sm:hidden md:block">RaonyDev</h1>
        <button
          aria-label="Abrir menu"
          className="text-2xl sm:hidden"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
        <nav className="hidden sm:flex sm:justify-between">
          <ul className="flex gap-8 w-fit">
            {navItems.map((item) => (
              <a href={item.path}>
                <li className="flex items-center gap-2 opacity-80 transition hover:scale-105 hover:opacity-100 hover:underline cursor-pointer">
                  {item.icon}
                  {item.title}
                </li>
              </a>
            ))}
          </ul>
        </nav>
        <ThemeButton></ThemeButton>
      </header>
    </>
  );
};

export default Header;
