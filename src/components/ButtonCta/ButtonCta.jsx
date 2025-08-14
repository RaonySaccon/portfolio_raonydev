import { FaWhatsapp } from "react-icons/fa";

const ButtonCta = ({ text, className }) => {
  return (
    <button
      className={`${className} flex items-center gap-2 px-10 py-2 bg-blue-700 text-white w-fit rounded-3xl font-bold`}
    >
      {text}
      <FaWhatsapp />
    </button>
  );
};

export default ButtonCta;
