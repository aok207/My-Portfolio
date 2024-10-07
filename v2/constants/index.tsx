import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiDjango,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiPython,
  SiFlask,
  SiGithub,
  SiFacebook,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

export const navbar = [
  {
    icon: <SiGithub />,
    href: "https://github.com/aok207",
  },
  {
    icon: <SiFacebook />,
    href: "https://www.facebook.com/aungookhant.aung/",
  },
];

export const dock: { text: string; href: string }[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];

export const projects = [
  {
    image: "/img/pulse-chat.png",
    title: "Pulse Chat",
    description: "A real time chat application",
    link: "https://pulse-chat-b5by.onrender.com",
    techStack: [
      <SiReact key={"react-0"} />,
      <SiNodedotjs key="node-1" />,
      <SiMongodb key="mongodb-2" />,
      <SiExpress key="express-3" />,
      <SiTailwindcss key="tailwind-4" />,
      <SiTypescript key="ts-5" />,
      <SiSocketdotio key="socketio-6" />,
    ],
  },
  {
    image: "/img/suggest_movie.png",
    title: "Suggest A Movie",
    description: "A website that will recommend movies based on your taste",
    link: "https://suggestamovieforme-com.onrender.com",
    techStack: [<SiPython key={"python-0"} />, <SiFlask key={"flask-1"} />],
  },
  {
    image: "/img/project2.png",
    title: "URL shortening platform",
    description: "A url shortening platform like bit.ly",
    link: "https://github.com/aok207/CS50x-Web-Final-Project",
    techStack: [
      <SiPython key="python-1" />,
      <SiDjango key="django-2" />,
      <SiSqlite key="sqlite-3" />,
    ],
  },

  {
    image: "/img/ecommerce.png",
    title: "E-Commerce Website",
    description:
      "A fully featured e-commerce webapp including an admin dashboard",
    link: "https://github.com/aok207/E-commerce-website",
    techStack: [
      <SiLaravel key="laravel-0" />,
      <SiReact key="react-1" />,
      <SiTailwindcss key="tailwind-2" />,
      <SiMysql key="mysql-3" />,
    ],
  },
];
