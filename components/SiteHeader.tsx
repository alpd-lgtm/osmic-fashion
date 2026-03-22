import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      {/* Top accent line */}
      <div className="h-1 w-full bg-[#C6922B]" />

      {/* Top announcement bar */}
      <div className="bg-[#7A1F2A] px-4 py-3 text-center text-sm font-medium tracking-[0.02em] text-[#FFF8F0] sm:text-base">
        Direct order available on WhatsApp · Store pickup and delivery in
        Kathmandu
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-[#E8D7C0] bg-[#FFF9F2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.08em] text-[#7A1F2A]"
          >
            Aawase
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-[#5C463D]">
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