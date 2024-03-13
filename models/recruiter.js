import mongoose, { Schema, models } from "mongoose";

const recShema = new Schema(
{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    entreprisename: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

const Rec = models.Rec || mongoose.model("recruiter", recShema);
export default Rec;