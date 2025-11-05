import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { projectsList } from "./projectsList";
import useBreakpoint from "../../../../hooks/useBreakPoint";
import Gradient from "../../../../components/Gradient/Gradient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaLink } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/Theme/ThemeContext";

const Projects = () => {
  const { isSm, isMd } = useBreakpoint();
  const swiperRef = useRef(null);
  const { isLight } = useContext(ThemeContext);
  return (
    <section
      className="min-h-screen flex items-center py-20 md:py-0"
      id="projetos"
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center gap-9">
        <div className="text-center flex flex-col items-center md:flex-row md:justify-around w-full md:mb-8">
          <h3
            className="font-bold text-4xl md:text-left md:text-5xl"
            data-aos="fade-right"
          >
            <Gradient>Projetos</Gradient>
          </h3>
          <p
            className="text-center leading-5 opacity-70 mt-2 max-w-110 md:text-right"
            data-aos="fade-up"
          >
            Já participei de muitos projetos! Fique à vontade (arraste para os
            lados).
          </p>
        </div>

        <div className="relative w-full">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Anterior"
            className="cursor-pointer hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-50 items-center justify-center w-10 h-10 rounded-full text-blue-600 border-1 border-blue-600 hover:scale-105 transition"
            style={{ pointerEvents: "auto" }}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Próximo"
            className="cursor-pointer hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-50 items-center justify-center w-10 h-10 rounded-full text-blue-600 border-1 border-blue-600 hover:scale-105 transition"
            style={{ pointerEvents: "auto" }}
          >
            <FaChevronRight />
          </button>
          <Swiper
            onSwiper={(s) => (swiperRef.current = s)}
            modules={[Navigation, Pagination]}
            spaceBetween={30} 
            slidesPerView={1}
            centeredSlides={true}
            navigation={false}
            pagination={true}
            className="w-full"
            data-aos="zoom-in"
          >
            {projectsList.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center min-w-0 pb-12"
              >
                <div
                  className={`${
                    isLight ? "bg-white" : "bg-slate-950"
                  } mx-auto w-full md:w-10/12 lg:w-10/12 rounded-xl flex flex-col md:flex-row overflow-hidden min-w-0 p-2 md:p-4 xl:gap-6 xl:p-10`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl md:w-1/2 object-scale-down md:object-cover xl:object-scale-down md:object-left"
                    data-aos="slide-down"
                  />
                  <div
                    className="flex-1 p-2 sm:p-6 flex flex-col justify-center gap-6 min-w-0"
                    data-aos="slide-up"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 leading-6 mt-4 md:mt-0">
                      {item.title}
                    </h3>
                    <p className="opacity-70 leading-6">{item.description}</p>
                    <a
                      href={item.url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex gap-2 items-center bg-blue-600 text-white sm:px-8 xl:px-12 sm:w-fit justify-center py-2 rounded-lg w-full hover:scale-95 hover:bg-blue-700 transition"
                    >
                      Ver projeto
                      <FaLink />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
