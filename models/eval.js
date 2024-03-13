import mongoose, { Schema, models } from "mongoose";

const evalShema = new Schema(
{
    note: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
},
{ timestamps: true }
);

const Eval = models.Eval || mongoose.model("evaluations", evalShema);
export default Eval;