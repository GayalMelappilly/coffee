"use server"

import { cookies } from "next/headers";

export const getRefreshToken = async () => {
    const token = (await cookies()).get("refresh_token")?.value;
    // console.log("REFRESH TOKEN : ",token)
    return token
};
