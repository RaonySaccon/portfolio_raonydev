import "./Sites.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./layout/Header/Header";
import Hero from "./sections/Hero/Hero";
import Beneficios from "./sections/Beneficios/Beneficios";
import Processo from "./sections/Processo/Processo";
import Cta from "./sections/Cta/Cta";
import Vantagens from "./sections/Vantagens/Vantagens";
import OfertaEspecial from "./sections/OfertaEspecial/OfertaEspecial";
import Depoimentos from "./sections/Depoiments/Depoiments";
import ProvaSocial from "./sections/ProvaSocial/ProvaSocial";
import FAQ from "./sections/Faq/Faq";
import Footer from "./layout/Footer/Footer";
import WhatsappBtn from "../../components/WhatsappBtn/WhatsappBtn";

const Sites = () => {
  function Margin({ children }) {
    return (
      <div className="m-auto w-11/12 sm:w-10/12 md:w-9/12">{children}</div>
    );
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="sites-section bg-black">
      <Header />
      <Margin>
        <Hero />
        <Beneficios />
        <ProvaSocial />
        <OfertaEspecial />
        <Processo />
      </Margin>
      <Depoimentos />
      <Margin>
        <Vantagens />
      </Margin>
      <Cta />
      <Margin>
        <FAQ />
      </Margin>
      <Footer />
      <WhatsappBtn />
    </main>
  );
};

export default Sites;
