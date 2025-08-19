import React from "react";
import { MEDIAS } from "../../data/socialMedia";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-10 text-white text-center md:flex px-6 md:justify-around md:px-20 items-center">
      <div className="md:text-left">
        <h3 className="font-bold text-4xl">RaonyDev</h3>
        <p className="opacity-70">Desenvolvedor Web</p>
      </div>
      <div className="mt-6">
        <p className="opacity-70 font-bold">
          © 2025 RaonyDev. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-2xl justify-center mt-6 md:justify-end md:mt-2">
          {MEDIAS.map((item) => (
            <a href={item.link} target="_blank">
              <div className="bg-slate-700 rounded p-1 text-blue-200 hover:text-white hover:bg-slate-800 transition">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
