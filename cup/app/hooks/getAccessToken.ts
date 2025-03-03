"use server"

import { cookies } from "next/headers";

export const getAccessToken = async () => {
    const token = (await cookies()).get("access_token")?.value;
    // console.log("TOKENNNN : ",token)
    return token
};
