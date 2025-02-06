import React from "react";
import userLight from "@/images/userLight.png";
import Image from "next/image";
import blogImg from '@/images/about.jpg'
import getBlog from "@/lib/getBlog";

const BlogPost =async ({params}) => {
    const param = await params;
    const blog = await getBlog(param.id);
console.log(blog);
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center gap-10 mt-10">
                <div className="space-y-5 md:flex-1">
                    <h1 className="text-3xl font-bold">{blog?.title}</h1>
                    <p className="text-gray-text">
                        {blog.description}
                    </p>
                    <div className="flex items-center gap-2">
                        <Image
                            className="rounded-full w-8 h-8 object-cover"
                            src={blog.author.photo || userLight}
                            alt="author image"
                            width={30}
                            height={30}
                        />
                        <p>{blog.author.name || "Undefined"}</p>
                    </div>
                </div>
                <div className="md:flex-1 relative w-full h-[250px]">
                    <Image
                        className="rounded-lg object-cover"
                        src={blog.image}
                        alt="blog image"
                        fill={true}
                    />
                </div>
            </section>
            <section className="mt-8">
                <p className="text-[18px] text-gray-text text-justify">
                    {blog.content}
                </p>
            </section>
        </main>
    );
};

export default BlogPost;
