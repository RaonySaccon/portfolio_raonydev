import { IoLogoWhatsapp } from "react-icons/io";

const ButtonCta = ({ text, className }) => {
  return (
    <button
      className={`${className} bg-yellow-400 px-8 py-2 text-black flex items-center gap-2 rounded w-fit`}
    >
      {text} <IoLogoWhatsapp />
    </button>
  );
};

export default ButtonCta;
