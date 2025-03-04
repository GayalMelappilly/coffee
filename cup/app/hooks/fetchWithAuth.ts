import { refreshAccessToken } from "@/pages/api/auth/action";
import { getAccessToken } from "./getAccessToken";
import { setAccessToken } from "./setAccessToken";

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {

    const accessToken = await getAccessToken()

    const headers: HeadersInit = options.headers
        ? { ...options.headers }
        : {};

    if (accessToken) {
        (headers as Record<string, string>)["Authorization"] = `Bearer ${accessToken}`;
    }

    let response = await fetch(url, {
        ...options,
        headers,
        credentials: "include",
    });

    if (response.status === 401) {

        const newAccessToken = await refreshAccessToken()

        if (newAccessToken) {
            setAccessToken(newAccessToken);

            (headers as Record<string, string>)["Authorization"] = `Bearer ${newAccessToken}`;

            response = await fetch(url, {
                ...options,
                headers,
                credentials: "include",
            });
        }
    }

    return response;
};
