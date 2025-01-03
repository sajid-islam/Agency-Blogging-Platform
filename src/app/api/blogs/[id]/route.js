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
