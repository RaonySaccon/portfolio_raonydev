// icons
import { FaWhatsapp } from "react-icons/fa";

export default function Cta() {
  return (
    <section id="cta" className="mb-24 py-30 md:py-">
      <div
        data-aos="zoom-in"
        className="bg-indigo-600 rounded-2xl p-8 text-white shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="md:col-span-2"
        >
          <h3 className="text-2xl font-bold">
            Pronto para transformar a comunicação da sua marca?
          </h3>
          <p className="mt-2 text-indigo-100">
            Resposta rápida, orçamento direto e entregas pensadas pra vender.
          </p>
          <ul className="mt-4 text-sm space-y-1 text-indigo-100">
            <li>✅ Entrega em 24h</li>
            <li>✅ Revisões rápidas</li>
            <li>✅ Arquivos prontos para anúncios</li>
          </ul>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex flex-col items-stretch gap-3"
        >
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20artes%20de%20publicidade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-600 px-4 py-3 font-semibold shadow gap-2 hover:scale-95 transition"
          >
            Falar agora no WhatsApp <FaWhatsapp />
          </a>

          <a
            href="#offers"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-4 py-3 font-medium hover:scale-95 transition"
          >
            Ver ofertas
          </a>
        </div>
      </div>
    </section>
  );
}
