import ButtonCta from "../../components/ButtonCta/ButtonCta";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";

const Hero = () => {
  return (
    <section
      className="hero min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-12 overflow-hidden relative"
      id="home"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl px-6 relative z-10">
        {/* Texto principal */}
        <div className="text-center lg:text-left flex flex-col gap-6 max-w-xl">
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-up"
          >
            <Gradient>Destaque-se da concorrência</Gradient> com sites que{" "}
            <Strong>convertem de verdade.</Strong>
          </h1>

          <p
            className="opacity-80 leading-relaxed text-base md:text-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Nosso processo é simples e direto: você compartilha sua ideia e seus
            objetivos; nós entregamos um site profissional que atrai e conquista
            clientes.
          </p>

          {/* Destaques de valor */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-yellow-400 font-semibold text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-yellow-500/10 border border-yellow-400/40 px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.15)]">
              💡 Prévia 100% gratuita
            </div>
            <div className="bg-yellow-500/10 border border-yellow-400/40 px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.15)]">
              💰 Sites abaixo de <span className="text-white">R$500</span>
            </div>
          </div>

          {/* Indicador de projetos entregues */}
          <div
            className="flex items-center justify-center lg:justify-start gap-3 border-y border-white/30 py-3 px-6 w-fit mx-auto lg:mx-0"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <img
              src="/images/sites/projects.png"
              alt="Projetos feitos"
              className="w-12"
            />
            <p className="text-sm md:text-base">+20 projetos entregues</p>
          </div>

          {/* Botão CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="mx-auto lg:mx-0"
          >
            <ButtonCta text="QUERO INOVAR" />
          </div>
        </div>

        {/* Imagem do lado direito */}
        <div
          className="w-10/12 sm:w-9/12 lg:w-6/12 flex justify-center mb-8 lg:mb-0"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <img
            src="/images/sites/chess.png"
            alt="Imagem de xadrez"
            className="animate-float-slow"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
