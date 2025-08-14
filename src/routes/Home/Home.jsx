import Hero from "./sections/Hero";
import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
export default function Home() {
  const { isLight } = useContext(ThemeContext);
  function Margin({ children }) {
    return <div className="mx-auto w-10/12 sm:w-10/12 ">{children}</div>;
  }
  return (
    <>
      <main
        className={`${
          isLight ? " text-slate-950 bg-gray-200" : "bg-slate-900 text-amber-50"
        } min-h-screen text-lg`}
      >
        <Margin>
          <Hero></Hero>
        </Margin>
      </main>
    </>
  );
}
