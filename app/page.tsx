import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-gray-500">
            Collection
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Elegant fashion pieces for every occasion
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover stylish kurthas, sarees, and tops with easy browsing and
            direct WhatsApp ordering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              Shop All Products
            </Link>

            <Link
              href="/products?category=kurtha"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 transition hover:border-black"
            >
              Browse Kurthas
            </Link>
          </div>
        </div>

        <div className="relative h-[360px] w-full overflow-hidden rounded-[2rem] bg-gray-50 sm:h-[440px] lg:h-[560px]">
          <Image
            src="/products/kurtha-1.avif"
            alt="Featured fashion"
            fill
            priority
            className="object-contain p-6 sm:p-8"
          />
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-bold">Featured Products</h2>
          </div>

          <Link
            href="/products"
            className="text-sm text-gray-600 underline underline-offset-4 hover:text-black"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id} className="group">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug">
                    <Link href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="shrink-0 text-base font-semibold">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-block mt-4 text-sm font-medium underline underline-offset-4 hover:text-gray-700"
                >
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link
          href="/products?category=kurtha"
          className="rounded-3xl bg-gray-50 p-6 transition hover:bg-gray-100"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Kurthas</h3>
          <p className="mt-2 text-gray-600 leading-7">
            Elegant daily and festive wear.
          </p>
        </Link>

        <Link
          href="/products?category=saree"
          className="rounded-3xl bg-gray-50 p-6 transition hover:bg-gray-100"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Sarees</h3>
          <p className="mt-2 text-gray-600 leading-7">
            Graceful traditional fashion pieces.
          </p>
        </Link>

        <Link
          href="/products?category=top"
          className="rounded-3xl bg-gray-50 p-6 transition hover:bg-gray-100"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Tops</h3>
          <p className="mt-2 text-gray-600 leading-7">
            Modern styles for casual looks.
          </p>
        </Link>
      </section>
    </main>
  );
}