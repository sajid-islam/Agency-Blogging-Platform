import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await data.json();
    return (
        <main>
            <section className="mt-10">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/blogs/${blog.id}`}
                        className="flex flex-col md:flex-row items-center gap-10 mb-10"
                    >
                        <div className="w-full md:w-[300px] h-[200px] relative">
                            <Image
                                className="object-cover"
                                src="/images/website.jpg"
                                alt="blog image"
                                fill={true}
                            />
                        </div>
                        <div className="space-y-3 flex-1">
                            <h1 className="text-3xl font-bold">{blog.title}</h1>
                            <p className="text-gray-text">
                                {blog.body.slice(0, 100)}...
                            </p>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default BlogPage;
