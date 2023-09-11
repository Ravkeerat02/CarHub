import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

// what the page will look like
export const metadata = {
  title: "Create Next App",
  description: "Discover the best cars in the worls",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relatvie">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
