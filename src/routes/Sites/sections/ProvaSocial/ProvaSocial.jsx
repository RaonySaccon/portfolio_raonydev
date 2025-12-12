import ButtonCta from "../../components/ButtonCta/ButtonCta";

import { motion } from "framer-motion";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";
import { useEffect, useState } from "react";

const ProvaSocial = () => {
  const sites = [
    "/images/sites/provasocial/mae-nina.png",
    "/images/sites/provasocial/box-zero-tres.png",
    "/images/sites/provasocial/jokershopp.png",
    "/images/sites/provasocial/padaria-rosa.png",
    "/images/sites/provasocial/krusty.png",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  const duration = isMobile ? 10 : 25; 
  const translateValue = isMobile ? -1200 : -2500;

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-20 overflow-hidden"
      id="prova-social"
    >
      {/* Título */}
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl leading-5.5 lg:text-3xl">
          <Gradient>Alguns dos </Gradient>
          <Strong>sites já feitos</Strong>
        </h2>
        <p className="opacity-70 mt-3 text-sm md:text-base">
          Resultados reais. Marcas que escolheram se destacar com páginas de
          impacto.
        </p>
      </div>

      {/* Slider infinito */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, translateValue] }}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          }}
        >
          {[...sites, ...sites].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-96 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={src}
                alt={`Site ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Chamada de confiança */}
      <div
        className="text-center mt-12 opacity-90"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <p>
          <Strong>Mais de 20 marcas</Strong> já transformaram sua presença
          online com a <Gradient>RaonyDev</Gradient>.
        </p>
        <ButtonCta
          text="QUERO O MEU"
          data-aos="fade-up"
          className="mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default ProvaSocial;
