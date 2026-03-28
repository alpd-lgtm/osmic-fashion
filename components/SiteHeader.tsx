"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // change this later to real cart count
  const cartCount = 0;

  return (
    <>
      <div className="h-1 w-full bg-[#7A1F2A]" />

      <div className="border-b border-gray-100 bg-[#FAF7F3] px-4 py-2 text-center text-xs font-medium leading-5 text-gray-700 sm:py-3 sm:text-sm">
        Direct order available on WhatsApp · Store pickup and delivery in
        Kathmandu
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DED5] text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* DESKTOP LEFT NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-[#7A1F2A]"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 transition hover:text-[#7A1F2A]"
            >
              Shop
            </Link>
          </nav>

          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.12em] text-[#111111] sm:text-2xl"
          >
            Suzie
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* DESKTOP ICONS */}
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/products"
                aria-label="Search products"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DED5] text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </Link>

              <Link
                href="/cart"
                aria-label="Cart"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DED5] text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.085.836l.383 1.451m0 0L6.75 12h10.878a1.125 1.125 0 0 0 1.09-.848l1.558-6.231H5.104Zm3.146 11.25a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm8.25 0a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  />
                </svg>

                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#7A1F2A] px-1 text-[10px] font-semibold leading-none text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* MOBILE CART ICON */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DED5] text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.085.836l.383 1.451m0 0L6.75 12h10.878a1.125 1.125 0 0 0 1.09-.848l1.558-6.231H5.104Zm3.146 11.25a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm8.25 0a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#7A1F2A] px-1 text-[10px] font-semibold leading-none text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
            <p className="text-lg font-semibold tracking-[0.08em] text-[#111111]">
              AAWASE
            </p>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E7DED5] text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-medium text-[#111111]"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-medium text-[#111111]"
            >
              Shop
            </Link>

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-medium text-[#111111]"
            >
              Cart
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}