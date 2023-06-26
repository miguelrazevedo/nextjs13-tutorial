import { connectDB } from "@/utils/db/db";
import { NextResponse } from "next/server";
import Post from "@/utils/db/models/Post";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    try {
        await connectDB();
        const posts = username
            ? await Post.find({ username })
            : await Post.find();
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return new NextResponse("Database error", { status: 500 });
    }
}
