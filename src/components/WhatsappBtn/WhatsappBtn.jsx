import { FaWhatsapp } from "react-icons/fa";

const WhatsappBtn = () => {
  return (
    <a
      href="https://wa.me/5551999355193"
      target="_blank"
      className="text-5xl text-white bg-green-500 p-2 md:p-3 fixed bottom-5 right-5 rounded-full z-50 md:text-6xl hover:scale-95 transition hover:bg-green-400"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappBtn;
