"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-[2px] w-full bg-[#7A1F2A]" />

      <div className="border-b border-gray-100 bg-[#FAF7F3] px-3 py-2 text-center text-[11px] leading-5 text-gray-700 sm:px-4 sm:text-xs">
        Direct order available on WhatsApp · Store pickup and delivery in Kathmandu
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-[18px] font-medium tracking-[0.28em] text-[#111111] transition hover:opacity-80"
          >
            AAWASE
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 lg:flex">
            <Link href="/" className="transition hover:text-[#7A1F2A]">
              Home
            </Link>
            <Link href="/products" className="transition hover:text-[#7A1F2A]">
              Shop
            </Link>
            <Link
              href="/products?category=kurtha"
              className="transition hover:text-[#7A1F2A]"
            >
              Kurthas
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FAF7F3] hover:text-[#7A1F2A]"
              >
                Home
              </Link>

              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FAF7F3] hover:text-[#7A1F2A]"
              >
                Shop
              </Link>

              <Link
                href="/products?category=kurtha"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FAF7F3] hover:text-[#7A1F2A]"
              >
                Kurthas
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}