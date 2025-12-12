// libs
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-slate-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          © {new Date().getFullYear()} RaonyDev — Artes para publicidade
        </div>
        <div>Produzido por RaonyDev · Entrega rápida · Mais clientes</div>
      </div>
    </footer>
  );
}
