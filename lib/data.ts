import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vaani from "@/public/vaani.png";
import srgs from "@/public/srgs.png";
import menstuff from "@/public/menstuff.png";
import gapshap from "@/public/GapShap.png";
import webtech from "@/public/webtechware.png";
import dentalClinic from "@/public/dentalclinic.png";
import cartapp from "@/public/cartapp.png";
import driveClone from "@/public/driveClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
    exptitle: "Worked as a Front-End Developer at Cloudify.biz",
    location: "Cloudify , Denmark",
    description:
      'I have worked there as a Front-End Developer Inter for 4 months appx., managing their SaaS applications and building new features, I have worked over monorepo architecture, and have used technologies like React, Redux, Next.js, Tailwind CSS, and TypeScript etc.',
    icon: React.createElement(CgWorkAlt),
    date: "6th Feb 2025 - 20th June 2025",
  },
   {
    exptitle: "100xdev Cohort",
    location: "Harkirat Singh",
    description:
      "Joined this cohort to learn Devops and Web3 Technologies. [Ongoing]",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2025",
  },
  {
    exptitle: "Freelancing as a Full-Stack Developer",
    location: "Freelancer",
    description:
      "I have worked as a Freelancer for almost 2 year , during this time period i have worked on various projects, developed websites for clients from all fields like e-commerce, blogging, portfolio, astrologers-website etc.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    exptitle: "BackEnd Domination Course",
    location: "Sheryians Coding School",
    description:
      "I have gained knowledge about backend technologies like - Node.js, Express, MongoDB, GoogleOAuth, JWT, Bcrypt, Passport, Nodemailer, middlewares, PaymentGateways etc. in this course.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug, 2024 - Nov, 2024",
  },
  {
    exptitle: "FrontEnd Domination Course",
    location: "Sheryians Coding School",
    description:
      "I have sharpen my skills like - GSAP, Freamer Motion, Scrolltrigger, Three.js etc. within 3 months by covering this course",
    icon: React.createElement(LuGraduationCap),
    date: "Jan, 2024 - April,2024",
  },
  {
    exptitle: "MERN Stack development Course",
    location: "Masai School",
    description:
      "I have learned MERN Stack development from Masai School. It was a 12 month course.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept,2023 - Sept,2024",
  },
] as const;

export const projectsData = [
    {
    title: "Men-Stuff (Under Development)",
    description:
      "This is an Ecommerce Website compleately developed by me, It is a website for a company i.e MenStuff, they basically deals in Men's Clothing and Accessories. It has all the features of an Ecommerce Website from User SignIn/SignUp to Admin Dashboard with integrated PaymentGateway System",
    tags: ["React", "Tailwind", "Framer-Motion", "Shadcn" , "Express", "Node.js", "MongoDB", "JWT", "GoogleOAuth", "Passport.js", "Razorpay"],
    imageUrl: menstuff,
    hosturl:"https://menstuff.vercel.app"
  },
  {
    title: "Billing App (Under Development)",
    description:
      "This is an Ecommerce Website compleately developed by me, It is a website for a company i.e MenStuff, they basically deals in Men's Clothing and Accessories. It has all the features of an Ecommerce Website from User SignIn/SignUp to Admin Dashboard with integrated PaymentGateway System",
    tags: ["React", "Tailwind", "Framer-Motion", "Shadcn" , "Express", "Node.js", "MongoDB", "JWT", "Razorpay", "BarcodeScannerMachine"],
    imageUrl: cartapp,
    hosturl:"https://cart-app-navy.vercel.app/"
  },
  {
    title: "Vaani Tech",
    description:
      "I have created this Website for a new Startup, I have used ReactJs, GSAP, Framer Motion, Three.js etc. This project showcase my Frontend Development Skills.",
    tags: ["React", "Three.js", "Framer-Motion", "GSAP", "Tailwind"],
    imageUrl: vaani,
    hosturl:"https://vaanitech.in"
  },
  {
    title: "SR Graphics & Signages",
    description:
      "This application is purely based on React Js , It is a website for a company i.e SR Graphics And Signages, they basically deals in Signages works.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion", "GSAP"],
    imageUrl: srgs,
    hosturl:"https://srgraphicsandsignages.in"
  },
  {
    title: "City Dental Clinic (Under Development)",
    description:
      "This is Complete Full Stack Project , with Appointment Booking System And Contact Form!, We have used ReactJs, Shadcn, Tailwind , Node, Express etc.",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn", "GSAP", "Express", "Node", "MongoDB", "Nodemailer"],
    imageUrl: srgs,
    hosturl:"https://city-dental-clinic.vercel.app"
  },
  {
    title: "Web Tech Ware",
    description:
      "This is a website for a website development company , still under development phase will be available soon.",
    tags: ["React", "Tailwind", "Framer","Express", "Node", "MongoDB"],
    imageUrl: webtech,
    hosturl:"https://webtechware.vercel.app"
  },
  {
    title: "Drive Clone",
    description:
      "This is a Google Drive Clone, where user can upload their files and can view them in their dashboard, I have used ReactJs for frontend and NodeJs, Express, MongoDB for backend.",
    tags: ["React", "Tailwind", "Framer","Express", "Node", "MongoDB", "Cloudinary", "Multer", "Redis"],
    imageUrl: driveClone,
    hosturl:"https://google-drive-rosy.vercel.app"
  },
  {
    title: "Gap Shap",
    description:
      "This is a Chat Application purely developed by using MERN Stack with Socket.io",
    tags: ["React", "Tailwind", "Framer","Socket.io","Express", "Node", "MongoDB"],
    imageUrl: gapshap,
    hosturl:"https://gap-shap-fe.vercel.app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "React Native",
  "Expo",
  "Redux",
  "Next.js",
  "Graphql",
  "tensorflow.js",
  "Chakra UI",
  "Material UI",
  "Shadcn UI",
  "Sass",
  "AWS",
  "Firebase",
  "Docker",
  "Vercel & Netlify",
  "Node.js",
  "Express",
  "MongoDB",
  "Passport.js",
  "GoogleOAuth",
  "Socket.io",
  "WebDrivers",
  "Selenium",
  "Git",
  "Tailwind",
  "Prisma & ORMs",
  "GraphQL",
  "GSAP",
  "Postgres & SQL Databases",
  "Python",
  "Three.js",
  "Framer Motion",
] as const;
