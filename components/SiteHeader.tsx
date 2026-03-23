"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-1 w-full bg-[#7A1F2A]" />

      <div className="border-b border-gray-100 bg-[#FAF7F3] px-4 py-2 text-center text-xs font-medium leading-5 text-gray-700 sm:py-3 sm:text-sm">
        Direct order available on WhatsApp · Store pickup and delivery in Kathmandu
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.08em] text-[#111111] sm:text-2xl"
          >
            Aawase
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            <Link href="/" className="transition hover:text-[#7A1F2A]">
              Home
            </Link>
            <Link
              href="/products"
              className="transition hover:text-[#7A1F2A]"
            >
              Products
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-[#111111] md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-[#FAF7F3] hover:text-[#7A1F2A]"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-[#FAF7F3] hover:text-[#7A1F2A]"
              >
                Products
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}