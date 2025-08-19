import ButtonCta from "../../../../components/ButtonCta/ButtonCta";
import "./Hero.css";
import Gradient from "../../../../components/Gradient/Gradient";
import Bold from "../../../../components/Bold/Bold";
import { MEDIAS } from "../../../../data/socialMedia";

const Hero = () => {
  return (
    <>
      <section
        className="pt-12 min-h-screen flex justify-center flex-col md:text-xl"
        id="home"
      >
        <div className="text-center md:text-left flex items-center justify-center my-20">
          <div className="flex flex-col md:gap-8">
            <div data-aos="fade-left" data-aos-delay="400">
              <div className="flex gap-1 items-baseline justify-center md:justify-start">
                <img
                  src="/waving_hand.png"
                  alt="Emoji de mão acenando"
                  className="waving w-7 relative"
                />
                <p className="-mb-2 opacity-80 text-xl">Olá! Eu sou</p>
              </div>
              <h1 className="text-5xl font-bold md:text-6xl">
                <Gradient>RaonyDev</Gradient>
              </h1>
            </div>
            <img
              src="/react.svg"
              alt="Logo do React"
              className="react-logo m-auto w-8/12 my-12 sm:w-6/12 md:hidden"
              data-aos="zoom-in"
            />
            <div
              className="flex flex-col gap-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="leading-5 opacity-80 sm:w-9/12 mx-auto md:mx-0 max-w-150">
                Sou <Bold>desenvolvedor front-end.</Bold> Cada site que crio
                conta uma história. <Bold>Vamos começar a sua? </Bold>
              </p>
              <div className="flex gap-12 mx-auto mt-7 md:mx-0 md:mt-0">
                {MEDIAS.map((item) => (
                  <a href={item.link} target="_blank">
                    <div className="text-white bg-blue-900 rounded p-1.5 cursor-pointer hover:scale-110 transition hover:bg-blue-800">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
              <ButtonCta
                text="Contato"
                className="mx-auto mt-8 md:mx-0 md:mt-3"
              />
            </div>
          </div>
          <img
            src="/react.svg"
            alt="Logo do React"
            className="react-logo m-auto w-7/12 max-w-100 hidden md:block xl:w-4/12 xl:max-w-150"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
