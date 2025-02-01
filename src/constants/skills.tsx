import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiThreedotjs,
  SiFigma,
  SiShopify,
  SiFramer,
  SiWebflow,
  SiGreensock,
} from "react-icons/si";

interface Skill {
  id: string;
  title: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  {
    id: "html",
    title: "HTML",
    icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" />,
  },
  {
    id: "css",
    title: "CSS",
    icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />,
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" />,
  },
  {
    id: "react",
    title: "React",
    icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    id: "threejs",
    title: "Three.js",
    icon: <SiThreedotjs className="w-8 h-8 text-[#000000] dark:text-white" />,
  },
  {
    id: "figma",
    title: "Figma",
    icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
  },
  {
    id: "git",
    title: "Git",
    icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" />,
  },
  {
    id: "github",
    title: "GitHub",
    icon: <FaGithub className="w-8 h-8 text-[#181717] dark:text-white" />,
  },
  {
    id: "gsap",
    title: "GSAP",
    icon: <SiGreensock className="w-8 h-8 text-[#88CE02]" />,
  },
  {
    id: "shopify",
    title: "Shopify",
    icon: <SiShopify className="w-8 h-8 text-[#7AB55C]" />,
  },
  {
    id: "framer",
    title: "Framer",
    icon: <SiFramer className="w-8 h-8 text-[#0055FF]" />,
  },
  {
    id: "webflow",
    title: "Webflow",
    icon: <SiWebflow className="w-8 h-8 text-[#4353FF]" />,
  },
];

export default skills;
