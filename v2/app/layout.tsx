import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingDock from "@/components/FloatingDock";

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
      <body className={`${inter.className} antialiased w-full`}>
        <div className="w-full h-full overflow-auto px-6 md:px-10 lg:px-20">
          <Navbar />
          {children}
          <FloatingDock />
        </div>
      </body>
    </html>
  );
}
