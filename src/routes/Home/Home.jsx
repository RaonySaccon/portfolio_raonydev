import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// sections
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import FAQ from "./sections/FAQ/FAQ";
import WhatsappBtn from "../../components/WhatsappBtn/WhatsappBtn";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const { isLight } = useContext(ThemeContext);
  function Margin({ children }) {
    return <div className="mx-auto w-10/12 sm:w-10/12 ">{children}</div>;
  }
  return (
    <>
      <main
        className={`${
          isLight ? " text-slate-950 bg-gray-200" : "bg-slate-900 text-amber-50"
        } min-h-screen text-lg transition duration-1000`}
      >
        <Margin>
          <Hero />
          <About />
          <Services />
          <Projects />
          <FAQ />
          <WhatsappBtn />
        </Margin>
      </main>
    </>
  );
}
