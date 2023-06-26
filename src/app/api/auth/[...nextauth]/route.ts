import { connectDB } from "@/utils/db/db";
import User from "@/utils/db/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            //@ts-ignore
            async authorize(credentials: any) {
                await connectDB();

                try {
                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (!user) {
                        throw new Error("User does not exist");
                    }

                    const matched = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!matched) {
                        throw new Error("Incorrect password");
                    }
                    return {
                        name: user.username,
                        email: user.email,
                    };
                } catch (error) {
                    console.log(error);

                    throw new Error("Could not authenticate.");
                }
            },
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" },
            },
        }),
    ],
    pages: {
        error: "/dashboard/login",
    },
});

export { handler as GET, handler as POST };
