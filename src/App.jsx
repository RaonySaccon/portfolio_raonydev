import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
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

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
