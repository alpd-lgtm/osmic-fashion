import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
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
  title: "Aawase",
  description: "Elegant fashion pieces for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white text-[#111111]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1">{children}</main>

<footer className="mt-10 border-t border-gray-200 bg-[#FCFAF8] text-[#111111]">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      {/* Brand */}
      <div className="lg:col-span-2">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A]">
          Aawase
        </p>
        <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
          Elegant fashion for every occasion
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
          Discover boutique styles designed for comfort, confidence, and
          everyday elegance. Aawase brings together simple shopping, refined
          design, and carefully selected fashion pieces.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://wa.me/9779800000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#7A1F2A] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Order on WhatsApp
          </a>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A]">
          Navigation
        </p>
        <div className="mt-4 flex flex-col gap-3 text-sm">
          <Link
            href="/"
            className="text-gray-600 transition hover:text-[#7A1F2A]"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-600 transition hover:text-[#7A1F2A]"
          >
            Products
          </Link>
        </div>
      </div>

      {/* Contact / Store Info */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A]">
          Contact
        </p>
        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
          <p>Direct order available on WhatsApp.</p>
          <p>Store pickup and delivery available in Kathmandu.</p>
          <p>Simple boutique shopping with personal support.</p>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Aawase. All rights reserved.</p>
      <p>Designed for a clean and elegant shopping experience.</p>
    </div>
  </div>
</footer>
        </div>
      </body>
    </html>
  );
}