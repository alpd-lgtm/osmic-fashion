"use client";

import { useCart } from "@/components/CartProvider";

type AddToCartButtonProps = {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
  };
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:self-start"
    >
      Add to Cart
    </button>
  );
}