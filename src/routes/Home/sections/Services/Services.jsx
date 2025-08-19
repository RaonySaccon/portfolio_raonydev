import Gradient from "../../../../components/Gradient/Gradient";
import { servicesList } from "./servicesList";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/Theme/ThemeContext";
import ButtonCta from "../../../../components/ButtonCta/ButtonCta";

const Services = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <section
      className="min-h-screen flex justify-center items-center py-20 md:py-0"
      id="serviços"
    >
      <div className="text-center">
        <h2
          className="font-bold text-4xl md:text-5xl md:mb-2"
          data-aos="zoom-in"
        >
          <Gradient>Serviços</Gradient>
        </h2>
        <p className="opacity-70" data-aos="fade-up">
          Dê uma olhada nos serviços que ofereco ;)
        </p>
        <ul className="flex flex-col gap-8 mt-10 md:flex-row">
          {servicesList.map((item) => (
            <li
              data-aos="zoom-in"
              className={`${
                isLight ? "bg-white" : "bg-slate-950"
              } w-full rounded text-left p-8 flex flex-col gap-5 relative pb-20 md:size-85 md:pb-0 md:p-12`}
            >
              <span className="text-4xl text-blue-600">{item.icon}</span>
              <h3 className="text-2xl font-bold leading-6">
                <Gradient>{item.title}</Gradient>
              </h3>
              <p className="leading-6 opacity-80">{item.description}</p>

              <a
                href="https://wa.me/5551999355193"
                target="_blank"
                className="absolute bottom-6 text-blue-600 flex items-center gap-2 hover:scale-95 transition "
              >
                Ver mais
                <MdArrowRightAlt className="mt-1" />
              </a>
            </li>
          ))}
        </ul>
        <ButtonCta
          text="Tenho interesse!"
          className="mx-auto mt-12"
        ></ButtonCta>
      </div>
    </section>
  );
};

export default Services;
