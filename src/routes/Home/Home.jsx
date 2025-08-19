import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import { AnimatePresence, motion } from "motion/react";

import { useEffect, useState } from "react";
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
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <div className="fixed top-0 left-0 w-full h-screen z-1000 flex">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1 }}
              className="flex-1 bg-gray-200"
            ></motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1 }}
              className="flex-1 bg-gray-200"
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
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
