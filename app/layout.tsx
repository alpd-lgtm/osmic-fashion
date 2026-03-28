import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import { CartProvider } from "@/components/CartProvider";
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
  title: "Suzi Store",
  description: "Elegant fashion pieces for every occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#111111]">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />

            <main className="flex-1">{children}</main>

            <footer className="mt-12 border-t border-gray-100 bg-[#FCFAF8]">
              <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#7A1F2A]">
                      AAWASE
                    </p>

                    <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-[#111111]">
                      Elegant fashion for every occasion
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
                      Discover boutique styles designed for comfort, confidence,
                      and everyday elegance. Aawase brings together simple
                      shopping, refined design, and carefully selected fashion
                      pieces.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <a
                        href="https://wa.me/9779800000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#7A1F2A] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Order on WhatsApp
                      </a>

                      <Link
                        href="/products"
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                      >
                        Browse Products
                      </Link>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#7A1F2A]">
                      Navigation
                    </p>

                    <nav className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                      <Link href="/" className="transition hover:text-[#7A1F2A]">
                        Home
                      </Link>

                      <Link
                        href="/products"
                        className="transition hover:text-[#7A1F2A]"
                      >
                        Products
                      </Link>

                      <Link
                        href="/cart"
                        className="transition hover:text-[#7A1F2A]"
                      >
                        Cart
                      </Link>
                    </nav>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#7A1F2A]">
                      Contact
                    </p>

                    <div className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                      <p>Direct order available on WhatsApp.</p>
                      <p>Store pickup and delivery available in Kathmandu.</p>
                      <p>Simple boutique shopping with personal support.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                  <p>© 2026 Aawase. All rights reserved.</p>
                  <p>Designed for a clean and elegant shopping experience.</p>
                </div>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}