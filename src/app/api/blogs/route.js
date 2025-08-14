import Blog from "@/models/Blog";
import connect from "utils/db";

const { NextResponse } = require("next/server");

export const GET = async () => {
    try {
        await connect();
        const blog = await Blog.find();
        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        return NextResponse.json("Server Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const blog = await request.json();
    const newBlog = new Blog(blog);
    try {
        await connect();
        await newBlog.save();
        return NextResponse.json("Blog has been created", { status: 201 });
    } catch (error) {
        console.log("Error in blogs post route", error);
        return NextResponse.json("Server Error", { status: 500 });
    }
};
