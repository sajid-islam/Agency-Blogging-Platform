import Blog from "@/models/Blog";
import connect from "utils/db";

const { NextResponse } = require("next/server");

export const GET = async () => {
    try {
        await connect()
        const blog = await Blog.find()
        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        return NextResponse.json("Server Error", { status: 500 });
    }
};
