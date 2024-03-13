import mongoose, { Shema, models } from "mongoose";

const postShema = new Shema(
{
    feedback: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
},
{ timestamps: true }
);

const Posts = models.Posts || mongoose.model("Postul", postShema);
export default Posts;