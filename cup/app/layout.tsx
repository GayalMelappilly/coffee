import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background/Background";
import Header from "./components/Header";
import QueryProvider from "./providers/QueryProvider";

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
        <QueryProvider>
          <Background />
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
