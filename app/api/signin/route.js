import { NextResponse } from "next/server";
import {connectMongodb} from "@/lib/mongodb"
import User from "@/models/user" 
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
       const {email, pass} = await req.json();

       await connectMongodb();


       return NextResponse.json({message: "Login success"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "error occured"}, {status: 500});
    }
}