import {
    Skills_01,
    Skills_02,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";


const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-50 py-20"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText />


            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
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
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
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

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-40 absolute flex items-center justify-center bg-cover brightness-60">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/assets/cards-video.webm"
                    />

                </div>
            </div>
        </section>
    );
};

export default Skills;