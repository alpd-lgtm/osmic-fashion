import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";

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
    .slice(0, 4);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-5 text-sm text-gray-500">
          <Link href="/" className="transition hover:text-[#7A1F2A]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="transition hover:text-[#7A1F2A]">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="space-y-3">
            <div className="group relative overflow-hidden rounded-3xl bg-[#F8F5F0] shadow-md">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>
            </div>

            <div className="w-[86px] overflow-hidden rounded-2xl border border-[#E7DED5] bg-[#F8F5F0]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="86px"
                />
              </div>
            </div>
          </div>

          <div className="lg:max-w-xl">
            <p className="inline-flex rounded-full bg-[#FAF7F3] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#7A1F2A]">
              {product.category}
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#111111] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <p className="text-3xl font-bold text-[#111111] sm:text-4xl">
                NPR {product.price.toLocaleString()}
              </p>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                In Stock
              </span>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#E7DED5] bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm">
                Premium quality
              </div>
              <div className="rounded-full border border-[#E7DED5] bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm">
                Easy WhatsApp order
              </div>
              <div className="rounded-full border border-[#E7DED5] bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm">
                Kathmandu delivery
              </div>
            </div>

            <ProductPurchasePanel
              product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                image: product.image,
              }}
              sizes={["S", "M", "L", "XL"]}
            />

            <div className="mt-6 rounded-3xl border border-[#E7DED5] bg-[#FCFBF9] p-5">
              <h2 className="text-sm font-semibold text-[#111111]">
                Delivery & Care
              </h2>

              <div className="mt-3 grid gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2">
                <p>
                  Delivery inside Kathmandu can be confirmed during checkout or
                  WhatsApp.
                </p>
                <p>
                  Gentle hand wash or dry clean recommended for longer-lasting
                  fabric quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 bg-[#FCFBF9]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#7A1F2A]">
                  More to explore
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#111111]">
                  Related Products
                </h2>
              </div>

              <Link
                href="/products"
                className="text-sm font-medium text-[#7A1F2A] transition hover:opacity-80"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border border-[#E7DED5] bg-white transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F5F0]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-gray-500">
                      {item.category}
                    </p>
                    <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-[#111111] sm:text-base">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#111111]">
                      NPR {item.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}