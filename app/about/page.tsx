"use client";

import {
    Skills_01,
    Skills_02,
} from "@/constants";
import SkillDataProvider from "@/components/sub/SkillDataProvider";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

function about() {
    return (
        <>

            {/* Hero Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-24 md:mt-16 w-full z-[20]"
            >
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-4 mt-4 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                        <span>
                            Who
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                am i ?{" "}
                            </span>
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
                    >
                        I&apos;m Ayesha Abdul Qadir, a dedicated Front-end Web Developer specializing in creating sleek, responsive websites. I combine clean design with powerful functionality, ensuring every project is both visually engaging and user-friendly. I’m here to help you make a lasting impression online.
                    </motion.p>
                    <motion.div
                        variants={slideInFromLeft(1)}
                        className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base"
                    >
                        <Link href="/projects">
                            See my projects!
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
                >
                    <Image
                        src="/assets/robot.png"
                        alt="robot"
                        height={400}
                        width={400}
                        className="w-72 h-72 md:w-[550px] md:h-[550px] brightness-90"
                    />
                </motion.div>
            </motion.div>

            {/* Skills Section */}

            <div
                id="skills"
                className="flex flex-col items-center justify gap-3 h-full relative overflow-hidden pb-40 md:pb-80 py-10 md:py-20"
                style={{ transform: "scale(0.9)" }}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-4 md:gap-6 mt-4 mb-6 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
                >
                    <span>
                        My
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Skills{" "}
                        </span>
                    </span>
                </motion.div>

                <div className="flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center">
                    {Skills_01.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-3 md:gap-5 items-center">
                    {Skills_02.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default about;
