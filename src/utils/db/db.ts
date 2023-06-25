import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
    } catch (error) {
        throw new Error("Could not connect to Database");
    }
};
