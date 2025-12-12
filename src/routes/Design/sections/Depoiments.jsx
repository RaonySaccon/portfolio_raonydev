// data
import { testimonials } from "../data/testimonialsData";

// components
import Button from "../components/Button";

// icons
import { FaStar } from "react-icons/fa";

export default function Depoiments() {
  return (
    <section
      id="depoiments"
      className="min-h-screen flex flex-col justify-center py-30 md:py-0"
    >
      <h2 data-aos="fade-up" className="text-4xl font-bold">
        Depoimentos
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-slate-600 mt-2"
      >
        Resultados reais de clientes locais e pequenos negócios.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((t, i) => (
          <blockquote
            key={t.id}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="rounded-xl bg-white p-6 shadow pb-12 relative"
          >
            <p className="text-slate-700 md:h-40 lg:h-30 xl:h-22 mb-6">
              "{t.text}"
            </p>

            <div className="flex justify-center absolute w-full left-0 -bottom-2">
              <div className="flex gap-2 bg-indigo-500 px-4 py-1 rounded-md text-yellow-300">
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <FaStar />
                ))}
              </div>
            </div>

            <footer className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {t.name.split(" ")[0].charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="w-full flex justify-center mt-12"
      >
        <Button className="w-fit" text="Tenho interesse!" />
      </div>
    </section>
  );
}
