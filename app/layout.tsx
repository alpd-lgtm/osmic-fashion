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
  title: "Fashion Store",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#111111]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <div className="flex-1">{children}</div>

          <footer className="mt-20 border-t border-gray-200 bg-[#FAF7F3] text-[#111111]">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7A1F2A]">
                    Aawase
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Elegant fashion with easy ordering
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
                    Explore curated fashion pieces and order directly through
                    WhatsApp for product details, availability, and delivery.
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7A1F2A]">
                    Navigation
                  </p>
                  <div className="mt-4 flex flex-col gap-3 text-sm">
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-[#7A1F2A]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/products"
                      className="text-gray-600 hover:text-[#7A1F2A]"
                    >
                      Products
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7A1F2A]">
                    Contact
                  </p>
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    For orders and inquiries, connect through WhatsApp from any
                    product page.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
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