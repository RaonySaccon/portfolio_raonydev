import "./Sites.css";

import Hero from "./sections/Hero/Hero";
import Beneficios from "./sections/Beneficios/Beneficios";
import Processo from "./sections/Processo/Processo";
import Cta from "./sections/Cta/Cta";
import Vantagens from "./sections/Vantagens/Vantagens";
import FAQ from "./sections/Faq/Faq";

const Sites = () => {
  function Margin({ children }) {
    return (
      <div className="m-auto w-11/12 sm:w-10/12 md:w-9/12">{children}</div>
    );
  }
  return (
    <main className="sites-section bg-black">
      <Margin>
        <Hero />
        <Beneficios />
        <Processo />
      </Margin>
      <Cta />
      <Margin>
        <Vantagens />
        <FAQ />
      </Margin>
    </main>
  );
};

export default Sites;
