import { Setcookie } from "@/utels/jwttoken";
import { prism } from "@/utels/prism";
import { login } from "@/utels/types";
import { loginschema } from "@/utels/zod";
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";

export async function POST(reqest:NextRequest){
    const body=await reqest.json() as login;
    const vald=loginschema.safeParse(body);
    if(!vald.success){
        return  NextResponse.json(vald.error,{status:400})
    }
    const user= await prism.user.findUnique({
        where:{email:body.email}
})
if(!user){
    return NextResponse.json({message:"email is not found shoud to signup"},{status:400})
}
const check=await bcrypt.compare(body.password,user.password);
if(!check){
    return NextResponse.json({message:"password is not correct"},{status:400})
}
const data={id:user.id,username:user.username,isAdmin:user.isAdmin};

const cookies=Setcookie(data)
    return NextResponse.json({message:`pass is tru by this email ${user.email}`,cookies},
        {status:201,
        headers:{"Set-cookie":cookies}
    })
}
