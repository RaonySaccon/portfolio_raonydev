import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Aside from "../Aside/Aside";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";

const Header = () => {
  const [menuView, setMenuView] = useState(false);
  function toggleMenu() {
    setMenuView((prev) => !prev);
  }
  return (
    <>
      {menuView && <Aside toggleMenu={toggleMenu}></Aside>}
      <header className="flex px-8 justify-between py-2 bg-blue-700 text-white">
        <h1 className="text-md font-bold">RaonyDev</h1>
        <button
          aria-label="Abrir menu"
          className="text-2xl"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </header>
    </>
  );
};

export default Header;
