import ButtonCta from "../../components/ButtonCta/ButtonCta";
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
    <section
      className="min-h-screen flex flex-col justify-center items-center py-20"
      id="processo"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Título */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-2xl leading-5.5 lg:text-3xl">
            <Gradient>Como funciona o </Gradient>
            <Strong>processo?</Strong>
          </h2>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Passos */}
          <div className="flex flex-col gap-3 text-center lg:text-left opacity-80 md:text-lg lg:w-1/2">
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
          <div className="flex justify-center lg:justify-end lg:w-1/2">
            <img
              src="/images/sites/processo.png"
              alt="Passo a passo do processo"
              className="w-10/12 sm:w-9/12 md:w-7/12 lg:w-full max-w-md"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <ButtonCta
          text="MAIS INFORMAÇÕES"
          data-aos="fade-up"
          className="mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default Processo;
