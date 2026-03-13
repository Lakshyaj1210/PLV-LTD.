import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLV Ltd. | Building Tomorrow's Software, Today",
  description: "Modern software & AI solutions company specializing in custom web apps, AI automation, and cloud solutions.",
};

import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-slate-50 min-h-screen flex flex-col font-sans relative`}
        suppressHydrationWarning
      >
        <AnimatedBackground />
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  );
}

