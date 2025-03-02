"use server"

export const getCurrentUser = async(access_token?: string | null) => {

    if (!access_token) {
        throw new Error('Access token is required');
    }

    const res = await fetch(`${process.env.API_URL}/current-user/`,{
        cache: 'no-store',
        headers: {
            "Authorization":`Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        const errorData = await res.json()
        throw new Error(JSON.stringify(errorData))
    }

    return res.json()

}