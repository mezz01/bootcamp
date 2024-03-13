import mongoose, { Schema, models } from "mongoose";

const useShema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

const User = models.User || mongoose.model("user", useShema);
export default User;

