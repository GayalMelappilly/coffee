"use server"

import { fetchWithAuth } from "@/app/hooks/fetchWithAuth";
import { getAccessToken } from "@/app/hooks/getAccessToken";

export const getCurrentUser = async() => {  

    const accessToken = await getAccessToken()

    const res = await fetchWithAuth(`${process.env.API_URL}/current-user/`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${accessToken}`,
        },
        credentials: "include",
        cache: 'no-store',
    })

    if(!res.ok){
        const errorData = await res.json()
        throw new Error(JSON.stringify(errorData))
    }

    return res.json()

}