"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const CreateBlog = () => {
    const baseURL =
        process.env.NODE_ENV === "production"
            ? "https://creativeink.vercel.app/api/blogs"
            : "http://localhost:3000/api/blogs";
    const { user } = useUser();
    const [loading, setLoading] = useState(false);

    const handleCreateBlog = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!user?.id) {
            toast.error("Login First");
            setLoading(false);
            return;
        }

        const author = {
            name: user.fullName,
            photo: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        };

        const title = e.target.title.value;
        const description = e.target.description.value;
        const content = e.target.content.value;
        const imageFile = e.target.image.files[0];

        if (!imageFile) {
            toast.error("Please upload an image");
            setLoading(false);
            return;
        }

        try {
            // 🔹 Upload image to ImgBB
            const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY; // Replace with your API key
            const formData = new FormData();
            formData.append("image", imageFile);

            const imgbbResponse = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                formData
            );

            if (!imgbbResponse.data.success) {
                toast.error("Image upload failed");
            }

            const imageUrl = imgbbResponse.data.data.url;

            // 🔹 Submit blog post to API
            await axios.post(`${baseURL}/api/blogs`, {
                author,
                title,
                image: imageUrl,
                description,
                content,
            });

            toast.success("Blog created successfully!");
            e.target.reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Create a Blog</h1>
            <form onSubmit={handleCreateBlog} className="mt-10 space-y-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            name="title"
                            type="text"
                            placeholder="Enter your title"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <Label htmlFor="image">Upload Image</Label>
                        <Input
                            name="image"
                            type="file"
                            accept="image/*"
                            required
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
                    />
                </div>
                <div className="w-full">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        rows="10"
                        name="content"
                        placeholder="Write your content"
                        required
                    />
                </div>
                <div>
                    <Button
                        className="px-10 text-black"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
