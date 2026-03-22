import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 py-10 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="grid grid-cols-1 items-center gap-10 rounded-[2rem] bg-[#FAF7F3] px-6 py-10 ring-1 ring-gray-100 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#7A1F2A]">
            New Collection
          </p>

          <div className="mt-4 h-px w-24 bg-[#7A1F2A]" />

          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
            Elegant fashion pieces for every occasion
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Discover graceful kurtas, sarees, and modern boutique styles with a
            clean and simple shopping experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Shop All Products
            </Link>

            <Link
              href="/products?category=kurtha"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
            >
              Browse Kurthas
            </Link>
          </div>
        </div>

        <div className="relative h-[340px] w-full overflow-hidden rounded-[2rem] bg-white ring-1 ring-gray-100 sm:h-[420px] lg:h-[560px]">
          <Image
            src="/products/kurtha-1.avif"
            alt="Featured fashion"
            fill
            priority
            className="object-contain p-6 sm:p-8"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#7A1F2A]">
              Featured
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-medium text-gray-600 underline underline-offset-4 hover:text-[#7A1F2A]"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group rounded-3xl bg-white p-4 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[360px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug text-[#111111]">
                    {product.name}
                  </h3>

                  <p className="shrink-0 text-sm font-semibold text-[#7A1F2A] sm:text-base">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <Link
                  href="/products"
                  className="mt-4 inline-block text-sm font-medium text-[#111111] underline underline-offset-4 hover:text-[#7A1F2A]"
                >
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link
          href="/products?category=kurtha"
          className="rounded-3xl bg-[#FAF7F3] p-6 ring-1 ring-gray-100 transition hover:bg-white hover:shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#111111]">
            Kurthas
          </h3>
          <p className="mt-2 leading-7 text-gray-600">
            Elegant daily and festive wear.
          </p>
        </Link>

        <Link
          href="/products?category=saree"
          className="rounded-3xl bg-[#FAF7F3] p-6 ring-1 ring-gray-100 transition hover:bg-white hover:shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#111111]">
            Sarees
          </h3>
          <p className="mt-2 leading-7 text-gray-600">
            Graceful traditional fashion pieces.
          </p>
        </Link>

        <Link
          href="/products?category=top"
          className="rounded-3xl bg-[#FAF7F3] p-6 ring-1 ring-gray-100 transition hover:bg-white hover:shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#111111]">Tops</h3>
          <p className="mt-2 leading-7 text-gray-600">
            Modern styles for casual looks.
          </p>
        </Link>
      </section>
    </main>
  );
}