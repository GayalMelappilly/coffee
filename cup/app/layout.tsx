import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background/Background";
import Header from "./components/Header";
import QueryProvider from "./providers/QueryProvider";
import { AuthProvider } from "./context/authProvider";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased dark:bg-black`}>
        <Background />
        <AuthProvider>
          <QueryProvider>
            <Header />
            {children}
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
