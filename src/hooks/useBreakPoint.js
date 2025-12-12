import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [isSm, setIsSm] = useState(false); 
  const [isMd, setIsMd] = useState(false); 
  const [isLg, setIsLg] = useState(false); 

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
