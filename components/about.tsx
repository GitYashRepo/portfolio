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
  I began my coding journey in 2022 with{" "}
  <span className="font-medium">Python</span>, but soon developed a strong
  interest in JavaScript and web development. To sharpen my programming and
  web development skills, I enrolled in a coding bootcamp and gained hands-on
  experience in{" "}
  <span className="font-medium">full-stack web development</span>.
</p>

<p className="mb-3">
  <span className="italic">My favorite part of programming</span> is building
  visually engaging websites, especially those featured on
  <span className="font-medium"> AWWWARDS</span>. I enjoy working with GSAP
  and Three.js to create smooth, immersive user experiences with stunning
  animations. My core stack includes{" "}
  <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>.
  Additionally, I am proficient in TypeScript and Prisma and always eager to
  explore new technologies.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy{" "}
  <span className="font-medium">exploring new advancements in the field</span>.
  Currently, I am expanding my knowledge in{" "}
  <span className="font-medium">DevOps and Web3</span>.
</p>

    </motion.section>
  );
}
