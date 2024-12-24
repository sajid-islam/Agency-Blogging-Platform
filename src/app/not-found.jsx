import Image from "next/image";
import React from "react";
import notFoundImg from "@/images/notFound.svg";

const NotFoundPage = () => {
    return (
        <div className="grid h-screen place-content-center px-4">
            <div className="text-center">
                <Image src={notFoundImg} width={400} height={400} alt="not found image" />

                <h1 className="mt-6 text-2xl font-bold tracking-tight  sm:text-4xl">
                    Uh-oh!
                </h1>

                <p className="mt-4 text-gray-500">We can't find that page.</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
