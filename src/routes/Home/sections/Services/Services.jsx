import Gradient from "../../../../components/Gradient/Gradient";
import { MdArrowRightAlt } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/Theme/ThemeContext";
import ButtonCta from "../../../../components/ButtonCta/ButtonCta";
import { servicesList } from "../../../../data/services";

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
        <ul className="grid grid-cols-1 gap-8 mt-10 xl:grid-cols-2 2xl:grid-cols-4">
          {servicesList.map((item) => (
            <li
              data-aos="zoom-in"
              className={`${
                isLight ? "bg-white" : "bg-slate-950"
              } w-full rounded text-left p-8 flex flex-col gap-5 relative md:p-12`}
            >
              <span className="text-4xl text-blue-600">{item.icon}</span>

              <h3 className="text-2xl font-bold leading-6">
                <Gradient>{item.title}</Gradient>
              </h3>

              <p className="leading-6 opacity-80 flex-grow">
                {item.description}
              </p>

              <a
                href={item.path}
                className="text-blue-600 flex items-center gap-2 hover:scale-95 transition mt-auto"
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
