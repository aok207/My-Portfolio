import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";
import CursorFollow from "@/components/CursorFollow";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aung Oo Khant",
  description: "Portfolio by Aung Oo Khant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased w-full dark:text-white dark:bg-black`}
      >
        <CursorFollow />
        <div className="w-[90%] md:w-2/3 mx-auto h-full overflow-auto z-50">
          <Navbar />
          {children}
          <FloatingDock />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
