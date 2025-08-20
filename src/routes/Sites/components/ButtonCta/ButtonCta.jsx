import { IoLogoWhatsapp } from "react-icons/io";

const ButtonCta = ({ text, className, black }) => {
  const defaultClass = `${
    black ? "bg-black text-yellow-400" : "bg-yellow-400 text-black"
  } px-8 py-2 flex items-center gap-2 rounded w-fit`;
  return (
    <button className={`${defaultClass} ${className}`}>
      {text} <IoLogoWhatsapp />
    </button>
  );
};

export default ButtonCta;
