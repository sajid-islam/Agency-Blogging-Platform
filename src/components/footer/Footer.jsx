import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between mb-5">
            <p>©{new Date().getFullYear()} Sajid. All right reserved</p>
            <div className="flex items-center gap-2">
                <Image
                    className="hover:cursor-pointer opacity-85"
                    src="/icons/facebook.png"
                    width={15}
                    height={15}
                    alt="sajids facebook link"
                />
                <Image
                    className="hover:cursor-pointer opacity-85"
                    src="/icons/twitter.png"
                    width={15}
                    height={15}
                    alt="sajids facebook link"
                />
                <Image
                    className="hover:cursor-pointer opacity-85"
                    src="/icons/instagram.png"
                    width={18}
                    height={18}
                    alt="sajids facebook link"
                />
                <Image
                    className="hover:cursor-pointer opacity-85"
                    src="/icons/youtube.png"
                    width={18}
                    height={18}
                    alt="sajids facebook link"
                />
            </div>
        </footer>
    );
};

export default Footer;
