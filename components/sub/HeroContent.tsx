"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px]  border border-[#7042f88b] opacity-0 md:opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 hidden md:flex" />
          <h1 className="Welcome-text text-[13px] hidden md:flex">
            Front-End Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-20 md:mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hello! I&apos;m Ayesha a Frontend Developer with experience in Website development. Check out my projects and skills.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href="/about">Learn More!</Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/assets/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}

        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;