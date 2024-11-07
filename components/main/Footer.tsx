import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#03001417] mt-44 py-4 text-center border-t border-[#2A0E61]">
            <p className="text-gray-700">&copy; 2025 Ayesha Abdul Qadir. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">

                <Link href="https://www.linkedin.com/in/ayesha-a-qadir-30a0a72b9/" target="_blank">
                    <Image
                        src="/assets/Linkedin.png"
                        width={28}
                        height={28}
                        alt="linkedin"
                    />
                </Link>

                <Link href="https://github.com/AyeshaQadir7" target="_blank">
                    <Image
                        src="/assets/Github.png"
                        width={28}
                        height={28}
                        alt="linkedin"
                    />
                </Link>
                <Link href="mailto:ayeshaabdulqadir7@gmail.com" target="_blank">
                    <Image
                        src="/assets/email.png"
                        width={28}
                        height={28}
                        alt="linkedin"
                    />
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
