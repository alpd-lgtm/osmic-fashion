"use client";

import { useState } from "react";

type ProductQuickOrderProps = {
  productName: string;
  phoneNumber?: string;
};

const sizes = ["S", "M", "L", "XL"];

export default function ProductQuickOrder({
  productName,
  phoneNumber = "9779800000000",
}: ProductQuickOrderProps) {
  const [selectedSize, setSelectedSize] = useState("M");

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hi, I want to order ${productName} in size ${selectedSize}.`
  )}`;

  return (
    <div className="mt-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
        Select Size
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {sizes.map((size) => {
          const active = selectedSize === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`inline-flex h-9 min-w-[42px] items-center justify-center rounded-full border px-3 text-xs font-medium transition ${
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

      <div className="mt-4 flex flex-col">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-[#7A1F2A]"
        >
          Quick Order
        </a>
      </div>
    </div>
  );
}