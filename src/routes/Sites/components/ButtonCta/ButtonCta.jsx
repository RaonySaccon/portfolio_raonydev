import { IoLogoWhatsapp } from "react-icons/io";
import "./ButtonCta.css";

const ButtonCta = ({ text, className, black }) => {
  const defaultClass = `${
    black
      ? "bg-black text-yellow-400 hover:bg-slate-950"
      : "bg-gradient-to-r from-yellow-300 to-yellow-500 text-black"
  } 
  buttonCta 
  px-10 py-4 
  md:px-12 md:py-5 
  flex items-center justify-center gap-3 
  rounded-xl font-bold 
  text-lg md:text-xl 
  hover:scale-95 
  transition-transform duration-300 
  cursor-pointer 
  animate-pulse-soft 
  shadow-[0_0_25px_rgba(255,215,0,0.35)]
  hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] 
  active:scale-90
  w-fit`;

  return (
    <a
      href="https://wa.me/51999355193"
      target="_blank"
      rel="noopener noreferrer"
      className={`orbitron ${defaultClass} ${className}`}
    >
      {text} <IoLogoWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
};

export default ButtonCta;
