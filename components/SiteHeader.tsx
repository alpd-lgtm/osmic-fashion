"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isProducts = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Aawase
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/"
            className={`rounded-full px-3 py-2 text-sm transition ${
              isHome
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`rounded-full px-3 py-2 text-sm transition ${
              isProducts
                ? "bg-black text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}