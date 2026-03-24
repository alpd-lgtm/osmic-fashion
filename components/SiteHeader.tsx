"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-1 w-full bg-[#7A1F2A]" />

      {/* Announcement bar */}
      <div className="border-b border-gray-100 bg-[#FAF7F3] px-4 py-2 text-center text-[11px] font-medium leading-5 text-gray-700 sm:py-3 sm:text-sm">
        Direct order available on WhatsApp · Store pickup and delivery in Kathmandu
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.12em] text-[#111111] transition hover:text-[#7A1F2A] sm:text-2xl"
          >
            Aawase
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition hover:text-[#7A1F2A]"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 transition hover:text-[#7A1F2A]"
            >
              Products
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#7A1F2A] px-4 py-2 text-sm font-medium text-[#7A1F2A] transition hover:bg-[#7A1F2A] hover:text-white"
            >
              WhatsApp Order
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2 text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A] md:hidden"
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

              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#7A1F2A] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Order on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}