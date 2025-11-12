import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [isSm, setIsSm] = useState(false); // equivale a sm:
  const [isMd, setIsMd] = useState(false); // equivale a md:
  const [isLg, setIsLg] = useState(false); // equivale a lg:

  useEffect(() => { 
    const smQuery = window.matchMedia("(min-width: 640px)");
    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      setIsSm(smQuery.matches);
      setIsMd(mdQuery.matches);
      setIsLg(lgQuery.matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {isSm, isMd, isLg}
};

export default useBreakpoint;
