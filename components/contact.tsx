"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-gray-700 mt-6 dark:text-white/80">
            Please contact me directly on
          </p>
          <a
            rel="noopener noreferrer"
            className="w-[50%] mt-4 flex items-center justify-center inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            href="https://wa.me/918003316534" target="_blank">
                WhatsApp
          </a>
        </div>

      <SectionHeading>OR</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        contact me at{" "}

        <a className="underline" href="mailto:singhyash3012@gmail.com">
          singhyash3012@gmail.com
        </a>{" "}
        or through this form.
      </p>

    </motion.section>
  );
}
