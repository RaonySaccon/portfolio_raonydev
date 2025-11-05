import React from "react";
import { navList } from "../Header/navList";
import ButtonCta from "../../components/ButtonCta/ButtonCta";
import { motion } from "motion/react";

const Aside = ({ setMenu }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      className="w-full backdrop-blur md:hidden overflow-hidden"
    >
      <nav className="flex flex-col gap-4 py-4 px-8">
        {navList.map((item) => (
          <a
            href={`#${item.path}`}
            className="flex items-center"
            onClick={() => setMenu(false)}
          >
            <span className="w-7">{item.icon}</span>
            {item.title}
          </a>
        ))}
        <ButtonCta text="CONTATO" className="mt-4" />
      </nav>
    </motion.div>
  );
};

export default Aside;
