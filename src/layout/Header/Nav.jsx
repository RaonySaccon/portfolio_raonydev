import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

export const navItems = [
  {
    title: "Home",
    path: "#home",
    icon: <FaHome />,
    active: true,
  },
  {
    title: "Sobre mim",
    path: "#sobre",
    icon: <FaUser />,
  },
  {
    title: "Serviços",
    path: "#serviços",
    icon: <MdHomeRepairService />,
  },
  {
    title: "Projetos",
    path: "#projetos",
    icon: <AiOutlineProject />,
  },
];
