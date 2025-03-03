"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  accessToken: string | null;
  setTokens: (access: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");

    if (storedAccessToken) setAccessToken(storedAccessToken);
  }, []);

  const setTokens = (access: string) => {
    setAccessToken(access);
    localStorage.setItem("access_token", access);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("access_token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ accessToken, setTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
