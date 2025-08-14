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
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import BlogUpdateDialog from "../BlogUpdateDialog/BlogUpdateDialog";
import { toast } from "sonner";

const MyBlogsTable = () => {
    const baseURL =
        process.env.NODE_ENV === "production"
            ? "https://creativeink.vercel.app"
            : "http://localhost:3000";

    const [blogs, setBlogs] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const { user } = useUser();

    useEffect(() => {
        if (!user) return;
        const email = user.emailAddresses[0].emailAddress;
        axios.get(`${baseURL}/api/my-blogs/${email}`).then((res) => {
            setBlogs(res.data);
        });
    }, [user, refetch]);

    const handleDeleteBlog = (id) => {
        toast("Are you sure you want to delete this blog?", {
            action: {
                label: "Delete",
                onClick: async () => {
                    try {
                        const res = await axios.delete(
                            `${baseURL}/api/blogs/${id}`
                        );
                        console.log(res.data);

                        setBlogs((prevBlogs) =>
                            prevBlogs.filter((blog) => blog._id !== id)
                        );

                        toast.success("Blog deleted successfully");
                    } catch (err) {
                        console.error(err);
                        toast.error("Failed to delete blog");
                    }
                },
            },
            cancel: {
                label: "Cancel",
                onClick: () => {
                    toast.message("Deletion canceled");
                },
            },
            duration: Infinity, // so it stays until action
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
                                    <AlertDialog
                                        open={dialogOpen}
                                        onOpenChange={setDialogOpen}
                                    >
                                        <AlertDialogTrigger asChild>
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                                Update
                                            </button>
                                        </AlertDialogTrigger>
                                        <BlogUpdateDialog
                                            blog={blog}
                                            onClose={() => setDialogOpen(false)}
                                            baseURL={baseURL}
                                            setRefetch={setRefetch}
                                        />
                                    </AlertDialog>
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
