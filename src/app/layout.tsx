import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

const font = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: [],
});

export const metadata: Metadata = {
  title: "Portfolio | Subham Mani",
  description: "A portfolio showcasing Subham Mani's work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${font.className} antialiased bg-background min-h-screen flex flex-col container mx-auto px-4 py-8`}
      >
        <main className="flex-1 pb-4 md:pb-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
