import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const categories = ["all", ...new Set(products.map((product) => product.category))];

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
      product.category.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7A1F2A]">
            Shop Collection
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Discover Our Styles
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore elegant pieces designed for festive moments, everyday wear,
            and timeless style.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E7DED5] bg-[#FCFBF9] p-4 sm:p-5">
          <form className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <label
                htmlFor="search"
                className="mb-2 block text-sm font-medium text-[#111111]"
              >
                Search products
              </label>
              <input
                id="search"
                name="search"
                type="text"
                defaultValue={params.search || ""}
                placeholder="Search by product name or category"
                className="w-full rounded-full border border-[#D9D0C7] bg-white px-5 py-3 text-sm text-[#111111] outline-none transition focus:border-[#7A1F2A]"
              />
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <Link
                    key={category}
                    href={
                      searchText
                        ? `/products?category=${category}&search=${encodeURIComponent(
                            params.search || ""
                          )}`
                        : `/products?category=${category}`
                    }
                    className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition ${
                      isActive
                        ? "border-[#7A1F2A] bg-[#7A1F2A] text-white"
                        : "border-[#D9D0C7] bg-white text-[#111111] hover:border-[#7A1F2A]"
                    }`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
          </form>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            {filteredProducts.length} product
            {filteredProducts.length === 1 ? "" : "s"} found
          </p>

          {(selectedCategory !== "all" || searchText) && (
            <Link
              href="/products"
              className="text-sm font-medium text-[#7A1F2A] transition hover:opacity-80"
            >
              Clear filters
            </Link>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[#E7DED5] bg-[#FCFBF9] px-6 py-14 text-center">
            <h2 className="text-2xl font-semibold text-[#111111]">
              No products found
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Try another category or search term to explore more styles.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View All Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#E7DED5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F5F0]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500 sm:text-xs">
                    {product.category}
                  </p>

                  <h2 className="mt-2 line-clamp-2 text-sm font-semibold text-[#111111] sm:text-base">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-[#111111] sm:text-base">
                      NPR {product.price.toLocaleString()}
                    </p>

                    <span className="rounded-full border border-[#E7DED5] px-3 py-1 text-xs font-medium text-[#7A1F2A] transition group-hover:border-[#7A1F2A]">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}