import React from "react";
import userLight from "@/images/userLight.png";
import userDark from "@/images/userDark.png";
import Image from "next/image";

const BlogPost =async ({params}) => {
    const id = await params.id;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await data.json();
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center gap-10 mt-10">
                <div className="space-y-5 md:flex-1">
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <p className="text-gray-text">
                        {blog.body.slice(0, 50)}...
                    </p>
                    <div className="flex items-center gap-2">
                        <Image
                            className="rounded-full"
                            src={userLight}
                            alt="author image"
                            width={30}
                            height={30}
                            placeholder="blur"
                        />
                        <p>Jhon Doe</p>
                    </div>
                </div>
                <div className="md:flex-1 relative w-full h-[250px]">
                    <Image
                        className="rounded-lg object-cover"
                        src="/images/about.jpg"
                        alt="blog image"
                        fill={true}
                    />
                </div>
            </section>
            <section className="mt-8">
                <p className="text-[18px] text-gray-text text-justify">
                    {blog.body}
                </p>
            </section>
        </main>
    );
};

export default BlogPost;
