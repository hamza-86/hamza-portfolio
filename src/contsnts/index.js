import cpp from "../assets/tech/cpp.png"
import html from "../assets/tech/html.png"
import css from "../assets/tech/css.png"
import javascript from "../assets/tech/javascript.png"
import reactjs from "../assets/tech/reactjs.png"
import redux from "../assets/tech/redux.png"
import tailwind from "../assets/tech/tailwind.png"
import nodejs from "../assets/tech/nodejs.png"
import mongodb from "../assets/tech/mongodb.png"
import figma from "../assets/tech/figma.png"
import git from "../assets/tech/git.png"
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"
import backend from "../assets/backend.png"
import weather from "../assets/project/weather.png"
import amazon from "../assets/project/Amazon.png"
import netflix from "../assets/project/netflix.png"
import textMate from "../assets/project/textMate.png"
import CampusConnect from "../assets/project/CampusConnect.jpg"
import portfolio from "../assets/project/portfolio.png"
import edTech from "../assets/project/Edtechh.jpg"
import todo from "../assets/project/todoo.jpg"
import shopzy from "../assets/project/shopzy.jpg"
 

export const navLinks = [
    { id: "about", title: "About" },
    { id: "project", title: "Projects" },  // FIXED
    { id: "contact", title: "Contact" },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "cpp",
    icon: cpp,
  },
]

export const services = [
  {
    title: "Web",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  }
];


export const projects = [
  {
    name: "E-Learning Platform",
    description: " Built a web app where instructors create courses and students enroll, featuring secure authentication and payments. Implemented JWT-based login, OTP verification, and role-based access control. Integrated Razorpay for payments and Cloudinary for media uploads.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: edTech,
    sourceCodeLink: "#",
  },
  {
    name: "CampusConnect",
    description:" Developed a platform enabling seniors to share placement insights and knowledge, while juniors can seek guidance on study-related queries. Implemented features like blog posting, commenting, and interaction between users to foster collaboration and engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: CampusConnect
    ,
    sourceCodeLink: "#",
  },
  {
    name: "TextMate",
    description: "Developed a full-stack web application that allows users to manage personal books and notes, with secure user authentication and a responsive user interface. Implemented an intuitive design and optimized performance for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: textMate,
    sourceCodeLink: "#",
  },
  {
    name: "My Portfolio",
    description:
      "Developed a personal portfolio website to showcase my skills, projects, and achievements. Designed with a responsive layout for seamless viewing on all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio ,
    sourceCodeLink: "#",
  },

  {
    name: "Weather App",
    description:
      "Designed and developed a dynamic Weather Web App using modern web technologies. The app provides real-time weather updates and forecasts by integrating with a weather API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    sourceCodeLink: "#",
  },

  {
    name: "Amazon Clone",
    description:
      "Developed a responsive e-commerce web application replicating core features of Amazon, including product browsing, search functionality, a dynamic shopping cart, and interactive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    sourceCodeLink: "#",
  },

  {
    name: "Todo App",
    description:
      "A simple and intuitive Todo Application built with React and Context API to help users efficiently manage their daily tasks. This app allows users to create, update, delete, and mark tasks as completed with a clean and responsive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "contextAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    sourceCodeLink: "#",
  },

  {
    name: "Shopzy-Shopping Cart",
    description:
      "Shopzy is a modern shopping cart application developed using React, Redux, and Tailwind CSS. It is designed to provide users with a seamless and intuitive shopping experience, responsiveness, and ease of use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopzy,
    sourceCodeLink: "#",
  },
  
];