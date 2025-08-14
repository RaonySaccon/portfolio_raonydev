import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Aside from "../Aside/Aside";
import { navItems } from "./nav";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

const Header = () => {
  const [menuView, setMenuView] = useState(false);
  function toggleMenu() {
    setMenuView((prev) => !prev);
  }
  return (
    <>
      {menuView && <Aside toggleMenu={toggleMenu}></Aside>}
      <header className="z-90 shadow fixed w-full flex px-8 justify-between items-center py-3 bg-blue-700 text-white">
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
              <li className="flex items-center gap-2 opacity-80">
                {item.icon}
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <ThemeButton></ThemeButton>
      </header>
    </>
  );
};

export default Header;
