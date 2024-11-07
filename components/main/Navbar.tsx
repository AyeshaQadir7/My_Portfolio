import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from "lucide-react";



const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-8 overflow-x-hidden overflow-y-hidden flex justify-between">

            <div>

                <Link
                    href="/"
                    className=" h-auto w-auto flex md:hidden "
                >
                    <Image
                        src="/assets/NavLogo.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="cursor-pointer hover:animate-slowspin"

                    />

                </Link>

            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex justify-end items-center my-5">


                <Sheet>

                    <SheetTrigger className="text-white text-3xl"><AlignRight className="text-3xl" /></SheetTrigger>
                    <SheetContent className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">

                        <SheetHeader>

                            <SheetTitle>
                                <SheetClose asChild>
                                    <Link
                                        href="/"
                                        className="h-auto w-auto flex flex-row items-center "
                                    >
                                        <Image
                                            src="/assets/NavLogo.png"
                                            alt="logo"
                                            width={100}
                                            height={100}
                                            className="cursor-pointer hover:animate-slowspin"

                                        />

                                        <span className="font-normal ml-[10px] text-gray-300">
                                            Ayesha Abdul Qadir
                                        </span>


                                    </Link>
                                </SheetClose>
                            </SheetTitle>

                            <SheetDescription>
                                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">

                                    <SheetClose asChild>
                                        <Link href="/about">About</Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link href="/projects" className="cursor-pointer">
                                            Projects
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link href="/contact" className="cursor-pointer">
                                            Contact
                                        </Link>
                                    </SheetClose>
                                    <div className="flex flex-row gap-5">
                                        {Socials.map((social) => (

                                            <Link href={social.href} key={social.name} target="_blank" >

                                                < Image
                                                    src={social.src}
                                                    alt={social.name}
                                                    key={social.name}
                                                    width={30}
                                                    height={30}
                                                    className="cursor-pointer"
                                                />
                                            </Link>
                                        ))}
                                    </div>

                                </div>


                            </SheetDescription>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {/* --------------------- */}



            <div className="hidden md:flex w-full h-full  flex-row items-center justify-between m-auto px-[10px]">
                <Link
                    href="/"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/assets/NavLogo.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="cursor-pointer hover:animate-slowspin"

                    />

                    <span className="font-normal ml-[10px] hidden md:block text-gray-300">
                        Ayesha Abdul Qadir
                    </span>
                </Link>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <Link href="/about">About</Link>

                        <Link href="/projects" className="cursor-pointer">
                            Projects
                        </Link>

                        <Link href="/contact" className="cursor-pointer">
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <Link href={social.href} key={social.name} target="_blank" >

                            < Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={30}
                                height={30}
                                className="cursor-pointer"
                            />
                        </Link>
                    ))}
                </div>
            </div >
        </div >


    );
};

export default Navbar;