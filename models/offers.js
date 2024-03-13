import mongoose, { Shema, models } from "mongoose";

const offersShema = new Shema(
{
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    Place: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
);

const Offers = models.Offers || mongoose.model("offers", offersShema);
export default Offers;