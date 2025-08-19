import { FaWhatsapp } from "react-icons/fa";

const ButtonCta = ({ text, className }) => {
  return (
    <a
      href="https://wa.me/5551999355193"
      target="_blank"
      className={`${className} flex items-center gap-2 px-10 py-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white w-fit rounded-3xl font-bold hover:to-blue-700 hover:from-blue-700 hover:scale-95 hover:outline-1 outline-blue-600 outline-offset-2 cursor-pointer duration-300`}
    >
      {text}
      <FaWhatsapp />
    </a>
  );
};

export default ButtonCta;
