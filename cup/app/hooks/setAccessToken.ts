"use server"

import { cookies } from "next/headers";

export const setAccessToken = async (accessToken: string) => {
    const cookieStore = await cookies()
    cookieStore.set("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60, 
        path: "/",
    });
};