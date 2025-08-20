import Strong from "../../components/Strong/Strong";
import Gradient from "../../components/Gradient/Gradient";

const Processo = () => {
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-2xl leading-5.5 lg:text-3xl">
            <Gradient>Como funciona o </Gradient>
            <Strong>processo?</Strong>
          </h2>
        </div>
        <div className="flex flex-col-reverse gap-8 mt-12 lg:flex-row items-center justify-between lg:mt-20">
          <div className="flex flex-col gap-2 opacity-80 md:text-lg lg:w-120">
            <p>
              <Strong>01.</Strong> Entendemos suas necessidades e objetivos.
            </p>
            <p>
              <Strong>02.</Strong> Planejamos o layout ideal para seu
              público-alvo.
            </p>
            <p>
              <Strong>03.</Strong> Construímos sua página com cuidado, revisando
              junto com você.
            </p>
            <p>
              <Strong>04.</Strong> O site é colocado no ar, garantindo que tudo
              funcione perfeitamente e ainda oferecemos suporte adicional.
            </p>
          </div>
          <img
            src="/images/sites/processo.png"
            alt="Passo a passo do processo"
            className="w-11/10 sm:w-9/12 mx-auto md:w-6/12 lg:max-w-140"
          />
        </div>
      </div>
    </section>
  );
};

export default Processo;
