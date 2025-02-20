"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { toast } from "sonner";

const CreateBlog = () => {
    const { user } = useUser();
    const handleCreateBlog = async (e) => {
        e.preventDefault();
        if(!user.id){
          toast.error("Login First")
        }
        const author = {
          name:user.fullName,
          user:user.imageUrl,
          email:user.emailAddresses[0].emailAddress
        }
        const title = e.target.title.value;
        const imageUrl = e.target.imageUrl.value;
        const description = e.target.description.value;
        const content = e.target.content.value;
        console.log(title, imageUrl, description, content);
        
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
                        ></Input>
                    </div>
                    <div className="w-full">
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input
                            name="imageUrl"
                            type="text"
                            placeholder="Enter your image URL"
                        ></Input>
                    </div>
                </div>
                <div className="w-full">
                    <Label htmlFor="description">Description</Label>
                    <Input
                        name="description"
                        type="text"
                        placeholder="Write your description"
                    ></Input>
                </div>
                <div className="w-full">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        rows="10"
                        name="content"
                        placeholder="Write your content"
                    />
                </div>
                <div>
                    <Button className="px-10 text-black" type="submit">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
