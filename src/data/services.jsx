import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { FaVideo } from "react-icons/fa";

// TEMP
import { MEDIAS } from "./socialMedia";

export const servicesList = [
  {
    icon: <FaCode />,
    title: "Desenvolvimento de sites",
    description: "Sites rápidos, modernos e feitos para gerar resultados.",
    path: "/sites",
    link: "https://raonydev.com/sites",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design para publicidade",
    description: "Artes para promoções, stories, feeds e materiais comerciais.",
    link: MEDIAS[1].link,
    path: MEDIAS[1].link,
  },
  {
    icon: <SiGoogleads />,
    title: "Impulsionamento com anúncios",
    description: "Gestão de campanhas para alcançar mais clientes.",
    link: MEDIAS[1].link,
    path: MEDIAS[1].link,
  },
  {
    icon: <FaVideo />,
    title: "Vídeos comerciais",
    description: "Vídeos curtos para divulgar produtos e serviços.",
    link: MEDIAS[1].link,
    path: MEDIAS[1].link,
  },
];
