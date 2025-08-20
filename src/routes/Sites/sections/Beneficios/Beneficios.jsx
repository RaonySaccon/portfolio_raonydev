import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import ButtonCta from "../../components/ButtonCta/ButtonCta";

const Beneficios = () => {
  const grayItemStyle =
    "from-black via-gray-900 to-gray-950 w-full h-50 rounded-lg text-yellow-400 p-6 md:w-60";
  return (
    <section className="min-h-screen py-20 items-center">
      <div>
        <div className="w-fit mx-auto py-8 px-1 relative">
          <FaQuoteLeft className="top-0 left-0 absolute md:text-xl" />
          <p className="max-w-160 text-center leading-5.5">
            Imagine sua marca sendo notada, sua mensagem tocando o cliente, e
            sua página convertendo de verdade. Com nossa página, garanta:
          </p>
          <FaQuoteRight className="bottom-0 right-0 absolute md:text-xl" />
        </div>
        <div className="flex flex-col gap-4 mt-12 leading-5.5 md:flex-row md:items-end justify-center mx-auto">
          <div className={`${grayItemStyle} bg-gradient-to-l`}>
            <h2 className="mb-6">01. Credibilidade</h2>
            <p className="text-white">Fortaleça a confiança com o cliente.</p>
          </div>
          <div className="bg-yellow-400 rounded-lg text-black p-6 md:w-60 py-10 md:rounded-b-none ">
            <h2 className="mb-6">02. Vendas</h2>
            <p className="italic">
              Nossos sites são feitos com foco em conversão. Cada detalhe é
              feito transformar o visitante em cliente.
            </p>
          </div>
          <div className={`${grayItemStyle} bg-gradient-to-r `}>
            <h2 className="mb-6">03. Reconhecimento</h2>
            <p className="text-white">
              Destaque sua marca em meio à concorrência
            </p>
          </div>
        </div>
        <ButtonCta
          text="QUERO VENDER MAIS"
          className="mx-auto mt-8"
        ></ButtonCta>
      </div>
    </section>
  );
};

export default Beneficios;
