const { NextResponse } = require("next/server");

export const GET = async (request) => {
    return new NextResponse("SERVER IS CONNECTED", { status: 200 });
};
