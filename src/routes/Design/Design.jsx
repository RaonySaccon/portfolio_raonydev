// libs
import { motion } from "framer-motion";
import Aos from "aos";
import { useEffect } from "react";

// sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Offers from "./sections/Offers";
import Differentials from "./sections/Differentials";
import Depoiments from "./sections/Depoiments";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";

// components
import WhatsappBtn from "../../components/WhatsappBtn/WhatsappBtn";

export default function LPDesignPublicidade() {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Hero />
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <About />
        <Offers />
        <Differentials />
        <Depoiments />
        <Cta />
        <Footer />
        <WhatsappBtn />
      </main>
    </div>
  );
}
