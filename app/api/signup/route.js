import { NextResponse } from "next/server";
import {connectMongodb} from "@/lib/mongodb"
import User from "@/models/user" 
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
       const {name, email, pass} = await req.json();
       console.log("name :", name);
       const hashpassword = await bcrypt.hash(pass, 10);
       await connectMongodb();
       await User.create({ name, email, pass: hashpassword});

       return NextResponse.json({message: "Register success"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "error occured"}, {status: 500});
    }
}


