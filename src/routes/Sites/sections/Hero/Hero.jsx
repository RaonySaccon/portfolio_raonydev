import "./Hero.css";
import ButtonCta from "../../components/ButtonCta/ButtonCta";
import Gradient from "../../components/Gradient/Gradient";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center py-20">
      <div className="">
        <div className="text-center flex flex-col gap-6">
          <h1 className="text-2xl leading-6 font-bold">
            <Gradient>Destaque-se da concorrência com páginas</Gradient> que
            convertem.
          </h1>
          <img src="/images/sites/chess.png" alt="Imagem de xadrez" />
          <p className=" opacity-70 leading-5">
            Nosso processo é simples e direto: você compartilha sua ideia e seus
            objetivos; nós entregamos uma página que vende por você.
          </p>
          <div className="flex border-y-1 border-white/50 w-fit py-3 px-6 m-auto items-center gap-2">
            <img
              src="/images/sites/projects.png"
              alt="Projetos feitos"
              className="w-12"
            />
            <p>Vários projetos feitos</p>
          </div>
          <ButtonCta text="QUERO INOVAR" className="m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
