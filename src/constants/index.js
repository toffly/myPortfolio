import { icon1, icon2, reactIcon, tailwindIcon, htmlIcon, cssIcon, javascriptIcon, bootstrapIcon, muiIcon } from "../assets";

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
    title: "Programming Languages",
    icon: icon1,
    content: [
      {
        contentName: "HTML",
        contentIcon: htmlIcon,
      },
      {
        contentName: "CSS",
        contentIcon: cssIcon,
      },
      {
        contentName: "Javascript",
        contentIcon: javascriptIcon,
      },
    ],
  },
  {
    id: "skillList02",
    title: "Front-End Technologies",
    icon: icon2,
    content: [
      {
        contentName: "React",
        contentIcon: reactIcon,
      },
      {
        contentName: "Tailwind",
        contentIcon: tailwindIcon,
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
