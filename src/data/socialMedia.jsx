import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const wame = "https://wa.me/51999355193";
export const MEDIAS = [
  {
    icon: <FaRegWindowMaximize />,
    title: "Meu site",
    link: "https://raonydev.com",
    highlight: false,
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    link: wame,
    highlight: true,
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    link: "https://instagram.com/raonydev",
    highlight: true,
  },
  {
    icon: <FaTiktok />,
    title: "Tiktok",
    link: "https://tiktok.com/@raonydev",
    highlight: false,
  },
  {
    icon: <FaGithub />,
    title: "Github",
    link: "https://github.com/RaonySaccon",
    highlight: false,
  },
  {
    icon: <FaDiscord />,
    title: "Discord",
    link: "https://discord.com/users/549470481858822145",
    highlight: true,
  },
];
