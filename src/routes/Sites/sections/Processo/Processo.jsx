import Strong from "../../components/Strong/Strong";
import Gradient from "../../components/Gradient/Gradient";

const Processo = () => {
  const passos = [
    "Entendemos suas necessidades e objetivos.",
    "Planejamos o layout ideal para seu público-alvo.",
    "Construímos sua página com cuidado, revisando junto com você.",
    "O site é colocado no ar, garantindo que tudo funcione perfeitamente e ainda oferecemos suporte adicional.",
  ];

  return (
    <section className="min-h-screen flex items-center py-20" id="processo">
      <div className="w-full">
        {/* Título */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-2xl leading-5.5 lg:text-3xl">
            <Gradient>Como funciona o </Gradient>
            <Strong>processo?</Strong>
          </h2>
        </div>

        <div className="flex flex-col-reverse gap-8 mt-12 lg:flex-row items-center justify-between lg:mt-20">
          {/* Passos */}
          <div className="flex flex-col gap-2 opacity-80 md:text-lg lg:w-120">
            {passos.map((text, index) => (
              <p
                key={index}
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay={index * 250}
              >
                <Strong>{String(index + 1).padStart(2, "0")}.</Strong> {text}
              </p>
            ))}
          </div>

          {/* Imagem */}
          <img
            src="/images/sites/processo.png"
            alt="Passo a passo do processo"
            className="w-11/10 sm:w-9/12 mx-auto md:w-6/12 lg:max-w-140"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Processo;
