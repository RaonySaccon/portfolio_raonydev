import { IoLogoWhatsapp } from "react-icons/io";
import "./ButtonCta.css";

const ButtonCta = ({ text, className, black }) => {
  const defaultClass = `${
    black
      ? "bg-black text-yellow-400 hover:bg-slate-950"
      : "bg-gradient-to-r from-yellow-300 to-yellow-500 text-black"
  } buttonCta px-8 py-2 flex items-center gap-2 rounded w-fit hover:scale-95 transition cursor-pointer animate-pulse-soft shadow-[0_0_20px_rgba(255,215,0,0.25)]`;

  return (
    <a
      href="https://wa.me/51999355193"
      target="_blank"
      rel="noopener noreferrer"
      className={`orbitron ${defaultClass} ${className}`}
    >
      {text} <IoLogoWhatsapp className="text-xl" />
    </a>
  );
};

export default ButtonCta;
