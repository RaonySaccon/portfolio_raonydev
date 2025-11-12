import { BiHome, BiStar } from "react-icons/bi"
import { FaQ } from "react-icons/fa6"
import { GrContact } from "react-icons/gr"
import { MdMiscellaneousServices } from "react-icons/md";


export const navList = [
  {
    icon: <BiHome />,
    title: "Ínicio",
    path: "home",
  },
  {
    icon: <BiStar />,
    title: "Benefícios",
    path: "benefícios",
  },
  {
    icon: <MdMiscellaneousServices />,
    title: "Como funciona",
    path: "processo",
  },
  {
    icon: <GrContact />,
    title: "Contato",
    path: "contato",
  },
  {
    icon: <FaQ />,
    title: "FAQ",
    path: "faq",
  }
]