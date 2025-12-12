import "./styles.css";
import { links } from "../../data/linksList";
import Gradient from "../../components/Gradient/Gradient";
import Aos from "aos";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Links() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [isLight, setIsLight] = useState(true);

  return (
    <main
      className={`${
        isLight ? " bg-gray-100" : " bg-slate-900"
      } flex justify-center`}
    >
      <div
        className={`${
          isLight ? "bg-gray-50" : "bg-slate-800"
        } pb-30 transition max-w-160 shadow relative`}
      >
        {/* HEADER */}
        <div className="fixed w-full left-0 top-0 z-20 flex justify-center">
          <header className="w-full max-w-120 flex justify-end px-8 pt-4">
            <button
              className={`${
                isLight ? "text-black" : "text-white"
              } backdrop-blur-xl bg-slate-900/10 hover:bg-white-900/20 transition text-2xl p-3 rounded-full border border-white/20 shadow-lg`}
              onClick={() => setIsLight((prev) => !prev)}
            >
              {isLight ? <FaSun /> : <FaMoon />}
            </button>
          </header>
        </div>

        {/* HERO */}
        <div className="hero-links pt-10 flex items-end justify-center relative">
          <img
            src="/images/links/me.webp"
            className="w-9/12"
            data-aos="slide-up"
          />

          <div
            className={`absolute left-0 bottom-0 w-full h-4 z-10 ${
              isLight
                ? "bg-gradient-to-t from-gray-100 to-transparent"
                : "bg-gradient-to-t from-slate-800 to-transparent"
            }`}
          ></div>
        </div>

        {/* CONTEÚDO */}
        <div
          className={
            isLight ? "bg-gray-50 relative z-10" : "bg-slate-800 relative z-10"
          }
        >
          <div className="relative bottom-7 w-full flex justify-center">
            <h1 className="border border-gray-700 bg-gradient-to-tr from-gray-900 to-gray-700 text-xl font-bold text-white px-8 py-2 rounded-full backdrop-blur-sm">
              Bem-vindo(a)!
            </h1>
          </div>

          <div className="w-full flex flex-col items-center">
            <p
              className={`${
                isLight ? "text-gray-800" : "text-white"
              } mb-4 flex items-center`}
              data-aos="zoom-in"
            >
              Links úteis{" "}
              <img src="/images/links/down-finger.webp" className="w-8" />
            </p>
          </div>

          <div className="flex flex-col gap-10 w-full px-8">
            {links.map((link, index) => (
              <div
                key={index}
                className={`${
                  isLight
                    ? "bg-white border border-gray-200 shadow-sm"
                    : "bg-slate-900"
                } px-6 py-8 rounded-xl`}
              >
                <h2
                  className={`${
                    isLight
                      ? "font-bold text-2xl mb-2 text-gray-900"
                      : "font-bold text-2xl mb-2 text-white"
                  } flex items-center gap-2`}
                >
                  <div className="bg-gradient-to-tr from-blue-800 to-blue-400 size-8 flex justify-center items-center rounded-full text-white mb-2">
                    {index + 1}
                  </div>{" "}
                  <Gradient>{link.linkTitle}</Gradient>
                </h2>

                <div className="flex flex-col gap-4">
                  {link.data.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      data-aos="zoom-in"
                      className={
                        isLight
                          ? "border-b-2 border-blue-500 px-4 py-3 bg-gray-50 hover:bg-gray-200 transition rounded-lg"
                          : "border-b-2 border-blue-400 px-4 py-3 bg-slate-700 hover:bg-slate-600 transition rounded-lg"
                      }
                    >
                      <h3 className="text-blue-500 flex gap-2 items-center leading-4.5">
                        {item.icon}
                        {item.title}
                      </h3>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="fixed left-0 bottom-5 w-full flex justify-center">
            <footer
              className={`${
                isLight ? "text-slate-800" : "text-white"
              } flex w-10/12 gap-4 items-center backdrop-blur-xl bg-slate-600/10 hover:bg-slate-600/20 transition rounded-xl px-8 py-5 font-bold max-w-100 border border-white/20 shadow-lg`}
            >
              <p>RaonyDev ☕</p>
              <div
                className={`${
                  isLight ? "bg-slate-800" : "bg-white"
                } flex-1 h-0.5 rounded-full`}
              ></div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
