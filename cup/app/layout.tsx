import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background/Background";

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
        {children}
      </body>
    </html>
  );
}
