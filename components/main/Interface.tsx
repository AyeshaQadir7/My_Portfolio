"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Interface = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-10 md:mt-20 w-full z-[20]"
        >
            {/* Text Section */}
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-w-lg">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-4 text-4xl md:text-5xl font-bold text-white"
                >
                    <span>
                        Let&apos;s make your interface
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "} Stand Out{" "}
                        </span>
                        in 2025
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-400 my-4 md:my-5"
                >
                    Ready to elevate your digital presence with cutting-edge, trendy designs that captivate? Let&apos;s create something extraordinary.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(1)}
                    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[160px] md:max-w-[200px] text-sm md:text-base"
                >
                    <Link href="/projects">
                        See my projects!
                    </Link>
                </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
            >
                <Image
                    src="/assets/3d_keyboard.png"
                    alt="work icons"
                    height={400}
                    width={400}
                    className="w-3/4 md:w-auto max-w-xs md:max-w-none"
                />
            </motion.div>
        </motion.div>
    );
};

export default Interface;
