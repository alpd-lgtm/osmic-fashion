import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl bg-[#F8F1E7] px-4 py-10 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#FDF8F2] px-6 py-10 shadow-sm ring-1 ring-[#E9D9C3] lg:px-10">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#C6922B]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-16 h-56 w-56 rounded-full bg-[#7A1F2A]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#7A1F2A]/5 blur-3xl" />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C6922B]">
              Traditional Collection
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#2B1D18] sm:text-5xl lg:text-6xl">
              Elegant fashion pieces inspired by timeless tradition
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#5C463D] sm:text-lg sm:leading-8">
              Discover graceful kurtas, sarees, and boutique styles crafted for
              everyday elegance and festive occasions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-xl bg-[#7A1F2A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#651822]"
              >
                Shop All Products
              </Link>

              <Link
                href="/products?category=kurtha"
                className="rounded-xl border border-[#7A1F2A] bg-white px-6 py-3 text-sm font-medium text-[#7A1F2A] transition hover:bg-[#F6ECE2]"
              >
                Browse Kurthas
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute inset-0 scale-[0.92] rounded-[2rem] bg-[#7A1F2A]/6 blur-2xl" />
            <div className="relative h-[340px] w-full overflow-hidden rounded-[2rem] border border-[#E6D3BA] bg-[#F6ECE2] shadow-sm sm:h-[420px] lg:h-[560px]">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent" />
              <Image
                src="/products/kurtha-1.avif"
                alt="Featured fashion"
                fill
                priority
                className="object-contain p-6 sm:p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#C6922B]">
              Featured
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#2B1D18] sm:text-3xl">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-medium text-[#7A1F2A] underline underline-offset-4 hover:text-[#651822]"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group rounded-3xl bg-[#FFFDF9] p-4 shadow-sm ring-1 ring-[#EADBC6] transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-[#F6ECE2] ring-1 ring-[#E7D6C0] sm:h-[360px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#C6922B]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug text-[#2B1D18]">
                    {product.name}
                  </h3>

                  <p className="shrink-0 text-sm font-semibold text-[#7A1F2A] sm:text-base">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#5C463D]">
                  {product.description}
                </p>

                <Link
                  href="/products"
                  className="mt-4 inline-block text-sm font-medium text-[#7A1F2A] underline underline-offset-4 hover:text-[#651822]"
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
          className="rounded-3xl bg-[#FFF9F2] p-6 ring-1 ring-[#E8D7C0] transition hover:bg-[#F8EFE5]"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#C6922B]">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#2B1D18]">
            Kurthas
          </h3>
          <p className="mt-2 leading-7 text-[#5C463D]">
            Elegant daily and festive wear.
          </p>
        </Link>

        <Link
          href="/products?category=saree"
          className="rounded-3xl bg-[#FFF9F2] p-6 ring-1 ring-[#E8D7C0] transition hover:bg-[#F8EFE5]"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#C6922B]">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#2B1D18]">
            Sarees
          </h3>
          <p className="mt-2 leading-7 text-[#5C463D]">
            Graceful traditional fashion pieces.
          </p>
        </Link>

        <Link
          href="/products?category=top"
          className="rounded-3xl bg-[#FFF9F2] p-6 ring-1 ring-[#E8D7C0] transition hover:bg-[#F8EFE5]"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#C6922B]">
            Category
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[#2B1D18]">Tops</h3>
          <p className="mt-2 leading-7 text-[#5C463D]">
            Modern styles for casual looks.
          </p>
        </Link>
      </section>
    </main>
  );
}