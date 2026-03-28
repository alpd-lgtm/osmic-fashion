"use client";

import { useState } from "react";

type Props = {
  name: string;
  price: number;
  slug: string;
  sizes: string[];
};

export default function ProductOrderWithSize({
  name,
  price,
  slug,
  sizes,
}: Props) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const phone = "9779767483750";
  const siteUrl = "https://aawase.vercel.app";

  const productUrl = `${siteUrl}/products/${slug}`;

  const message = `Hello Aawase,

I would like to order this item.

Product: ${name}
Size: ${selectedSize}
Price: NPR ${price}
Product Link: ${productUrl}

Please share availability and delivery details.`;

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex min-w-[260px] flex-col">
      {sizes.length > 0 && (
        <>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
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
                  className={`inline-flex h-11 min-w-[48px] items-center justify-center rounded-full border px-4 text-sm font-medium transition ${
                    active
                      ? "border-[#7A1F2A] bg-[#7A1F2A] text-white shadow-sm"
                      : "border-[#E7DED5] bg-white text-[#3F3F46] hover:border-[#BFA38A] hover:text-[#7A1F2A]"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#7A1F2A] px-7 py-3 text-sm font-medium tracking-[0.01em] text-white transition duration-300 hover:scale-[1.01] hover:opacity-95"
      >
        Order on WhatsApp
      </a>
      <p className="mt-3 text-sm text-[#666666]">
  Selected size: <span className="font-medium text-[#111111]">{selectedSize}</span>
</p>
    </div>
  );
}