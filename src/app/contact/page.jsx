import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import contactImg from '@/images/contact.svg'

const ContactPage = () => {
    return (
        <main>
            <header className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-text mt-10">
                    Let's Keep In Touch
                </h1>
            </header>
            <section className="mt-10 flex items-center gap-10">
                <div className="flex-1 hidden md:flex justify-center moveAnimation">
                    <Image
                        src={contactImg}
                        width={400}
                        height={400}
                        alt="contact page email illustration"
                    />
                </div>
                <div className="flex-1">
                    <form className="space-y-5 border-2 px-3 py-5 rounded-md ">
                        <div>
                            <label htmlFor="name">Name</label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <Textarea id="message" placeholder="Enter your message" />
                        </div>
                        <Button type="submit" className="text-semibold w-full" >Send message</Button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
