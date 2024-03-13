import mongoose from "mongoose"

export const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected sucessfully")
    } catch (error) {
        console.log("error conecting")
    }
} 