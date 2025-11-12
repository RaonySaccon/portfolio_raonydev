import { useState } from "react";
import { faqItems } from "./faqItems";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";
import { AnimatePresence, motion } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4 py-20" id="faq">
      <h2 className="text-2xl text-center mb-8">
        <Gradient>Perguntas frequentes</Gradient> <Strong>(FAQ)</Strong>
      </h2>
      <div className="flex flex-col gap-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-400 rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <button
              className="w-full text-left p-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 flex justify-between items-center transition"
              onClick={() => toggleIndex(index)}
            >
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="bg-black text-yellow-400"
                >
                  <p className="p-4">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
