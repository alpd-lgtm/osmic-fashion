"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SavedOrder = {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  method: "delivery" | "pickup";
  paymentMethod: "card" | "cod";
  address: string;
  city: string;
  pickupNote: string;
  items: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
  }[];
  total: number;
};

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<SavedOrder | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("latestOrder");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-[#FCFAF8] px-6 py-12 ring-1 ring-[#EEE7DF] sm:px-10">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7A1F2A] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
            Order Confirmed
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-[#111111] sm:text-4xl">
            Thank you for your order
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Your order has been placed successfully. We will contact you soon to
            confirm the details for delivery or pickup.
          </p>
        </div>

        {order && (
          <div className="mt-10 rounded-[1.75rem] bg-white p-5 ring-1 ring-[#EAE4DD] sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#111111]">
                  Order Details
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Order ID: {order.id}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#FCFAF8] p-4">
                <p className="text-sm font-medium text-[#111111]">Customer</p>
                <p className="mt-2 text-sm text-gray-600">{order.fullName}</p>
                <p className="mt-1 text-sm text-gray-600">{order.phone}</p>
              </div>

              <div className="rounded-2xl bg-[#FCFAF8] p-4">
                <p className="text-sm font-medium text-[#111111]">
                  Fulfillment
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {order.method === "delivery" ? "Delivery" : "Click & Collect"}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Payment:{" "}
                  {order.paymentMethod === "card"
                    ? "Card"
                    : "Cash on Delivery"}
                </p>
              </div>
            </div>

            {order.method === "delivery" ? (
              <div className="mt-4 rounded-2xl bg-[#FCFAF8] p-4">
                <p className="text-sm font-medium text-[#111111]">
                  Delivery Address
                </p>
                <p className="mt-2 text-sm text-gray-600">{order.address}</p>
                <p className="mt-1 text-sm text-gray-600">{order.city}</p>
              </div>
            ) : (
              <div className="mt-4 rounded-2xl bg-[#FCFAF8] p-4">
                <p className="text-sm font-medium text-[#111111]">
                  Pickup Note
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {order.pickupNote || "No note provided"}
                </p>
              </div>
            )}

            <div className="mt-6 rounded-2xl bg-[#FCFAF8] p-4">
              <p className="text-sm font-medium text-[#111111]">Items</p>

              <div className="mt-4 space-y-4">
                {order.items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex items-start justify-between gap-3 border-b border-[#EAE4DD] pb-4 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#111111]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Size: {item.size} · Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-[#111111]">
                      NPR {item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#EAE4DD] pt-4">
                <span className="text-base font-semibold text-[#111111]">
                  Total
                </span>
                <span className="text-xl font-semibold text-[#111111]">
                  NPR {order.total}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/products"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#E7DED5] px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}