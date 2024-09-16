import { z } from "zod";

export const rejesterschema=z.object({
    username:z.string().min(4).max(50),
    email:z.string().email(),
    password:z.string().min(6).max(50),
})
export const loginschema=z.object({
    email:z.string().email(),
    password:z.string().min(6).max(50),
})
export const logoutschema=z.object({
    email:z.string().email(),
})