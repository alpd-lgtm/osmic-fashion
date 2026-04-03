"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function OrdersPage() {
  const [orders, setOrders] = useState<SavedOrder[]>([]);

  useEffect(() => {
    try {
      const savedOrders = localStorage.getItem("orders");
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    } catch (error) {
      console.error("Failed to load orders:", error);
    }
  }, []);

  const handleClearOrders = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all saved orders from this device?"
    );

    if (!confirmed) return;

    localStorage.removeItem("orders");
    localStorage.removeItem("lastOrder");
    setOrders([]);
  };

  if (orders.length === 0) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            No saved orders yet
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            Orders placed from checkout will appear here on this device.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Shop Products
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

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Home / Orders</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Order History
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {orders.length} saved order{orders.length > 1 ? "s" : ""} on this
            device
          </p>
        </div>

        <button
          onClick={handleClearOrders}
          className="inline-flex items-center justify-center rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          Clear Saved Orders
        </button>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <section
            key={order.id}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="border-b border-gray-100 bg-[#faf7f3] px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                    Order ID
                  </p>
                  <p className="mt-1 text-base font-semibold text-gray-900">
                    {order.id}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                      Date
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                      Status
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      Pending confirmation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Ordered Items
                </h2>

                <div className="mt-4 space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={`${order.id}-${item.id}-${item.size}`}
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

              <div className="space-y-5">
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
                      <span className="font-medium text-gray-900">
                        Address:
                      </span>{" "}
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
                    Summary
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
                        Confirmed later
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
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}