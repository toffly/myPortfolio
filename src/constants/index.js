import {
  icon1,
  icon2,
  reactIcon,
  tailwindIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  bootstrapIcon,
  muiIcon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "mywork",
    title: "My Work",
  },
  {
    id: "contact",
    title: "Cotact",
  },
];

export const skillList = [
  {
    id: "skillList01",
    title: "My Main Focus",
    icon: icon1,
    content: [
      
      {
        contentName: "CSS",
        contentIcon: cssIcon,
      },
      {
        contentName: "Javascript",
        contentIcon: javascriptIcon,
      },
      {
        contentName: "React",
        contentIcon: reactIcon,
      },
      {
        contentName: "Tailwind",
        contentIcon: tailwindIcon,
      },
    ],
  },
  {
    id: "skillList02",
    title: "Other Skills",
    icon: icon2,
    content: [
      {
        contentName: "HTML",
        contentIcon: htmlIcon,
      },
      {
        contentName: "Mui",
        contentIcon: muiIcon,
      },
      {
        contentName: "Bootstrap",
        contentIcon: bootstrapIcon,
      },
    ],
  },
];
