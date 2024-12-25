import Blog from "@/models/Blog";
import connect from "utils/db";

const { NextResponse } = require("next/server");

export const GET = async (req) => {
    try {
        await connect()
        const blog = "Blog"
        return new NextResponse(blog, { status: 200 });
    } catch (error) {
        return new NextResponse("Server Error", { status: 500 });
    }
};
