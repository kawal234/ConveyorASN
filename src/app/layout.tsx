import type { Metadata } from "next";
import { Syncopate, Inter } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conveyor The Lounge | Asansol's Premier Nightclub",
  description: "Floor 6, The Fern Residency. Asansol's Premier Lounge & Nightclub. Elevate Your Night with premium cocktails and gourmet bites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syncopate.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-midnight text-white">
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
