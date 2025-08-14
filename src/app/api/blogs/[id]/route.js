const { default: Blog } = require("@/models/Blog");
const { NextResponse } = require("next/server");
const { default: connect } = require("utils/db");

export const GET = async (request, { params }) => {
    try {
        await connect();
        const param = await params;
        const blog = await Blog.findById(param.id);
        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        return NextResponse.json("Server Error", { status: 500 });
    }
};
export const DELETE = async (request, { params }) => {
    await connect();
    const param = await params;
    const DeleteBlog = await Blog.findByIdAndDelete(param.id);
    return NextResponse.json(DeleteBlog, { status: 200 });
};

export const PUT = async (request, { params }) => {
    const { title, description, content } = await request.json();
    const param = await params;
    console.log(param.id);
    try {
        await connect();
        await Blog.findByIdAndUpdate(param.id, {
            $set: { title, description, content },
        });
        return NextResponse.json("Blog has been updated", { status: 201 });
    } catch (error) {
        console.error("Error in my-blogs PUT route", error);
        NextResponse.json({ message: error.message, status: 500 });
    }
};
