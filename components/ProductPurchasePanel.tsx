"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

type ProductPurchasePanelProps = {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
  };
  sizes?: string[];
};

export default function ProductPurchasePanel({
  product,
  sizes = [],
}: ProductPurchasePanelProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || "");

  const whatsappMessage = encodeURIComponent(
    `Hi, I want to order:\nProduct: ${product.name}\nSize: ${selectedSize || "Not selected"}\nPrice: NPR ${product.price}\nLink: ${typeof window !== "undefined" ? window.location.href : ""}`
  );

  const whatsappUrl = `https://wa.me/9779800000000?text=${whatsappMessage}`;

  return (
    <div className="mt-7 flex flex-col gap-4">
      {sizes.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
            Select Size
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            {sizes.map((size) => {
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`inline-flex h-12 min-w-[48px] items-center justify-center rounded-full border px-5 text-sm font-medium transition ${
                    isSelected
                      ? "border-[#7A1F2A] bg-[#7A1F2A] text-white"
                      : "border-[#E7DED5] bg-white text-[#444444] hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            image: product.image,
            size: selectedSize || "Default",
          })
        }
        disabled={sizes.length > 0 && !selectedSize}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:self-start"
      >
        Add to Cart
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:self-start"
      >
        Order on WhatsApp
      </a>

      {selectedSize && (
        <p className="text-sm text-[#666666]">Selected size: {selectedSize}</p>
      )}
    </div>
  );
}