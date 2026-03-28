"use client";

import { useState } from "react";

type Props = {
  name: string;
  price: number;
  slug: string;
};

const sizes = ["S", "M", "L", "XL"];

export default function ProductOrderWithSize({ name, price, slug }: Props) {
  const [selectedSize, setSelectedSize] = useState("M");

  const phone = "9779700000";
  const siteUrl = "https://yourdomain.com";

  const productUrl = `${siteUrl}/products/${slug}`;

  const message = `Hi, I want to order:
Product: ${name}
Size: ${selectedSize}
Price: NPR ${price}
Link: ${productUrl}`;

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        Select Size
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {sizes.map((size) => {
          const active = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`h-10 min-w-[44px] rounded-full border px-4 text-sm font-medium transition ${
                active
                  ? "border-[#7A1F2A] bg-[#7A1F2A] text-white"
                  : "border-gray-300 bg-white text-[#111111] hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#7A1F2A] px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:opacity-95"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}