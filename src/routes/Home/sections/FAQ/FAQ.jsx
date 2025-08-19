import React, { useContext, useState } from "react";
import { faqList } from "./faqList";
import { ThemeContext } from "../../../../context/Theme/ThemeContext";
import Gradient from "../../../../components/Gradient/Gradient";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

const FAQ = () => {
  const { isLight } = useContext(ThemeContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 md:pt-0 md:pb-0">
      <div className="w-full">
        <div className="text-center mb-12 gap-2 flex flex-col md:flex-row-reverse justify-between items-center">
          <h3
            className="text-4xl font-bold md:text-right md:text-5xl"
            data-aos="zoom-in"
          >
            <Gradient>FAQ</Gradient>
          </h3>
          <p
            className="leading-5 opacity-70 max-w-110 md:text-left"
            data-aos="fade-right"
          >
            Se tiver dúvidas, veja as respostas das perguntas frequentes que
            recebo!
          </p>
        </div>
        <ul className="flex flex-col w-full">
          {faqList.map((item, index) => (
            <li
              data-aos="fade-up"
              key={index}
              className={`${
                isLight ? "bg-white" : "bg-slate-950"
              } w-full border-b-2 border-blue-600 p-4 cursor-pointer leading-6`}
              onClick={() => toggleItem(index)}
            >
              <div className="flex justify-between items-center">
                <p className="opacity-80 font-medium">{item.question}</p>
                {openIndex === index ? (
                  <FiChevronUp className="text-xl" />
                ) : (
                  <FiChevronDown className="text-xl" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="opacity-70 pt-4">R: {item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
