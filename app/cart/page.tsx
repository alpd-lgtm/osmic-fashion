"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const {
    items,
    itemCount,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <section className="mb-5 rounded-[1.5rem] bg-[#FFFCFA] px-5 py-5 ring-1 ring-gray-100 sm:px-7 sm:py-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A] sm:text-xs">
          Shopping Bag
        </p>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
          Your Cart
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-[15px]">
          Review your selected items before checkout.
        </p>
      </section>

      {items.length === 0 ? (
        <section className="rounded-[1.5rem] bg-[#FFFCFA] px-6 py-14 text-center ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold text-[#111111]">
            Your cart is empty
          </h2>

          <p className="mt-3 text-gray-600">
            Start browsing and add your favorite pieces to continue.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Shop Products
          </Link>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          <section className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.5rem] bg-white p-4 ring-1 ring-gray-100 sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={`/products/${item.slug}`}
                    className="block sm:w-[170px]"
                  >
                    <div className="relative h-[220px] w-full overflow-hidden rounded-[1.25rem] bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[190px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#7A1F2A]">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-lg font-semibold text-[#111111]">
                        <Link href={`/products/${item.slug}`}>{item.name}</Link>
                      </h2>

                      <p className="mt-2 text-sm font-medium text-[#111111]">
                        NPR {item.price}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white">
                        <button
                          type="button"
                          onClick={() => decreaseQty(item.id)}
                          className="inline-flex h-11 w-11 items-center justify-center text-lg text-[#111111] transition hover:text-[#7A1F2A]"
                        >
                          −
                        </button>

                        <span className="min-w-[42px] text-center text-sm font-medium text-[#111111]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQty(item.id)}
                          className="inline-flex h-11 w-11 items-center justify-center text-lg text-[#111111] transition hover:text-[#7A1F2A]"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <p className="text-sm font-semibold text-[#111111]">
                          NPR {item.price * item.quantity}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-medium text-[#7A1F2A] underline underline-offset-4 transition hover:opacity-80"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="h-fit rounded-[1.5rem] bg-[#FCFAF8] p-5 ring-1 ring-gray-100 sm:p-6">
            <h2 className="text-xl font-semibold text-[#111111]">
              Order Summary
            </h2>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>NPR {totalPrice}</span>
              </div>

              <div className="h-px bg-gray-200" />

              <div className="flex items-center justify-between text-base font-semibold text-[#111111]">
                <span>Total</span>
                <span>NPR {totalPrice}</span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Shipping, pickup details, and payment confirmation will be handled
              during checkout.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/checkout"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
              >
                Continue Shopping
              </Link>

              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-medium text-[#7A1F2A] underline underline-offset-4 transition hover:opacity-80"
              >
                Clear Cart
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}