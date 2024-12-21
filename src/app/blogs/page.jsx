import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
    return (
        <main>
            <section className="mt-10">
                <Link href="/blogs/5" className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="w-full md:w-[500px] h-[200px] relative">
                        <Image
                            className="object-cover"
                            src="/images/website.jpg"
                            alt="blog image"
                            fill={true}
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">Blog 1</h1>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero, vel, ad ut dolorem perferendis
                            asperiores itaque, labore quaerat voluptate sapiente
                            dolor cum incidunt impedit quisquam quos optio!
                            Quidem, odit voluptates.
                        </p>
                    </div>
                </Link>
                <Link href="/blogs/1" className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="w-full md:w-[500px] h-[200px] relative">
                        <Image
                            className="object-cover"
                            src="/images/website.jpg"
                            alt="blog image"
                            fill={true}
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">Blog 1</h1>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero, vel, ad ut dolorem perferendis
                            asperiores itaque, labore quaerat voluptate sapiente
                            dolor cum incidunt impedit quisquam quos optio!
                            Quidem, odit voluptates.
                        </p>
                    </div>
                </Link>
                <Link href="/blogs/2" className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="w-full md:w-[500px] h-[200px] relative">
                        <Image
                            className="object-cover"
                            src="/images/website.jpg"
                            alt="blog image"
                            fill={true}
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">Blog 1</h1>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero, vel, ad ut dolorem perferendis
                            asperiores itaque, labore quaerat voluptate sapiente
                            dolor cum incidunt impedit quisquam quos optio!
                            Quidem, odit voluptates.
                        </p>
                    </div>
                </Link>
                <Link href="/blogs/3" className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="w-full md:w-[500px] h-[200px] relative">
                        <Image
                            className="object-cover"
                            src="/images/website.jpg"
                            alt="blog image"
                            fill={true}
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">Blog 1</h1>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero, vel, ad ut dolorem perferendis
                            asperiores itaque, labore quaerat voluptate sapiente
                            dolor cum incidunt impedit quisquam quos optio!
                            Quidem, odit voluptates.
                        </p>
                    </div>
                </Link>
                <Link href="/blogs/4" className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="w-full md:w-[500px] h-[200px] relative">
                        <Image
                            className="object-cover"
                            src="/images/website.jpg"
                            alt="blog image"
                            fill={true}
                        />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">Blog 1</h1>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Libero, vel, ad ut dolorem perferendis
                            asperiores itaque, labore quaerat voluptate sapiente
                            dolor cum incidunt impedit quisquam quos optio!
                            Quidem, odit voluptates.
                        </p>
                    </div>
                </Link>
            </section>
        </main>
    );
};

export default BlogPage;
