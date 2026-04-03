"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Your cart is empty
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
            Looks like you have not added anything yet. Browse our latest styles
            and add your favorites to the cart.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm text-gray-500">Home / Cart</p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Shopping Cart
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          {totalItems} item{totalItems > 1 ? "s" : ""} in your cart
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
        {/* LEFT SIDE - CART ITEMS */}
        <section className="space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                          Size: <span className="font-medium text-gray-700">{item.size}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="shrink-0 text-sm font-medium text-red-500 transition hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>

                    <p className="mt-3 text-sm font-medium text-gray-900 sm:text-base">
                      NPR {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center overflow-hidden rounded-full border border-gray-300">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                        className="flex h-10 w-10 items-center justify-center text-lg text-gray-700 transition hover:bg-gray-100"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>

                      <span className="flex h-10 min-w-[44px] items-center justify-center text-sm font-semibold text-gray-900">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                        className="flex h-10 w-10 items-center justify-center text-lg text-gray-700 transition hover:bg-gray-100"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-gray-900 sm:text-base">
                      NPR {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* RIGHT SIDE - SUMMARY */}
        <aside className="h-fit rounded-2xl border border-gray-200 bg-[#faf7f3] p-5 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span className="text-gray-500">Calculated on checkout</span>
            </div>

            <div className="border-t border-gray-300 pt-3">
              <div className="flex items-center justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>NPR {subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/products"
            className="mt-3 flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
          >
            Continue Shopping
          </Link>

          <p className="mt-4 text-xs leading-5 text-gray-500">
            Orders can be completed through checkout and WhatsApp confirmation.
          </p>
        </aside>
      </div>
    </main>
  );
}