import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background/Background";
import Header from "./components/Header";

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
      <body
        className={`antialiased`}
      >
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
