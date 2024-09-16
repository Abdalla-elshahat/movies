import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    cookies().delete("token");
    return  NextResponse.json({message:"you are logout"},{status:201})
}