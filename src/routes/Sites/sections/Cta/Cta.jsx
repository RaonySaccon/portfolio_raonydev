import ButtonCta from "../../components/ButtonCta/ButtonCta";

const Cta = () => {
  return (
    <section className="mt-20 px-6 bg-yellow-400 w-full md:flex items-center pb-15 justify-around md:pb-0">
      <img
        src="/images/sites/website.png"
        alt="Imagem de um site demonstrativo"
        className="w-100 relative -top-10 mx-auto"
      />
      <div className="text-center flex flex-col gap-6 max-w-100 mx-auto md:text-right md:justify-end">
        <h2 className="text-shadow-lg text-2xl">Não perca tempo!</h2>
        <p className="text-black leading-5">
          Transforme visitantes em clientes com páginas feitas para converter.
        </p>
        <div className="w-full md:flex md:justify-end">
          <ButtonCta
            text="EU QUERO UM SITE"
            black={true}
            className="mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
