"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-[#FCFAF8] px-6 py-12 text-center ring-1 ring-[#EEE7DF]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
            Your Cart
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#111111]">
            Your cart is empty
          </h1>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            Browse the collection and add your favorite pieces.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-[#FCFAF8] px-5 py-8 ring-1 ring-[#EEE7DF] sm:px-7 sm:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
              Cart
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-4xl">
              Shopping Cart
            </h1>
          </div>

          <button
            onClick={clearCart}
            className="text-sm font-medium text-[#7A1F2A] transition hover:opacity-80"
          >
            Clear Cart
          </button>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.7fr]">
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={`${item.id}-${item.size}`}
              className="flex gap-4 rounded-[1.75rem] bg-white p-4 ring-1 ring-[#EAE4DD] sm:gap-5 sm:p-5"
            >
              <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-[1.25rem] bg-[#F6F1EB] sm:h-32 sm:w-28">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-[#111111]">
                      <Link href={`/products/${item.slug}`}>{item.name}</Link>
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">NPR {item.price}</p>
                    <p className="mt-1 text-sm text-gray-600">Size: {item.size}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-sm font-medium text-[#7A1F2A] transition hover:opacity-80"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                  <div className="inline-flex items-center overflow-hidden rounded-full border border-[#E7DED5]">
                    <button
                      onClick={() => decreaseQuantity(item.id, item.size)}
                      className="inline-flex h-10 w-10 items-center justify-center text-lg text-[#111111] transition hover:bg-[#F6F1EB]"
                    >
                      -
                    </button>

                    <span className="inline-flex min-w-[44px] items-center justify-center text-sm font-medium text-[#111111]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id, item.size)}
                      className="inline-flex h-10 w-10 items-center justify-center text-lg text-[#111111] transition hover:bg-[#F6F1EB]"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-sm font-medium text-[#111111]">
                    Subtotal: NPR {item.price * item.quantity}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-[1.75rem] bg-white p-5 ring-1 ring-[#EAE4DD] sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
            Summary
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#111111]">
            Order Summary
          </h2>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <span>Total</span>
            <span className="text-lg font-semibold text-[#111111]">
              NPR {cartTotal}
            </span>
          </div>

          <Link
            href="/products"
            className="mt-6 inline-flex w-full min-h-[48px] items-center justify-center rounded-full border border-[#E7DED5] px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
          >
            Continue Shopping
          </Link>
        </aside>
      </section>
    </main>
  );
}