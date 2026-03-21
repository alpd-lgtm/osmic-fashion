import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappNumber = "9779800000000";
  const whatsappMessage = `Hi, I want to order ${product.name}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/products"
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Back to products
        </Link>
      </div>

      {/* TOP SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* IMAGE */}
        <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[650px] rounded-3xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-semibold">NPR {product.price}</p>

          <p className="mt-6 text-gray-600 leading-7">
            {product.description}
          </p>

          <div className="mt-8 rounded-3xl border p-6">
            <h2 className="text-2xl font-semibold">Order this product</h2>
            <p className="mt-3 text-gray-600 leading-7">
              To order this item, send us a quick message on WhatsApp. We can
              confirm availability, size, color, and delivery details there.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 rounded-xl bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-4">
              <p className="font-medium">Quality</p>
              <p className="mt-2 text-sm text-gray-600">
                Carefully selected fashion pieces.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="font-medium">Support</p>
              <p className="mt-2 text-sm text-gray-600">
                Easy ordering and customer help.
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="font-medium">Style</p>
              <p className="mt-2 text-sm text-gray-600">
                Elegant looks for daily and festive wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                More in this category
              </p>
              <h2 className="mt-2 text-2xl font-bold">Related Products</h2>
            </div>

            <Link
              href={`/products?category=${product.category}`}
              className="text-sm text-gray-600 hover:text-black"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <div key={item.id} className="group">
                <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                  <p className="mt-3 font-semibold">NPR {item.price}</p>

                  <Link
                    href={`/products/${item.slug}`}
                    className="inline-block mt-3 text-sm font-medium underline"
                  >
                    View Product →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}