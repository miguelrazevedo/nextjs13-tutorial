import { connectDB } from "@/utils/db/db";
import { NextResponse } from "next/server";
import Post from "@/utils/db/models/Post";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const post = await Post.findById(params.id);
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return new NextResponse("Database error", { status: 500 });
    }
}
