import Image from "next/image";
// import HeroImg from "/images/hero.svg"
import { Button } from "@/components/ui/button";
import heroImg from "@/images/hero.svg"

export default function Home() {
    return (
        <main>
            <section className="flex  md:flex-row flex-col-reverse gap-10 items-center my-10">
                <div className="flex-1 space-y-7">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-t py-2 to-primary-600 from-gray-200 bg-clip-text text-transparent">
                        Creating Better Designs for Your Digital Ideas
                    </h1>
                    <p className="text-gray-text">
                        Collaborating with the best minds in tech to turn your
                        ideas into impactful solutions.
                    </p>
                    <Button className="bg-primary-500 hover:bg-primary-400 font-semibold text-white">
                        See Our Website
                    </Button>
                </div>
                <div className="flex-1 mt-5 flex justify-center w-[250px] moveAnimation">
                    <Image
                        src={heroImg}
                        width={400}
                        height={400}
                        alt="Home page hero image"
                    />
                </div>
            </section>
        </main>
    );
}
