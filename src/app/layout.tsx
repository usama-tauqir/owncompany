import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Own Company",
  description: "Technology solutions company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        {children}

        {/* GLOBAL FLOATING BUTTON (VISIBLE ON ALL PAGES) */}
        <Link
          href="/contact"
          className="floatingContactButton"
          aria-label="Let's Talk Business"
        >
          <span>Let&apos;s Talk Business</span>
          
        </Link>

      </body>
    </html>
  );
}