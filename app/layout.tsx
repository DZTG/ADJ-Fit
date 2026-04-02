import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Dea Jue | Online Fitness & Nutrition Coach",
  description:
    "Premium online fitness and nutrition coaching built around progress over perfection, custom programming, and real accountability.",
  keywords: [
    "online fitness coach",
    "nutrition coach",
    "personal trainer",
    "Alex Dea Jue",
    "online coaching",
  ],
  openGraph: {
    title: "Alex Dea Jue | Online Fitness & Nutrition Coach",
    description:
      "Custom online coaching, nutrition support, and accountability from Alex Dea Jue.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Dea Jue | Online Fitness & Nutrition Coach",
    description:
      "Custom online coaching, nutrition support, and accountability from Alex Dea Jue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-[#f5f5f5] antialiased font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
