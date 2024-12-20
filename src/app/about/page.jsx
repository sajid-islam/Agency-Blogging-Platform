import Image from "next/image";
import React from "react";

const AboutPage = () => {
    return (
        <main>
            <section className="mt-10">
                <div className="relative w-full h-[300px]">
                    <Image
                        className="object-cover grayscale rounded-md"
                        src="/images/about.jpg"
                        fill={true}
                        alt="about page cover image"
                    />
                    <div className="p-3 bg-primary-500 rounded-md absolute text-white bottom-5 left-5">
                        <h3 className="text-2xl font-bold">
                            Digital storytellers
                        </h3>
                        <p className="text-xl font-semibold">
                            Handcrafting award winning digital experiences
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
