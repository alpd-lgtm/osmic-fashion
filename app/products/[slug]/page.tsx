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

  const whatsappNumber = "9779800000000"; // replace with your real number
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to order "${product.name}" for NPR ${product.price}. Please share availability and delivery details.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 pt-4 pb-8 sm:px-6 sm:pt-5 lg:px-8">
      {/* BREADCRUMB */}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="transition hover:text-[#7A1F2A]">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="transition hover:text-[#7A1F2A]">
          Products
        </Link>
        <span>/</span>
        <span className="text-[#7A1F2A]">{product.name}</span>
      </div>

      {/* PRODUCT DETAIL */}
      <section className="rounded-[1.75rem] bg-[#FFFDFC] p-4 ring-1 ring-gray-100 sm:p-5 lg:p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* IMAGE */}
          <div className="relative">
            <div className="group relative h-[320px] w-full overflow-hidden rounded-[1.5rem] bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[420px] lg:h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.06] sm:p-5"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center lg:pr-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A] sm:text-xs">
              {product.category}
            </p>

            <h1 className="mt-2 text-2xl font-bold leading-tight text-[#111111] sm:text-3xl lg:text-[2.2rem]">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-xl font-semibold text-[#111111] sm:text-2xl">
                NPR {product.price}
              </p>

              <span className="inline-flex items-center rounded-full bg-[#F6EFE8] px-3 py-1 text-xs font-medium text-[#7A1F2A] ring-1 ring-[#7A1F2A]/10">
                Ready to order
              </span>
            </div>

            <div className="mt-4 h-px w-14 bg-[#7A1F2A]" />

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              {product.description}
            </p>

            {/* INFO PILLS */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
                Boutique style
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
                Premium fabric
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
                Kathmandu delivery
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:opacity-95"
              >
                Order on WhatsApp
              </a>

              <Link
                href="/products"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
              >
                Back to Products
              </Link>
            </div>

            {/* EXTRA NOTE */}
            <div className="mt-6 rounded-[1.25rem] bg-[#FCFAF8] px-4 py-4 ring-1 ring-gray-100">
              <p className="text-sm leading-6 text-gray-600">
                Simple ordering available through WhatsApp with the product name
                already filled in for faster checkout.
              </p>
            </div>

            {/* PRODUCT INFO */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-white px-4 py-4 ring-1 ring-gray-100">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#7A1F2A]">
                  Size & Fit
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Comfortable regular fit designed for easy daily wear and festive
                  styling.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-white px-4 py-4 ring-1 ring-gray-100">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#7A1F2A]">
                  Delivery
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Delivery available inside Kathmandu. Contact on WhatsApp for
                  timing and availability.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-white px-4 py-4 ring-1 ring-gray-100">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#7A1F2A]">
                  Care
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Gentle wash recommended to help preserve the fabric feel, shape,
                  and finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="mt-8 rounded-[1.75rem] bg-[#FCFAF8] px-4 py-7 ring-1 ring-gray-100 sm:mt-10 sm:px-5 sm:py-8 lg:px-6">
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A] sm:text-xs">
              You may also like
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <article
                key={item.id}
                className="group rounded-[1.5rem] bg-white p-3 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-[#7A1F2A]/15"
              >
                <Link href={`/products/${item.slug}`} className="block">
                  <div className="relative h-[250px] w-full overflow-hidden rounded-[1.25rem] bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[270px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                </Link>

                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A1F2A]">
                    {item.category}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold leading-snug text-[#111111] sm:text-base">
                      <Link href={`/products/${item.slug}`}>{item.name}</Link>
                    </h3>

                    <p className="shrink-0 text-sm font-semibold text-[#111111]">
                      NPR {item.price}
                    </p>
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <Link
                    href={`/products/${item.slug}`}
                    className="mt-3 inline-flex items-center text-sm font-medium text-[#111111] underline underline-offset-4 transition hover:text-[#7A1F2A]"
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