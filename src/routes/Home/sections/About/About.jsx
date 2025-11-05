import Gradient from "../../../../components/Gradient/Gradient";
import ButtonCta from "../../../../components/ButtonCta/ButtonCta";
import Bold from "../../../../components/Bold/Bold";

const About = () => {
  return (
    <section
      className="min-h-screen flex items-center py-20 md:py-0"
      id="sobre"
    >
      <div
        className="bg-slate-950 rounded px-4 py-20 text-center border-blue-800 border-3 shadow-xl md:flex md:text-right md:px-10 gap-8 items-center justify-between m-auto xl:px-20 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute top-6 right-6 flex gap-3">
          <div className="size-3 rounded-full bg-red-600"></div>
          <div className="size-3 rounded-full bg-green-600"></div>
          <div className="size-3 rounded-full bg-blue-600"></div>
        </div>
        <img
          src="/raonydev_logo.webp"
          alt="Logo RaonyDev"
          className="w-8/12 m-auto mb-5 md:my-0 sm:w-5/12 xl:w-4/12 md:mx-0 md:max-w-130"
          data-aos-delay="200"
          data-aos="zoom-in"
        />
        <div
          className="flex flex-col gap-6 items-center md:items-end"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-3xl font-bold md:text-5xl">
            <Gradient>Sobre mim</Gradient>
          </h1>
          <p className="leading-5.5 text-base opacity-70 sm:w-10/12 m-auto md:w-full md:text-lg max-w-120 text-white">
            Comecei cedo, aos 13 anos, e venho <Bold>vivendo tecnologia</Bold>{" "}
            como parte da minha vida. Desde então, estudo intensamente, crio
            conteúdo e desenvolvo <Bold>projetos cada vez melhores!</Bold>
          </p>
          <ButtonCta text="Contato" />
        </div>
      </div>
    </section>
  );
};
export default About;
