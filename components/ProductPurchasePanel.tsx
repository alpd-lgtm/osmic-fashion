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
    `Hi, I want to order:
Product: ${product.name}
Size: ${selectedSize || "Not selected"}
Price: NPR ${product.price}
Link: ${typeof window !== "undefined" ? window.location.href : ""}`
  );

  const whatsappUrl = `https://wa.me/9779800000000?text=${whatsappMessage}`;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      size: selectedSize || "Free Size",
    });

    alert("Added to cart");
  };

  return (
    <div className="mt-7 border-t border-gray-100 pt-7">
      {sizes.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-[#111111]">Select Size</p>

          <div className="mt-4 flex flex-wrap gap-3">
            {sizes.map((size) => {
              const active = selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[52px] rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-[#7A1F2A] bg-[#7A1F2A] text-white"
                      : "border-[#D9D0C7] bg-white text-[#111111] hover:border-[#7A1F2A]"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          Add to Cart
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#7A1F2A] bg-white px-6 py-3 text-sm font-semibold text-[#7A1F2A] transition duration-300 hover:bg-[#7A1F2A] hover:text-white hover:shadow-md"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}