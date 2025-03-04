"use server"

import { cookies } from "next/headers";

export const setRefreshToken = async (refreshToken: string) => {
    const cookieStore = await cookies()
    cookieStore.set("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, 
        path: "/",
    });
};