"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";

type CheckoutForm = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  notes: string;
};

type PaymentMethod = "cod" | "card";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    phone: "",
    address: "",
    city: "Kathmandu",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const [loading, setLoading] = useState(false);

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    if (!form.fullName.trim() || !form.phone.trim() || !form.address.trim()) {
      alert("Please fill in your name, phone number, and address.");
      return;
    }

    setLoading(true);

    try {
      const orderId = `ORD-${Date.now()}`;

      const order = {
        id: orderId,
        paymentMethod,
        customer: {
          fullName: form.fullName,
          phone: form.phone,
          address: form.address,
          city: form.city,
          notes: form.notes,
        },
        items: cart,
        totalItems,
        subtotal,
        createdAt: new Date().toISOString(),
      };

      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

      localStorage.setItem("orders", JSON.stringify([order, ...existingOrders]));
      localStorage.setItem("lastOrder", JSON.stringify(order));

      const productLines = cart
        .map(
          (item, index) =>
            `${index + 1}. ${item.name} | Size: ${item.size} | Qty: ${
              item.quantity
            } | NPR ${(item.price * item.quantity).toLocaleString()}`
        )
        .join("\n");

      const whatsappMessage = encodeURIComponent(
        `Hello, I want to place an order.

Order ID: ${orderId}

Customer Details:
Name: ${form.fullName}
Phone: ${form.phone}
Address: ${form.address}
City: ${form.city}
Notes: ${form.notes || "None"}
Payment Method: ${
          paymentMethod === "cod" ? "Cash on Delivery" : "Pay by Card"
        }

Order Items:
${productLines}

Total Items: ${totalItems}
Subtotal: NPR ${subtotal.toLocaleString()}`
      );

      const whatsappNumber = "9779800000000";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      window.open(whatsappUrl, "_blank");

      clearCart();
      router.push(`/order-success?orderId=${orderId}`);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong while placing the order.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">
            Your cart is empty
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Add some products before going to checkout.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Shop Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm text-gray-500">Home / Cart / Checkout</p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Checkout
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Fill your details and confirm your order through WhatsApp.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Shipping Details
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
                placeholder="98XXXXXXXX"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                placeholder="Kathmandu"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Delivery Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your delivery address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Order Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={handleChange}
                placeholder="Color preference, landmark, delivery time, etc."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 p-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Payment Method
            </h2>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`flex-1 rounded-full border px-5 py-3 text-sm font-medium transition ${
                  paymentMethod === "card"
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                Pay by Card
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("cod")}
                className={`flex-1 rounded-full border px-5 py-3 text-sm font-medium transition ${
                  paymentMethod === "cod"
                    ? "border-[#7A1F2A] bg-[#7A1F2A] text-white"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                Cash on Delivery
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              {paymentMethod === "cod"
                ? "Customer will pay when the order is delivered."
                : "Card payment is selected. You can connect a real payment gateway later."}
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#faf7f3] p-4 text-sm text-gray-700">
            After clicking <span className="font-semibold">Place Order</span>,
            your order will:
            <br />
            1. Be saved in localStorage
            <br />
            2. Open WhatsApp with order details
            <br />
            3. Redirect to success page
          </div>
        </section>

        <aside className="h-fit rounded-2xl border border-gray-200 bg-[#faf7f3] p-5 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

          <div className="mt-5 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4"
              >
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Size: {item.size} · Qty: {item.quantity}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-semibold text-gray-900">
                  NPR {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

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
              <span>Payment</span>
              <span>
                {paymentMethod === "cod" ? "Cash on Delivery" : "Pay by Card"}
              </span>
            </div>

            <div className="border-t border-gray-300 pt-3">
              <div className="flex items-center justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>NPR {subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : "Place Order"}
          </button>

          <Link
            href="/cart"
            className="mt-3 flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
          >
            Back to Cart
          </Link>
        </aside>
      </div>
    </main>
  );
}