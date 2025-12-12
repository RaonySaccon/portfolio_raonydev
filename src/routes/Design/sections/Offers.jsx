// data
import { offers } from "../data/offersData";

export default function Offers() {
  return (
    <section
      id="offers"
      className="min-h-screen flex flex-col justify-center py-30 md:py-0"
    >
      <h2 data-aos="fade-up" className="text-4xl font-bold">
        Ofertas
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-slate-600 mt-2"
      >
        Pacotes prontos e serviços avulsos — escolha o que encaixa no seu fluxo.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {offers.map((o) => (
          <article
            key={o.id}
            data-aos="zoom-in"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition border border-slate-100"
          >
            <h3 className="font-semibold text-lg">{o.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{o.desc}</p>

            <ul className="mt-4 text-sm space-y-2">
              {o.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-semibold">
                    •
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-slate-600">A partir de</div>
              <div className="font-bold">R$ {o.value}</div>
            </div>

            <div className="mt-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm"
              >
                Pedir orçamento
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
