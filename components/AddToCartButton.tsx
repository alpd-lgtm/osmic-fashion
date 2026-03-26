"use client";

import { useCart } from "@/components/CartProvider";

type AddToCartButtonProps = {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
    category: string;
  };
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
    >
      Add to Cart
    </button>
  );
}