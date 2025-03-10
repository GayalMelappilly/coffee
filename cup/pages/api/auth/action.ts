"use server"

import { getAccessToken } from "@/app/hooks/getAccessToken"
// import { getAccessToken } from "@/app/hooks/getAccessToken"
import { getRefreshToken } from "@/app/hooks/getRefreshToken"
import { cookies } from "next/headers"

// User Signup

export type RegisterPayload = {
    username: string,
    email: string,
    password: string
}

export const registerUser = async (userData: RegisterPayload) => {
    console.log("USER DATA: ", userData)
    const res = await fetch(`${process.env.API_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.log("ERRRRRROR : ", errorData)
        throw new Error(JSON.stringify(errorData));
    }
    return res.json();
}


// User SignIn

export type loginPayload = {
    username: string,
    password: string
}

export const loginUser = async (loginData: loginPayload) => {
    const res = await fetch(`${process.env.API_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData),
        credentials: "include"
    })

    if (!res.ok) {
        const errorData = await res.json();
        console.log("ERRRRRROR : ", errorData)
        throw new Error(JSON.stringify(errorData));
    }

    const data = await res.json()

    const cookieStore = await cookies()

    cookieStore.set("access_token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hour
        path: "/",
    });

    cookieStore.set("refresh_token", data.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
    });

    console.log("LOGIN_REFRESH_TOKEN : ",data.refresh_token)

    return data
}

export const logoutUser = async () => {

    const accessToken = await getAccessToken()
    const refreshToken = await getRefreshToken()

    console.log("REFRESH : ",refreshToken)
    console.log("ACCESS : ",accessToken)
    
    const res = await fetch(`${process.env.API_URL}/logout/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${accessToken}`
        },
        body: JSON.stringify({refresh_token: refreshToken}),
        credentials: "include",
        cache: 'no-store',
    })

    if (!res.ok) {
        const errorData = await res.json();
        console.log("ERRRRRROR : ", errorData)
        throw new Error(JSON.stringify(errorData));
    }

    const data = await res.text()
    console.log("USER LOGGED OUT")

    const cookieStore = await cookies()

    cookieStore.delete("access_token")
    cookieStore.delete("refresh_token")

    return data
}

// Refresh access token

export const refreshAccessToken = async () => {
    try {
        const refreshToken = await getRefreshToken()
        console.log("RT : ",refreshToken)

        const res = await fetch(`${process.env.API_URL}/token/refresh/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({refresh: refreshToken}),
            credentials: "include"
        });

        if (!res.ok) {
            throw new Error("Failed to refresh access token");
        }

        const data = await res.json();

        return data.access;
    } catch (error) {
        console.error("Error refreshing token:", error);
        return null;
    }
};