import ButtonCta from "../../../components/ButtonCta/ButtonCta";
import "./Hero.css";
import Gradient from "../../../components/Gradient/Gradient";
import Bold from "../../../components/Bold/Bold";
import { MEDIAS } from "../../../data/socialMedia";

const Hero = () => {
  return (
    <section className="pt-12 min-h-screen flex justify-center flex-col md:text-xl">
      <div className="text-center md:text-left flex items-center justify-center my-20">
        <div className="flex flex-col md:gap-8">
          <div>
            <p className="-mb-2 opacity-80">Olá! Eu sou</p>
            <h1 className="text-5xl font-bold md:text-6xl">
              <Gradient>RaonyDev</Gradient>
            </h1>
          </div>
          <img
            src="/react.svg"
            alt="Logo do React"
            className="react-logo m-auto w-8/12 my-12 sm:w-6/12 md:hidden"
          />
          <p className="leading-5 opacity-80 sm:w-9/12 mx-auto md:mx-0 max-w-150">
            Sou <Bold>desenvolvedor front-end</Bold> e tenho 17 anos. Comecei a
            programar com 13 e desde então venho{" "}
            <Bold>estudando e buscando evoluir.</Bold>
          </p>
          <div className="flex gap-12 m-auto mt-7">
            {MEDIAS.map((item) => (
              <div className="text-white bg-blue-900 rounded p-1.5">
                {item.icon}
              </div>
            ))}
          </div>
          <ButtonCta text="Contato" className="mx-auto mt-8 md:mx-0 md:mt-3" />
        </div>
        <img
          src="/react.svg"
          alt="Logo do React"
          className="react-logo m-auto w-7/12 max-w-100 hidden md:block xl:w-4/12 xl:max-w-150 "
        />
      </div>
    </section>
  );
};

export default Hero;
