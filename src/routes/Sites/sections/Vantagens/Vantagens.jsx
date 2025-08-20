import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";
import { vantagens } from "./vantagensList";
import ButtonCta from "../../components/ButtonCta/ButtonCta";

const Vantagens = () => {
  return (
    <section className="min-h-screen flex items-center py-30">
      <div className="w-full">
        <div className="flex flex-col text-center gap-4 lg:flex-row-reverse justify-around lg:gap-8">
          <h2 className="text-2xl leading-7 lg:text-3xl lg:text-right lg:max-w-80">
            <Gradient>Vantagens dos nossos</Gradient> <Strong>sites</Strong>
          </h2>
          <p className="opacity-80 max-w-140 mx-auto lg:text-left lg:mx-0">
            Com nossos sites, você tem mais que uma página com visual bonito –
            você investe em uma ferramenta poderosa com várias vantagens.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-12 lg:flex-row justify-center">
          {vantagens.map((item) => (
            <div className="from-gray-900 to-gray-950 bg-gradient-to-bl p-6 rounded flex flex-col gap-3 lg:size-70">
              <span className="text-3xl text-yellow-400">{item.icon}</span>
              <h3 className="text-yellow-400 lg:h-15">{item.title}</h3>
              <p className="opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
        <ButtonCta text="QUERO BENEFÍCIOS" className="mx-auto mt-10" />
      </div>
    </section>
  );
};

export default Vantagens;
