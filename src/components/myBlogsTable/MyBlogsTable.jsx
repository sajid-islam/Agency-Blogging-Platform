"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import getMyBlogs from "@/lib/getMyBlogs";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

const MyBlogsTable = () => {
    const baseURL =
        process.env.NODE_ENV === "production"
            ? "https://creativeink.vercel.app/api/blogs"
            : "http://localhost:3000/api/blogs";
    const [blogs, setBlogs] = useState([]);
    const { user } = useUser();
    useEffect(() => {
        if (!user) return;
        const email = user.emailAddresses[0].emailAddress;
        axios.get(`${baseURL}/api/my-blogs/${email}`).then((res) => {
            setBlogs(res.data);
        });
    }, [user]);

    const handleDeleteBlog = (id) => {
        axios.delete(`${baseURL}/api/blogs/${id}`).then((res) => {
            console.log(res.data);
            setBlogs((prevBlogs) =>
                prevBlogs.filter((blog) => blog._id !== id)
            );
        });
    };
    if (!blogs) {
        return (
            <div className="text-xl mt-10 text-center">Blogs Loading...</div>
        );
    }

    return (
        <div className="w-full">
            {/* Apply overflow-x-auto to the wrapper div */}
            <div className="overflow-x-auto w-full">
                {/* Add a max-width constraint to the table */}
                <Table className="min-w-max">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blogs.map((blog) => (
                            <TableRow key={blog._id}>
                                <TableCell className="font-medium">
                                    <img
                                        className="w-20 h-10 rounded object-cover"
                                        src={blog.image}
                                        alt={blog.title}
                                    />
                                </TableCell>
                                <TableCell>{blog.title}</TableCell>
                                <TableCell>{blog.description}</TableCell>
                                <TableCell>
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteBlog(blog._id)
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
export default MyBlogsTable;
