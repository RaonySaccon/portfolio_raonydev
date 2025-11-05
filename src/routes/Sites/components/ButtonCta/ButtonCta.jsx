import { IoLogoWhatsapp } from "react-icons/io";

const ButtonCta = ({ text, className, black }) => {
  const defaultClass = `${
    black ? "bg-black text-yellow-400 hover:bg-slate-950" : "bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-500 text-black"
  } px-8 py-2 flex items-center gap-2 rounded w-fit hover:scale-95  transition cursor-pointer`;
  return (
    <a href="https://wa.me/51999355193" target="_blank" className={`orbitron ${defaultClass} ${className}`}>
      {text} <IoLogoWhatsapp />
    </a>
  );
};

export default ButtonCta;
