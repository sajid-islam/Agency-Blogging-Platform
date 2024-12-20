import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-semibold text-gray-text">
                Choose a gallery
            </h3>
            <div className="flex gap-10 mt-5">
                <Link
                    className="relative w-[300px] h-[400px] text-white hover:text-primary-500 p-10 border-4 rounded-sm border-black bg-[url('/images/application.jpg')] bg-cover bg-no-repeat"
                    href="/portfolio/application"
                >
                    <span className="text-2xl font-bold absolute right-3 bottom-3">
                        Application
                    </span>
                </Link>
                <Link
                    className="relative w-[300px] h-[400px] text-white hover:text-primary-500 p-10 border-4 rounded-sm border-black bg-[url('/images/illustration.jpg')] bg-cover bg-no-repeat"
                    href="/portfolio/illustrations"
                >
                    <span className="text-2xl font-bold absolute right-3 bottom-3">
                        Illustrations
                    </span>
                </Link>
                <Link
                    className="relative w-[300px] h-[400px] text-white hover:text-primary-500 p-10 border-4 rounded-sm border-black bg-[url('/images/website.jpg')] bg-cover bg-no-repeat"
                    href="/portfolio/application"
                >
                    <span className="text-2xl font-bold absolute right-3 bottom-3">
                        Websites
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default PortfolioPage;
