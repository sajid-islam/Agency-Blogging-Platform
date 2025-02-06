import Image from "next/image";
import React from "react";
import aboutImg from '@/images/about.jpg'

const AboutPage = () => {
    return (
        <main>
            <section className="md:relative mt-10">
                <div className="relative w-full h-[300px]">
                    <Image
                        className="object-cover grayscale rounded-md"
                        src={aboutImg}
                        placeholder="blur"
                        fill={true}
                        alt="about page cover image"
                    />
                </div>
                <div className="md:absolute mt-5 md:mt-0 p-3 bg-primary-500 rounded-md  text-white bottom-5 left-5">
                    <h3 className="text-2xl font-bold">Digital storytellers</h3>
                    <p className="text-xl font-semibold">
                        Handcrafting award winning digital experiences
                    </p>
                </div>
            </section>
            <section className="flex flex-col md:flex-row  gap-10 my-10">
                <div className="text-justify flex-1">
                    <h1 className="uppercase text-3xl font-bold">
                        Who are we?
                    </h1>
                    <div className="text-gray-text mt-2 space-y-4">
                        <p>
                            We are a dynamic team of innovators dedicated to
                            transforming ideas into impactful digital solutions.
                        </p>
                        <p>
                            At our core, we strive to bridge creativity and
                            technology. By collaborating with global tech
                            experts, we ensure that every project reflects
                            excellence, innovation, and value for our clients.
                        </p>
                        <p>
                            We aim to empower individuals and businesses
                            worldwide by crafting transformative digital
                            experiences. Our goal is to make technology
                            accessible, effective, and truly impactful for all.
                        </p>
                    </div>
                </div>
                <div className="text-justify flex-1">
                    <h1 className="uppercase text-3xl font-bold">
                        What we do?
                    </h1>
                    <div className="text-gray-text mt-2 space-y-4">
                        <p>
                            We specialize in delivering innovative, user-centric
                            solutions tailored to meet the unique needs of our
                            clients. By combining cutting-edge technology with
                            creative expertise, we help businesses transform
                            their ideas into impactful digital experiences.
                        </p>
                        <ul className="space-y-3">
                            <li> - Innovative Solutions</li>
                            <li> - Digital Product Design</li>
                            <li> - Global Collaboration</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
