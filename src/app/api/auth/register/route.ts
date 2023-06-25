import { connectDB } from "@/utils/db/db";
import User from "@/utils/db/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface UserRequest {
    username: string;
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const { username, email, password } = (await request.json()) as UserRequest;

    await connectDB();

    const userExists = await User.findOne({ email: email });
    if (userExists) {
        return NextResponse.json(
            { message: "User already exists" },
            { status: 400 }
        );
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    return NextResponse.json(
        { message: "User has been created" },
        { status: 201 }
    );
}
