import { prism } from "@/utels/prism";
import { NextRequest, NextResponse } from "next/server";

export async function GET(reqest:NextRequest){
return NextResponse.json( await prism.user.findMany());
}