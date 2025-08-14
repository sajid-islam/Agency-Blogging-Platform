import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { toast } from "sonner";

const BlogUpdateDialog = ({ blog, onClose, baseURL, setRefetch }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useUser();
    const handleUpdateBlog = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(blog, baseURL);

        if (!user?.id) {
            toast.error("Login First");
            setLoading(false);
            return;
        }

        const title = e.target.title.value;
        const description = e.target.description.value;
        const content = e.target.content.value;

        try {
            // 🔹 Submit blog post to API
            await axios.put(`${baseURL}/api/blogs/${blog._id}`, {
                title,
                description,
                content,
            });

            toast.success("Blog updated successfully!");
            e.target.reset();
            onClose();
            setRefetch(true);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            </AlertDialogHeader>
            <form
                id="updateBlogForm"
                onSubmit={handleUpdateBlog}
                className="mt-10 space-y-5"
            >
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            name="title"
                            type="text"
                            placeholder="Enter your title"
                            required
                            defaultValue={blog.title}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <Label htmlFor="description">Description</Label>
                    <Input
                        name="description"
                        type="text"
                        placeholder="Write your description"
                        required
                        defaultValue={blog.description}
                    />
                </div>
                <div className="w-full">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        rows="10"
                        name="content"
                        placeholder="Write your content"
                        required
                        defaultValue={blog.content}
                    />
                </div>
            </form>
            <AlertDialogFooter>
                <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                <AlertDialogAction type="submit" form="updateBlogForm">
                    {loading ? "Updating" : "Update"}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default BlogUpdateDialog;
