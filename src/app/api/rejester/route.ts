import { Setcookie } from "@/utels/jwttoken";
import { prism } from "@/utels/prism";
import { Rejester } from "@/utels/types";
import { rejesterschema } from "@/utels/zod";
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";

export async function POST(reqest:NextRequest){
    const body=await reqest.json() as Rejester;
    const vald=rejesterschema.safeParse(body);
    if(!vald.success){
        return  NextResponse.json(vald.error,{status:400})
    }
    const find= await prism.user.findUnique({
        where:{email:body.email}
})
if(find){
    return NextResponse.json({message:"user already exist"},{status:400})
}

const salt=await bcrypt.genSalt(10);
const hash=await bcrypt.hash(body.password,salt);
const newuser=await prism.user.create({
data:{
    username:body.username,
    email:body.email,
    password:hash,
    isAdmin:body.isAdmin
}
})
const data={id:newuser.id,isAdmin:newuser.isAdmin,username:newuser.username}
const cookies=Setcookie(data)
return NextResponse.json({...newuser},{status:201,
    headers:{
        "Set-Cookie":cookies
    }
})
}
