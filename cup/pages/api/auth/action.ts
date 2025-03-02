"use server"

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
      console.log("ERRRRRROR : ",errorData)
      throw new Error(JSON.stringify(errorData));
    }
    return res.json();
}


// User SignIn

export type loginPayload = {
    username: string,
    password: string
}

export const loginUser = async(loginData: loginPayload) => {
    const res = await fetch(`${process.env.API_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(loginData)
    })

    if(!res.ok){
        const errorData = await res.json();
        console.log("ERRRRRROR : ",errorData)
        throw new Error(JSON.stringify(errorData));
    }
    return res.json()
}


// Refresh access token

export const refreshToken = async (token: string) => {
    const res = await fetch(`${process.env.API_URL}/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: token }),
    })

    if (!res.ok) {
        throw new Error("Failed to refresh access token");
    }

    const data = await res.json();
    localStorage.setItem("access_token", data.access_token);
    return data.access_token;
}