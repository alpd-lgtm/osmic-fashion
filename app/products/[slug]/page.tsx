import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug
    )
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-[#7A1F2A]">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#7A1F2A]">
          Products
        </Link>
        <span>/</span>
        <span className="text-[#7A1F2A]">{product.name}</span>
      </div>

      <section className="rounded-[2rem] bg-[#FFFDFC] p-5 ring-1 ring-gray-100 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[500px] lg:h-[620px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-6 sm:p-8"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#7A1F2A]">
              {product.category}
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl font-semibold text-[#7A1F2A] sm:text-3xl">
              NPR {product.price}
            </p>

            <div className="mt-6 h-px w-24 bg-[#7A1F2A]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <p>• Elegant boutique styling for festive and everyday wear.</p>
              <p>• Direct order and availability confirmation via WhatsApp.</p>
              <p>• Delivery and pickup options can be confirmed after inquiry.</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
              >
                Back to Products
              </Link>

              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#7A1F2A]">
              You may also like
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <article
                key={item.id}
                className="group rounded-3xl bg-white p-4 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Link href={`/products/${item.slug}`} className="block">
                  <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-[#FAF7F3] ring-1 ring-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
                    {item.category}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[#111111]">
                      <Link href={`/products/${item.slug}`}>{item.name}</Link>
                    </h3>

                    <p className="text-sm font-semibold text-[#7A1F2A] sm:text-base">
                      NPR {item.price}
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <Link
                    href={`/products/${item.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-[#111111] underline underline-offset-4 hover:text-[#7A1F2A]"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}