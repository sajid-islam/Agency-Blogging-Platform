const { default: Blog } = require("@/models/Blog");
const { NextResponse } = require("next/server");
const { default: connect } = require("utils/db");

export const GET = async (request, { params }) => {
    await connect();
    const param = await params;
    const blog = await Blog.find({ "author.email": param.email });
    return NextResponse.json(blog, { status: 200 });
};
