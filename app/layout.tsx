import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Dea Jue | Online Fitness Coach",
  description:
    "Transform your body and build a life you're proud of. Online fitness coaching built around your goals, your schedule, and your life.",
  keywords: ["fitness coach", "online coaching", "personal trainer", "nutrition coaching"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#0a0a0a] text-[#f5f5f5] antialiased font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
