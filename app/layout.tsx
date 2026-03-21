import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Cosmic Fashion",
  description: "Boutique fashion and tailoring in Kathmandu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#fcfaf7] text-slate-800">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.22em] text-red-700">
                Cosmic
              </span>
              <span className="text-sm font-semibold text-blue-900">
                Fashion & Tailoring
              </span>
            </Link>

            {/* Nav */}
            <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
              <Link href="/" className="hover:text-blue-900">Home</Link>
              <Link href="/products" className="hover:text-blue-900">Products</Link>
              <a href="/#categories" className="hover:text-blue-900">Collections</a>
              <a href="/#contact" className="hover:text-blue-900">Contact</a>
            </nav>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              className="rounded-full bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}