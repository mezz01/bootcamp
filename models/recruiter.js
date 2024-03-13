import mongoose, { Shema, models } from "mongoose";

const recShema = new Shema(
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