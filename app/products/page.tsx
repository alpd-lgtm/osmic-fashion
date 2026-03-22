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

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] bg-[#FFFDFC] px-6 py-8 ring-1 ring-gray-100 sm:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7A1F2A]">
          Collection
        </p>
        <h1 className="mt-2 text-4xl font-bold text-[#111111]">
          Our Products
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Discover elegant fashion pieces with a clean and simple shopping
          experience.
        </p>
      </div>

      <form
        action="/products"
        method="GET"
        className="mb-10 rounded-[2rem] bg-[#FFFDFC] p-4 ring-1 ring-gray-100 sm:p-5"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px_140px]">
          <input
            type="text"
            name="search"
            defaultValue={params.search || ""}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#7A1F2A]"
          />

          <select
            name="category"
            defaultValue={selectedCategory}
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#7A1F2A]"
          >
            <option value="all">All</option>
            <option value="kurtha">Kurthas</option>
            <option value="saree">Sarees</option>
            <option value="top">Tops</option>
          </select>

          <button
            type="submit"
            className="rounded-2xl bg-[#7A1F2A] px-5 py-3 text-white transition hover:opacity-90"
          >
            Apply
          </button>
        </div>
      </form>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/products"
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedCategory === "all" && !params.search
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
            }`}
          >
            All
          </Link>

          <Link
            href={`/products?category=kurtha${
              params.search ? `&search=${encodeURIComponent(params.search)}` : ""
            }`}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedCategory === "kurtha"
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
            }`}
          >
            Kurthas
          </Link>

          <Link
            href={`/products?category=saree${
              params.search ? `&search=${encodeURIComponent(params.search)}` : ""
            }`}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedCategory === "saree"
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
            }`}
          >
            Sarees
          </Link>

          <Link
            href={`/products?category=top${
              params.search ? `&search=${encodeURIComponent(params.search)}` : ""
            }`}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedCategory === "top"
                ? "bg-[#7A1F2A] text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
            }`}
          >
            Tops
          </Link>

          {(params.search || selectedCategory !== "all") && (
            <Link
              href="/products"
              className="text-sm text-[#7A1F2A] underline underline-offset-4 hover:opacity-80"
            >
              Clear filters
            </Link>
          )}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-[2rem] bg-[#FFFDFC] px-6 py-16 text-center ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold text-[#111111]">
            No products found
          </h2>
          <p className="mt-3 text-gray-600">
            Try changing your search or category.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-xl bg-[#7A1F2A] px-5 py-3 text-white transition hover:opacity-90"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group rounded-3xl bg-white p-4 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-[#FAF7F3] ring-1 ring-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h2 className="text-lg font-semibold leading-snug text-[#111111]">
                    <Link href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h2>
                  <p className="shrink-0 text-base font-semibold text-[#7A1F2A]">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-[#111111] underline underline-offset-4 hover:text-[#7A1F2A]"
                >
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}