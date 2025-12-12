import { useEffect } from "react";
import Aos from "aos";
import Button from "../components/Button";

const FEATURES = [
  { id: 1, title: "Entrega rápida", desc: "Artes prontas em pouco tempo." },
  {
    id: 2,
    title: "Design que vende",
    desc: "Peças feitas para chamar atenção e gerar vendas.",
  },
  { id: 3, title: "Arquivo pronto", desc: "Tudo no formato certo para usar." },
  { id: 4, title: "Revisões rápidas", desc: "Ajustes simples inclusos." },
];

const DELIVERABLES = [
  "Arquivos finais em PNG, JPG e PDF",
  "Artes prontas para postar e anunciar",
  "Ajustes aplicados conforme solicitado",
  "Entrega organizada e direta",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-30 md:py-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h2 data-aos="fade-up" className="text-4xl font-bold">
            Sobre
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 text-slate-600"
          >
            Artes para empresas que precisam divulgar, atrair clientes e vender.
            Posts, banners, flyers e anúncios no estilo da sua marca.
          </p>

          <ul
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {FEATURES.map(({ id, title, desc }) => (
              <li key={id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                  {id}
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside data-aos="fade-left" className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold">O que você recebe</h3>

          <ul className="mt-4 text-sm text-slate-600 space-y-2">
            {DELIVERABLES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-6">
            <Button text="Quero começar" />
          </div>
        </aside>
      </div>
    </section>
  );
}
