import { useState } from "react";
import { faqItems } from "./faqItems";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl text-center mb-8">
        <Gradient>Perguntas frequentes</Gradient> <Strong>(FAQ)</Strong>
      </h2>
      <div className="flex flex-col gap-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-400 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors flex justify-between items-center"
              onClick={() => toggleIndex(index)}
            >
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-black text-yellow-400 transition-all duration-300 whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
