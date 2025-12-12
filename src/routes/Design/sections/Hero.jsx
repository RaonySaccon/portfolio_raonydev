// libs
import Aos from "aos";
import { useEffect } from "react";

// components
import Gradient from "../../../components/Gradient/Gradient";
import Button from "../components/Button";

// data
import { heroImages } from "../data/heroData";

export default function Hero() {
  return (
    <header className="relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-extrabold leading-10"
            >
              Artes profissionais para negócios que querem{" "}
              <Gradient className="from-indigo-600">vender mais.</Gradient>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl"
            >
              Design rápido, moderno e feito para chamar atenção. Você recebe
              tudo pronto para postar ou anunciar.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button text="Pedir um orçamento" />
              <a
                href="#offers"
                className="inline-flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 font-medium hover:bg-slate-100 hover:scale-95 transition"
              >
                Ver ofertas
              </a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 grid grid-cols-3 gap-3 w-fit"
            >
              {heroImages.map((path, i) => (
                <img key={i} className="size-30 rounded-lg" src={path} />
              ))}
            </div>
          </div>

          <figure
            data-aos="zoom-in"
            className="relative flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-tr from-indigo-200 to-indigo-400 p-6 shadow-2xl">
              <img
                src="/images/design/1.png"
                alt="Mockup"
                className="w-full h-64 object-cover rounded-lg border border-white/30 shadow"
              />
              <div className="mt-4 bg-white/80 rounded p-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">Promova seu produto</p>
                  <p className="text-xs text-slate-600">Entrega: 24h</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">R$ 29,00</p>
                  <p className="text-xs text-slate-600">A partir de</p>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute right-0 top-0 -translate-y-20 opacity-10"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="url(#g)" />
        <defs>
          <radialGradient id="g">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec4899" />
          </radialGradient>
        </defs>
      </svg>
    </header>
  );
}
