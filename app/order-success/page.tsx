"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type OrderItem = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type SavedOrder = {
  id: string;
  paymentMethod?: "cod" | "card";
  customer: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    notes: string;
  };
  items: OrderItem[];
  totalItems: number;
  subtotal: number;
  createdAt: string;
};

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderIdFromUrl = searchParams.get("orderId");

  const [order, setOrder] = useState<SavedOrder | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");

    if (savedOrder) {
      const parsedOrder: SavedOrder = JSON.parse(savedOrder);

      if (!orderIdFromUrl || parsedOrder.id === orderIdFromUrl) {
        setOrder(parsedOrder);
      }
    }
  }, [orderIdFromUrl]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
            ✓
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-600">
            Order placed
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Thank you for your order
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            Your order has been received. We will confirm the details through
            WhatsApp or phone soon.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#faf7f3] p-5">
          <div className="flex flex-col gap-3 text-sm text-gray-700 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-gray-500">
                Order ID
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {order?.id || orderIdFromUrl || "Not available"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-gray-500">
                Status
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                Pending confirmation
              </p>
            </div>
          </div>
        </div>

        {order && (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-5">
                <h2 className="text-base font-semibold text-gray-900">
                  Customer Details
                </h2>

                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <p>
                    <span className="font-medium text-gray-900">Name:</span>{" "}
                    {order.customer.fullName}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Phone:</span>{" "}
                    {order.customer.phone}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">City:</span>{" "}
                    {order.customer.city}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Address:</span>{" "}
                    {order.customer.address}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Notes:</span>{" "}
                    {order.customer.notes || "None"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5">
                <h2 className="text-base font-semibold text-gray-900">
                  Order Summary
                </h2>

                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between">
                    <span>Total Items</span>
                    <span className="font-medium text-gray-900">
                      {order.totalItems}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      NPR {order.subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Payment Method</span>
                    <span className="font-medium text-gray-900">
                      {order.paymentMethod === "card"
                        ? "Pay by Card"
                        : "Cash on Delivery"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span className="font-medium text-gray-900">
                      Confirm on WhatsApp
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex items-center justify-between text-base font-semibold text-gray-900">
                      <span>Total</span>
                      <span>NPR {order.subtotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 p-5">
              <h2 className="text-base font-semibold text-gray-900">
                Ordered Items
              </h2>

              <div className="mt-4 space-y-4">
                {order.items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <p className="line-clamp-2 text-sm font-medium text-gray-900 sm:text-base">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Size: {item.size} · Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-gray-900">
                      NPR {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!order && (
          <div className="mt-8 rounded-2xl border border-gray-200 p-5 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Order details not found
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your order may still be placed successfully, but the saved order
              summary is not available on this device.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}