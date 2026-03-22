import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      <div className="h-1 w-full bg-[#7A1F2A]" />

      <div className="bg-[#FAF7F3] px-4 py-3 text-center text-sm font-medium text-gray-700 sm:text-base">
        Direct order available on WhatsApp · Store pickup and delivery in
        Kathmandu
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.08em] text-[#111111]"
          >
            Aawase
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
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
        </div>
      </header>
    </>
  );
}