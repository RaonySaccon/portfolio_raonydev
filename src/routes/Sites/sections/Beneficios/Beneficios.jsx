import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ButtonCta from "../../components/ButtonCta/ButtonCta";

const Beneficios = () => {
  const grayItemStyle =
    "from-black via-gray-900 to-gray-950 w-full h-50 rounded-lg text-yellow-400 p-6 md:w-60";

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-24 px-6"
      id="benefícios"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Texto com aspas */}
        <div
          className="relative py-8 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <FaQuoteLeft className="absolute top-0 left-0 text-yellow-400/80 md:text-xl" />
          <p className="max-w-2xl mx-auto leading-relaxed text-lg md:text-xl opacity-90">
            Imagine sua marca sendo notada, sua mensagem tocando o cliente e sua
            página convertendo de verdade. Com nossa página, garanta:
          </p>
          <FaQuoteRight className="absolute bottom-0 right-0 text-yellow-400/80 md:text-xl" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 mt-14 md:flex-row md:items-stretch justify-center mx-auto">
          {/* Card 1 */}
          <div
            className={`${grayItemStyle} bg-gradient-to-l`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="0"
          >
            <h2 className="mb-4 font-semibold text-lg">01. Credibilidade</h2>
            <p className="text-white/90 text-sm md:text-base">
              Fortaleça a confiança com o cliente e transmita autoridade no seu
              mercado.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-yellow-400 rounded-xl text-black p-6 md:w-64 py-10 shadow-lg shadow-yellow-400/30 border border-yellow-300"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="250"
          >
            <h2 className="mb-4 font-semibold text-lg">02. Vendas</h2>
            <p className="italic text-sm md:text-base">
              Nossos sites são criados com foco total em conversão. Cada detalhe
              foi pensado para transformar visitantes em clientes.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`${grayItemStyle} bg-gradient-to-r`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <h2 className="mb-4 font-semibold text-lg">03. Reconhecimento</h2>
            <p className="text-white/90 text-sm md:text-base">
              Faça sua marca se destacar e seja lembrado entre os concorrentes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mx-auto mt-12 w-fit"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <ButtonCta text="QUERO VENDER MAIS" />
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
