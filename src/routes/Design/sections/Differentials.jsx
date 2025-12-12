// data
import { differentials } from "../data/differentialsData";

// components
import Button from "../components/Button";

export default function Differentials() {
  return (
    <section
      id="differentials"
      className="min-h-screen flex flex-col justify-center"
    >
      <h2 data-aos="fade-up" className="text-4xl font-bold text-center">
        Por que escolher?
      </h2>

      <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentials.map((d, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="relative rounded-2xl p-6 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-lg"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-lg font-bold">
              {i + 1}
            </div>

            <p className="font-semibold text-lg leading-tight">{d}</p>

            <div className="mt-4 h-1 w-10 bg-white/40 rounded-full" />
          </div>
        ))}

        <svg
          className="pointer-events-none absolute left-0 -translate-x-20 opacity-10"
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
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="w-full flex justify-center mt-10"
      >
        <Button text="Quero inovar!" className="w-fit" />
      </div>
    </section>
  );
}
