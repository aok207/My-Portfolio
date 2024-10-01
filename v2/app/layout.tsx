import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingDock from "@/components/FloatingDock";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full text-black bg-white dark:text-white dark:bg-black`}
      >
        <div className="w-full h-full overflow-auto px-6 md:px-10 lg:px-20 z-50">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <FloatingDock />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
