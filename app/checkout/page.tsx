"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

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

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();

  const [method, setMethod] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pickupNote, setPickupNote] = useState("");
  const [error, setError] = useState("");

  const handlePlaceOrder = () => {
    setError("");

    if (!fullName.trim() || !phone.trim()) {
      setError("Please fill in your full name and phone number.");
      return;
    }

    if (method === "delivery") {
      if (!address.trim() || !city.trim()) {
        setError("Please fill in your delivery address and city / area.");
        return;
      }

      if (paymentMethod === "card") {
        setError(
          "For now, please use Cash on Delivery. Card payment will be added later."
        );
        return;
      }
    }

    const newOrder: SavedOrder = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      method,
      paymentMethod,
      address: address.trim(),
      city: city.trim(),
      pickupNote: pickupNote.trim(),
      items: cart,
      total: cartTotal,
    };

    const existingOrders = localStorage.getItem("orders");
    const parsedOrders: SavedOrder[] = existingOrders
      ? JSON.parse(existingOrders)
      : [];

    localStorage.setItem("orders", JSON.stringify([newOrder, ...parsedOrders]));
    localStorage.setItem("latestOrder", JSON.stringify(newOrder));

    const orderLines = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}\nSize: ${item.size}\nQty: ${item.quantity}\nPrice: NPR ${item.price}\nSubtotal: NPR ${item.price * item.quantity}`
      )
      .join("\n\n");

    const message =
      method === "delivery"
        ? `Hi, I want to place an order.

Order ID: ${newOrder.id}
Order Type: Delivery
Payment Method: ${
            paymentMethod === "cod" ? "Cash on Delivery" : "Card"
          }

Customer Details:
Name: ${fullName}
Phone: ${phone}
Address: ${address}
City/Area: ${city}

Items:
${orderLines}

Total: NPR ${cartTotal}`
        : `Hi, I want to place an order.

Order ID: ${newOrder.id}
Order Type: Click & Collect

Customer Details:
Name: ${fullName}
Phone: ${phone}
Pickup Note: ${pickupNote || "None"}

Items:
${orderLines}

Total: NPR ${cartTotal}`;

    const whatsappUrl = `https://wa.me/9779767483750?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    clearCart();
    router.push("/order-success");
  };

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] bg-[#FCFAF8] px-6 py-12 text-center ring-1 ring-[#EEE7DF]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
            Checkout
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#111111]">
            Your cart is empty
          </h1>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            Add some products before going to checkout.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Browse Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-[#FCFAF8] px-5 py-8 ring-1 ring-[#EEE7DF] sm:px-7 sm:py-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
          Checkout
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[#111111] sm:text-4xl">
          Complete Your Order
        </h1>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          Choose delivery or click & collect, then complete your order.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] bg-white p-5 ring-1 ring-[#EAE4DD] sm:p-6">
            <h2 className="text-lg font-semibold text-[#111111]">
              Fulfillment Method
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMethod("delivery")}
                className={`min-h-[48px] rounded-full px-4 py-3 text-sm font-medium transition ${
                  method === "delivery"
                    ? "bg-[#7A1F2A] text-white"
                    : "border border-[#E7DED5] text-[#111111] hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                }`}
              >
                Delivery
              </button>

              <button
                type="button"
                onClick={() => setMethod("pickup")}
                className={`min-h-[48px] rounded-full px-4 py-3 text-sm font-medium transition ${
                  method === "pickup"
                    ? "bg-[#7A1F2A] text-white"
                    : "border border-[#E7DED5] text-[#111111] hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                }`}
              >
                Click & Collect
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-5 ring-1 ring-[#EAE4DD] sm:p-6">
            <h2 className="text-lg font-semibold text-[#111111]">
              {method === "delivery" ? "Delivery Details" : "Pickup Details"}
            </h2>

            <div className="mt-5 space-y-4">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="min-h-[48px] w-full rounded-full border border-[#E7DED5] px-4 py-3 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#7A1F2A]"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="min-h-[48px] w-full rounded-full border border-[#E7DED5] px-4 py-3 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#7A1F2A]"
              />

              {method === "delivery" ? (
                <>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery Address"
                    className="min-h-[48px] w-full rounded-full border border-[#E7DED5] px-4 py-3 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#7A1F2A]"
                  />

                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City / Area"
                    className="min-h-[48px] w-full rounded-full border border-[#E7DED5] px-4 py-3 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#7A1F2A]"
                  />
                </>
              ) : (
                <input
                  value={pickupNote}
                  onChange={(e) => setPickupNote(e.target.value)}
                  placeholder="Pickup Date / Note"
                  className="min-h-[48px] w-full rounded-full border border-[#E7DED5] px-4 py-3 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#7A1F2A]"
                />
              )}
            </div>
          </div>

          {method === "delivery" && (
            <div className="rounded-[1.75rem] bg-white p-5 ring-1 ring-[#EAE4DD] sm:p-6">
              <h2 className="text-lg font-semibold text-[#111111]">
                Payment Method
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`min-h-[48px] rounded-full px-4 py-3 text-sm font-medium transition ${
                    paymentMethod === "card"
                      ? "bg-[#7A1F2A] text-white"
                      : "border border-[#E7DED5] text-[#111111] hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                  }`}
                >
                  Pay by Card
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`min-h-[48px] rounded-full px-4 py-3 text-sm font-medium transition ${
                    paymentMethod === "cod"
                      ? "bg-[#7A1F2A] text-white"
                      : "border border-[#E7DED5] text-[#111111] hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                  }`}
                >
                  Cash on Delivery
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {paymentMethod === "card"
                  ? "Card payment can be added later. For now, use Cash on Delivery."
                  : "Customer will pay when the order is delivered."}
              </p>
            </div>
          )}

          {error && (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <p className="text-sm text-gray-600">
            You will be redirected to WhatsApp to confirm your order.
          </p>

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            {method === "delivery"
              ? paymentMethod === "card"
                ? "Continue to Card Payment"
                : "Send Order on WhatsApp"
              : "Send Pickup Order on WhatsApp"}
          </button>
        </div>

        <aside className="h-fit rounded-[1.75rem] bg-white p-5 ring-1 ring-[#EAE4DD] sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A]">
            Summary
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#111111]">
            Order Summary
          </h2>

          <div className="mt-5 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-start justify-between gap-3 border-b border-[#F1ECE6] pb-4 last:border-b-0 last:pb-0"
              >
                <div className="min-w-0">
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

          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>NPR {cartTotal}</span>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
            <span>{method === "delivery" ? "Delivery" : "Pickup"}</span>
            <span>{method === "delivery" ? "Calculated later" : "Free"}</span>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#F1ECE6] pt-5">
            <span className="text-base font-semibold text-[#111111]">Total</span>
            <span className="text-xl font-semibold text-[#111111]">
              NPR {cartTotal}
            </span>
          </div>

          <Link
            href="/cart"
            className="mt-6 inline-flex w-full min-h-[48px] items-center justify-center rounded-full border border-[#E7DED5] px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
          >
            Back to Cart
          </Link>
        </aside>
      </section>
    </main>
  );
}