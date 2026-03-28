"use client";

export default function StickyWhatsAppButton() {
  const phone = "9779767483750";
  const message = "Hello Aawase, I want to ask about your products.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 right-4 z-50 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#7A1F2A] px-6 text-sm font-medium tracking-[0.01em] text-white shadow-[0_10px_30px_rgba(122,31,42,0.28)] transition hover:opacity-95 lg:hidden"
    >
      Order on WhatsApp
    </a>
  );
}