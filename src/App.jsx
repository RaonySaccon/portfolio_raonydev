import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header";
import { ThemeContext } from "./context/Theme/ThemeContext";

export default function App() {
  const { isLight } = useContext(ThemeContext);
  console.log(isLight);
  return (
    <>
      <Header />
      <main className={isLight ? "text-black" : "text-white"}>
        <Outlet></Outlet>
      </main>
    </>
  );
}
