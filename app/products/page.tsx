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

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch =
      searchText === "" ||
      product.name.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 pt-4 pb-10 sm:px-6 sm:pt-6 lg:px-8">
      <section className="rounded-[2rem] bg-[#FCFAF8] px-5 py-8 ring-1 ring-[#EEE7DF] sm:px-7 sm:py-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A6A4A] sm:text-xs">
              Collection
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-4xl">
              Shop Products
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Discover elegant styles curated for everyday wear, festive moments,
              and timeless comfort.
            </p>
          </div>

          <form className="w-full lg:max-w-sm">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <input
              id="search"
              name="search"
              defaultValue={params.search || ""}
              placeholder="Search products..."
              className="h-12 w-full rounded-full border border-[#E7DED5] bg-white px-5 text-sm text-[#111111] outline-none transition placeholder:text-gray-400 focus:border-[#7A1F2A]"
            />
            {selectedCategory !== "all" && (
              <input type="hidden" name="category" value={selectedCategory} />
            )}
          </form>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            const href =
              category === "all"
                ? params.search
                  ? `/products?search=${encodeURIComponent(params.search)}`
                  : "/products"
                : params.search
                ? `/products?category=${encodeURIComponent(
                    category
                  )}&search=${encodeURIComponent(params.search)}`
                : `/products?category=${encodeURIComponent(category)}`;

            return (
              <Link
                key={category}
                href={href}
                className={`inline-flex min-h-[42px] items-center justify-center rounded-full px-4 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#7A1F2A] text-white"
                    : "border border-[#E7DED5] bg-white text-gray-700 hover:border-[#7A1F2A] hover:text-[#7A1F2A]"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            );
          })}
        </div>
      </section>

      <div className="mt-6">
        <p className="text-sm text-gray-500">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <section className="mt-6 rounded-[2rem] border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-[#111111]">
            No products found
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Try a different search term or browse all categories.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#7A1F2A] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            View All Products
          </Link>
        </section>
      ) : (
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#EAE4DD] transition duration-500 hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(17,17,17,0.06)] hover:ring-[#E2D6CA]"
              >
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F6F1EB] p-4 sm:p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
                    {product.category}
                  </p>

                  <div className="mt-2 flex flex-col gap-1">
                    <h2 className="text-[17px] font-semibold leading-snug text-[#111111] sm:text-[20px]">
                      <Link
                        href={`/products/${product.slug}`}
                        className="transition hover:text-[#7A1F2A]"
                      >
                        {product.name}
                      </Link>
                    </h2>

                    <p className="text-[15px] font-normal text-[#5B5B5B] sm:text-base">
                      NPR {product.price}
                    </p>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#6B6B6B] sm:text-sm sm:leading-7">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center text-[13px] font-medium tracking-[0.02em] text-[#111111] transition hover:text-[#7A1F2A] sm:text-sm"
                    >
                      View Product
                    </Link>

                    <span className="h-px w-8 bg-[#D8C7B6] transition duration-500 group-hover:w-12" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}