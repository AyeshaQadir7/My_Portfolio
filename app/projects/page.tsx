"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
import {
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "InnoWeb",
        imageSrc: "/assets/innoweb.png",
        description: "Web design agency website",
        demoLink: "https://innoweb-ayeshaqadir.vercel.app/",
        githubLink: "https://github.com/AyeshaQadir7/InnoWeb"

    },
    {
        title: "Bnaquee",
        imageSrc: "/assets/banquee.png",
        description: "Saas & bank website",
        demoLink: "https://banquee-ayeshaqadir.vercel.app/",
        githubLink: "https://github.com/AyeshaQadir7/Banquee-SaaS-Bank-Website"
    },
    {
        title: "Resume Builder",
        imageSrc: "/assets/resumebuilder.png",
        description: "Downloadable resume builder",
        demoLink: "https://hackathonminusonemilestone05.vercel.app/",
        githubLink: "https://github.com/AyeshaQadir7/Hackathon_minus_one"
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const ProjectsSection = () => {
    return (
        <section className="flex flex-col items-center py-16  text-white px-6 md:mt-6">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromTop}
                className="flex flex-col gap-4 mt-8 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
                <span>
                    The Works Closest to
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        My Heart{" "}
                    </span>
                </span>
            </motion.div>


            <div className="flex flex-wrap gap-6 justify-center mt-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10 rounded-lg shadow-lg overflow-hidden w-[20rem]"
                    >
                        <Image
                            src={project.imageSrc}
                            alt={project.title}
                            width={256}
                            height={200}
                            className="w-full h-48 object-cover"
                            quality={100}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-400 mb-6">{project.description}</p>

                            {project.demoLink && (
                                <Link href={project.demoLink} target="_blank" className="py-2 px-4 mr-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base">
                                    Demo
                                </Link>
                            )}

                            {project.githubLink && (
                                <Link href={project.githubLink} target="_blank" className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base">
                                    GitHub
                                </Link>
                            )}

                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default ProjectsSection;

