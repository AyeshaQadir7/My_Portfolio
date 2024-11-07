"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromTop,
} from "@/utils/motion";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ContactSection = () => {
    const [isDialogOpen, setDialogOpen] = useState(false); // State to manage the alert dialog
    const [isMessageSent, setMessageSent] = useState(false); // State to manage message status

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "ed2feb93-a976-4201-8f0e-62e35512ee8d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        const result = await response.json();
        if (result.success) {
            setMessageSent(true);
            setDialogOpen(true);
            console.log("Email sent successfully:", result);
        } else {
            console.error("Failed to send email:", result);
        }
    }

    return (
        <section className="py-12 px-6 my-10 ">
            <div className="max-w-md mx-auto text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromTop}
                    className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Let&apos;s have a
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Chat{" "}
                        </span>
                    </span>
                </motion.div>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
                >
                    Feel free to reach out with any questions
                </motion.p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4 ">
                    <input
                        type="text"
                        placeholder="Your Name "
                        name="name"
                        className="w-full p-3 rounded focus:outline-none focus:ring  bg-[#0c0920]  border-[2px] border-[#fff] border-opacity-10 text-white"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        className="w-full p-3 rounded focus:outline-none focus:ring text-white bg-[#0c0920]  border-[2px] border-[#fff] border-opacity-10"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        className="w-full p-3 rounded focus:outline-none focus:ring text-white bg-[#0c0920]  border-[2px] border-[#fff] border-opacity-10"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="button-primary w-full px-4 text-center 
     cursor-pointer max-w-[200px] text-sm md:text-base py-3 text-white font-semibold rounded transition-colors duration-300"
                    >
                        Send Message
                    </button>

                </form>

                {/* Alert Dialog */}
                <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>{isMessageSent ? 'Message Sent!' : 'Error'}</AlertDialogTitle>
                            <AlertDialogDescription>
                                {isMessageSent
                                    ? 'Your message has been successfully sent.'
                                    : 'There was an issue sending your message. Please try again.'
                                }
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setDialogOpen(false)}>Close</AlertDialogCancel>
                            <AlertDialogAction onClick={() => setDialogOpen(false)}>OK</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </section>
    );
};

export default ContactSection;
