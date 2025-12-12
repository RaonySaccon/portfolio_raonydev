import { motion } from "framer-motion";
import Gradient from "../../components/Gradient/Gradient";
import Strong from "../../components/Strong/Strong";
import ButtonCta from "../../components/ButtonCta/ButtonCta";

const OfertaEspecial = () => {
  return (
    <section
      className="relative py-24 text-center overflow-hidden bg-neutral-950 text-white"
      id="oferta-especial"
    >
      <motion.div
        className="absolute inset-0 opacity-30 bg-gradient-to-r from-green-400/20 via-yellow-500/10 to-transparent blur-3xl"
        animate={{ x: ["0%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Veja como seu site ficaria — <Gradient>100% grátis</Gradient>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg opacity-80 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Antes de qualquer pagamento, criamos uma prévia personalizada do seu
          site.
          <br />
          Você só paga se quiser continuar. Simples, transparente e sem risco.
        </motion.p>

        <motion.div
          className="space-y-3 mb-10 text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-green-400">✅ Prévia gratuita e personalizada</p>
          <p className="text-yellow-400">
            💰 Sites completos por menos de <Strong>R$ 500</Strong>
          </p>
        </motion.div>

        {/* Botão principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ButtonCta text="PRÉVIA GRATUITA" className="mx-auto" />
        </motion.div>

        {/* Frase final */}
        <motion.p
          className="mt-10 text-sm opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Oferta válida por tempo limitado. Garanta sua vaga hoje mesmo.
        </motion.p>
      </div>
    </section>
  );
};

export default OfertaEspecial;
