import mongoose, { Shema, models } from "mongoose";

const compShema = new Shema(
{
    progLang: {
        type: String,
        required: true,
    },
    framework: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

const Comp = models.Comp || mongoose.model("comp", compShema);
export default Comp;