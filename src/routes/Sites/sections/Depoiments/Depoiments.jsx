import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Marcos Oliveira",
      cargo: "Dono de Oficina Mecânica",
      texto:
        "Todo mês aparecem novos clientes dizendo que me encontraram pelo site. O investimento se pagou rápido.",
      delay: 0,
    },
    {
      nome: "Ana Costa",
      cargo: "Maquiadora Profissional",
      texto:
        "Eu nunca imaginei que um site pudesse transmitir tanto da minha essência. Deixou meu negócio com um aspecto bem mais profissional.",
      delay: 250,
    },
    {
      nome: "João Ribeiro",
      cargo: "Fotógrafo",
      texto:
        "O site ficou incrível. Simples, rápido e bonito. Uso muito para anúncios. Recomendo de olhos fechados.",
      delay: 500,
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-20 px-10 relative overflow-hidden"
      id="depoimentos"
    >
      {/* brilho de fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-yellow-600/10 blur-3xl animate-pulse-slow pointer-events-none"></div>

      {/* Título */}
      <div
        className="text-center mb-12 relative z-10"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl leading-5.5 lg:text-3xl font-bold">
          <Gradient>O que dizem </Gradient>
          <Strong>nossos clientes?</Strong>
        </h2>
      </div>

      {/* Lista de depoimentos */}
      <div className="flex flex-col gap-6 items-center justify-center md:flex-row md:gap-8 lg:gap-12 relative z-10">
        {depoimentos.map((d, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black rounded-2xl text-white p-8 max-w-80 md:w-72 shadow-[0_0_20px_rgba(255,215,0,0.15)]  transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] group"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={d.delay}
          >
            {/* brilho em movimento */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent blur-md animate-slide-shine rounded-2xl"></div>

            <FaQuoteLeft className="absolute top-3 left-4 text-yellow-400 opacity-70 text-lg" />
            <p className="italic text-sm leading-6 mt-4 mb-6 opacity-90 relative z-10">
              {d.texto}
            </p>
            <FaQuoteRight className="absolute bottom-3 right-4 text-yellow-400 opacity-70 text-lg" />

            <div className="mt-4 border-t border-gray-700 pt-4 relative z-10">
              <p className="text-yellow-400 font-semibold">{d.nome}</p>
              <p className="text-xs opacity-70">{d.cargo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* animações custom */}
      <style>
        {`
          @keyframes slide-shine {
            0% { transform: translateX(-100%); opacity: 0.3; }
            50% { transform: translateX(100%); opacity: 0.5; }
            100% { transform: translateX(-100%); opacity: 0.3; }
          }
          .animate-slide-shine {
            animation: slide-shine 6s linear infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Depoimentos;
