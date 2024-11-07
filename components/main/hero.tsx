import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-40%] h-full w-full left-0 z-[1] object-cover brightness-95"
            >
                <source src="/assets/blackhole.webm" type="video/webm" />
            </video>

            <HeroContent />
        </div>
    );
};

export default Hero;
