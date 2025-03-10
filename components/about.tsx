"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have started my coding journey in 2022, and started to learn{" "}
        <span className="font-medium">PYTHON</span> but after that I started
        to learn Javascript as Somehow i have build my intrest in web development.
        So, I decided to sharpen my skills for Programming and Web-Development
        & then I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        </p>
        <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is that,
        I like to develop websites specially those available on
        <span className="font-medium">AWWWARDS</span> websites which uses GSAP,
        Three.js etc to build a smooth user experience and highly attractive animated
        websites.My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>,  I enjoy{" "}
        <span className="font-medium">discovering new things in this field</span>.
        I am currently learning about{" "} <span className="font-medium">devops and web3</span>.
      </p>
    </motion.section>
  );
}
