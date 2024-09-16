import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";
import { JWTT } from "./types";
import { cookies } from 'next/headers';
const privetkey=process.env.JWT_SECRET as string

export function thfertoken( jwtt: JWTT):string{
    const token=jwt.sign(jwtt,privetkey,{
        expiresIn:"30d"//obtinal
    })
    return token;
}

export function  verifytoken(request:NextRequest){
    const token=request.cookies.get("token")?.value as string;
 if(!token){
return null
 }
 return jwt.verify(token,privetkey) as JWTT;
}
// Verify Token For Page
export function verifyTokenForPage(token: string): JWTT | null {
    try {
        const privateKey = process.env.JWT_SECRET as string;
        const userPayload = jwt.verify(token, privateKey) as JWTT;
        if(!userPayload) return null;

        return userPayload;
    } catch (error) {
        return null;
    }
}

export function Setcookie(toke:JWTT):string{
    const token=jwt.sign(toke,privetkey,{
        expiresIn:"30d"
    })
    const cookies=serialize("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict", //more scure for cookie
        path:"/", //for all app
        maxAge:60*60*24*30
    })
    return cookies;
    }

