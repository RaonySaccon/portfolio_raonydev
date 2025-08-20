import "./Hero.css";
import ButtonCta from "../../components/ButtonCta/ButtonCta";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center py-20">
      <div className="flex mx-auto lg:items-center">
        <div className="text-center flex flex-col gap-6 lg:text-left lg:max-w-120 md:max-w-120">
          <h1 className="text-2xl leading-6 font-bold xl:text-3xl ">
            <Gradient>Destaque-se da concorrência com sites</Gradient> que{" "}
            <Strong>convertem.</Strong>
          </h1>
          <img
            src="/images/sites/chess.png"
            alt="Imagem de xadrez"
            className="lg:hidden md:w-12/12 mx-auto"
          />
          <p className=" opacity-70 leading-5">
            Nosso processo é simples e direto: você compartilha sua ideia e seus
            objetivos; nós entregamos uma página que vende por você.
          </p>
          <div className="flex border-y-1 border-white/50 w-fit py-3 px-6 mx-auto items-center gap-2 lg:mx-0">
            <img
              src="/images/sites/projects.png"
              alt="Projetos feitos"
              className="w-12"
            />
            <p>Vários projetos feitos</p>
          </div>
          <ButtonCta text="QUERO INOVAR" className="mx-auto lg:mx-0" />
        </div>
        <img
          src="/images/sites/chess.png"
          alt="Imagem de xadrez"
          className="hidden lg:block w-7/12"
        />
      </div>
    </section>
  );
};

export default Hero;
