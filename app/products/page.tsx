import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;

  const selectedCategory = params.category || "all";
  const searchText = params.search?.toLowerCase().trim() || "";

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch =
      searchText === "" ||
      product.name.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const searchQuery = params.search
    ? `&search=${encodeURIComponent(params.search)}`
    : "";

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      {/* PAGE INTRO */}
      <section className="mb-4 rounded-[1.5rem] bg-[#FFFCFA] px-5 py-5 ring-1 ring-gray-100 sm:px-7 sm:py-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#7A1F2A] sm:text-xs">
          Collection
        </p>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
          Our Products
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-[15px]">
          Discover elegant fashion pieces with a clean, refined, and simple
          shopping experience.
        </p>
      </section>

      {/* SEARCH + FILTER */}
      <section className="mb-4 rounded-[1.5rem] bg-[#FCFAF8] p-3 ring-1 ring-gray-100 sm:p-4">
        <form action="/products" method="GET">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex-1">
              <input
                type="text"
                name="search"
                defaultValue={params.search || ""}
                placeholder="Search by name or style..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-[#111111] outline-none transition focus:border-[#7A1F2A]"
              />
            </div>

            <div className="lg:w-[200px]">
              <select
                name="category"
                defaultValue={selectedCategory}
                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-[#111111] outline-none transition focus:border-[#7A1F2A]"
              >
                <option value="all">All Categories</option>
                <option value="kurtha">Kurthas</option>
                <option value="saree">Sarees</option>
                <option value="top">Tops</option>
              </select>
            </div>

            <button
              type="submit"
              className="h-12 rounded-xl bg-[#7A1F2A] px-6 text-sm font-medium text-white transition hover:opacity-90 lg:min-w-[120px]"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      {/* RESULT ROW */}
      <section className="mb-5 flex flex-col gap-3 sm:mb-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-gray-600">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/products"
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
              selectedCategory === "all" && !params.search
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:text-[#7A1F2A]"
            }`}
          >
            All
          </Link>

          <Link
            href={`/products?category=kurtha${searchQuery}`}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
              selectedCategory === "kurtha"
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:text-[#7A1F2A]"
            }`}
          >
            Kurthas
          </Link>

          <Link
            href={`/products?category=saree${searchQuery}`}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
              selectedCategory === "saree"
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:text-[#7A1F2A]"
            }`}
          >
            Sarees
          </Link>

          <Link
            href={`/products?category=top${searchQuery}`}
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
              selectedCategory === "top"
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:text-[#7A1F2A]"
            }`}
          >
            Tops
          </Link>

          {(params.search || selectedCategory !== "all") && (
            <Link
              href="/products"
              className="ml-1 text-sm font-medium text-[#7A1F2A] underline underline-offset-4 hover:opacity-80"
            >
              Clear filters
            </Link>
          )}
        </div>
      </section>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 ? (
        <section className="rounded-[1.5rem] bg-[#FFFCFA] px-6 py-14 text-center ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold text-[#111111]">
            No products found
          </h2>
          <p className="mt-3 text-gray-600">
            Try changing your search or category.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex rounded-xl bg-[#7A1F2A] px-5 py-3 text-white transition hover:opacity-90"
          >
            View All Products
          </Link>
        </section>
      ) : (
        <>
          {/* PRODUCT GRID */}
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group flex h-full flex-col rounded-[1.5rem] bg-white p-3 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#7A1F2A]/20"
              >
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[1.25rem] bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[260px] lg:h-[280px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </Link>

                <div className="mt-4 flex flex-1 flex-col">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#7A1F2A]">
                    {product.category}
                  </p>

                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h2 className="text-[15px] font-semibold leading-snug text-[#111111] sm:text-base">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>

                    <p className="shrink-0 text-sm font-semibold text-[#111111]">
                      NPR {product.price}
                    </p>
                  </div>

                  <p className="mt-2 flex-1 line-clamp-2 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-[#111111] underline underline-offset-4 transition hover:text-[#7A1F2A]"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </section>

          {/* TRUST BLOCK */}
          <section className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[#FCFAF8] px-5 py-5 ring-1 ring-gray-100">
              <h3 className="text-base font-semibold text-[#111111]">
                Quality Fabrics
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Elegant pieces selected for comfort, style, and everyday wear.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#FCFAF8] px-5 py-5 ring-1 ring-gray-100">
              <h3 className="text-base font-semibold text-[#111111]">
                Kathmandu Delivery
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Easy ordering with reliable delivery and simple purchase support.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#FCFAF8] px-5 py-5 ring-1 ring-gray-100">
              <h3 className="text-base font-semibold text-[#111111]">
                Easy Ordering
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Browse, choose your favorite pieces, and order with confidence.
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
}