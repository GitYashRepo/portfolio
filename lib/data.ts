import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import smirImg from "@/public/Smir.png";
import notesApp from "@/public/notesApp.png";
import dentist from "@/public/Dentist.png";
import taxy from "@/public/TaxyApp.png";
import omegle from "@/public/omegle.png";

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
    exptitle: "Working as a Front-End Developer at Cloudify.biz (Intern)",
    location: "Cloudify , Denmark",
    description:
      'I am working as a front-end developer at Cloudify.biz. I am working on React, Next.js, TypeScript, Tailwind etc.',
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - June 2025",
  },
   {
    exptitle: "100xdev Cohort",
    location: "Harkirat Singh",
    description:
      "Joined this cohort to learn Devops and Web3 Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2025",
  },
  {
    exptitle: "Freelancing as a Full-Stack Developer",
    location: "Freelancer",
    description:
      "I have worked as a Freelancer for almost 1 year , during this time period i have worked on various projects, developed websites for clients from all fields like e-commerce, blogging, portfolio, astrologers-website etc.",
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
    title: "SMIR Ecommerce",
    description:
      "I worked as a full-stack developer on this startup project for 6 months.",
    tags: ["React", "MongoDB", "Tailwind","Express"],
    imageUrl: smirImg,
  },
  {
    title: "Notes App",
    description:
      "Build a Notes App as i am practicing my TypeScript Skills",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: notesApp,
  },
  {
    title: "Omegle App Clone",
    description:
      "I have build this website to practice socket.io and webRTC",
    tags: ["React", "TypeScript", "Socket.io", "WebRTC" , "Exress", "Node.js"],
    imageUrl: omegle,
  },
  {
    title: "Dentists Website",
    description:
      "This is my Freelance Work, I have developed this website for a dentist, used Google Sheet for the contact form",
    tags: ["React", "Tailwind", "Framer","GoogleSheet","GSAP"],
    imageUrl: dentist,
  },
  {
    title: "Taxy App",
    description:
      "this project showcase my profenciacy MERN Stack.",
    tags: ["React", "Express", "MongoDB", "Node.js", "GoogleOAuth","JWT", "Bcrypt"],
    imageUrl: taxy,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
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
  "Redux",
  "GraphQL",
  "GSAP",
  "Postgres & SQL Databases",
  "Python",
  "Three.js",
  "Framer Motion",
] as const;
