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

          <footer className="mt-8 border-t border-gray-200 bg-[#FCFAF8] text-[#111111]">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A]">
                    Aawase
                  </p>
                  <h3 className="mt-3 max-w-xs text-2xl font-semibold leading-snug">
                    Elegant fashion for every occasion
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
                    Discover boutique styles with a clean and simple shopping
                    experience.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A]">
                    Navigation
                  </p>
                  <div className="mt-4 flex flex-col gap-3 text-sm">
                    <Link
                      href="/"
                      className="text-gray-600 transition duration-300 hover:text-[#7A1F2A]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/products"
                      className="text-gray-600 transition duration-300 hover:text-[#7A1F2A]"
                    >
                      Products
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A]">
                    Contact
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
                    Direct order available on WhatsApp with store pickup and
                    delivery in Kathmandu.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Aawase. All rights reserved.</p>
                <p>Designed for a clean and simple shopping experience.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}