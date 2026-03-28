import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductOrderWithSize from "@/components/ProductOrderWithSize";

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
    <main className="mx-auto max-w-7xl bg-white px-4 pt-4 pb-10 sm:px-6 sm:pt-6 lg:px-8">
      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[#7A7A7A]">
        <Link href="/" className="transition hover:text-[#7A1F2A]">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="transition hover:text-[#7A1F2A]">
          Products
        </Link>
        <span>/</span>
        <span className="text-[#8A6A4A]">{product.name}</span>
      </div>

      <section className="rounded-[2rem] bg-[#FFFDFC] p-4 ring-1 ring-[#EEE7DF] sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div>
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#F6F1EB] p-5 ring-1 ring-[#EEE7DF] sm:p-8">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain transition duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A6A4A] sm:text-[11px]">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-2xl font-medium text-[#2D2D2D] sm:text-[1.7rem]">
                NPR {product.price}
              </p>

              <span className="inline-flex items-center rounded-full bg-[#F3ECE4] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A6A4A] ring-1 ring-[#E7DED5]">
                Ready to order
              </span>
            </div>

            <div className="mt-5 h-px w-16 bg-[#D8C7B6]" />

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#666666] sm:text-base sm:leading-8">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <div className="rounded-full border border-[#E7DED5] bg-white px-4 py-2 text-sm text-[#5E5E5E]">
                Boutique style
              </div>
              <div className="rounded-full border border-[#E7DED5] bg-white px-4 py-2 text-sm text-[#5E5E5E]">
                Premium fabric
              </div>
              <div className="rounded-full border border-[#E7DED5] bg-white px-4 py-2 text-sm text-[#5E5E5E]">
                Kathmandu delivery
              </div>
            </div>

<div className="mt-7 flex flex-col gap-4">
  <ProductOrderWithSize
    name={product.name}
    price={product.price}
    slug={product.slug}
    sizes={product.sizes}
  />

  <Link
    href="/products"
    className="text-sm font-medium text-[#6B6B6B] underline underline-offset-4 transition hover:text-[#7A1F2A]"
  >
    Explore Collection
  </Link>
</div>

<div className="mt-5 rounded-[1.2rem] bg-[#FCFAF8] px-4 py-4 ring-1 ring-[#EEE7DF]">
  <div className="space-y-2 text-sm text-[#666666]">
    <p>✔ Cash on Delivery available</p>
    <p>✔ Delivery inside Kathmandu</p>
    <p>✔ Easy WhatsApp ordering</p>
  </div>
</div>

          

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] bg-white px-4 py-4 ring-1 ring-[#EEE7DF]">
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#8A6A4A]">
                  Size & Fit
                </p>
                <p className="mt-2 text-sm leading-6 text-[#666666]">
                  Comfortable regular fit designed for easy daily wear and festive
                  styling.
                </p>
              </div>
              



              <div className="rounded-[1.4rem] bg-white px-4 py-4 ring-1 ring-[#EEE7DF]">
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#8A6A4A]">
                  Care
                </p>
                <p className="mt-2 text-sm leading-6 text-[#666666]">
                  Gentle wash recommended to help preserve the fabric feel, shape,
                  and finish.
                </p>
              </div>

                            <div className="rounded-[1.4rem] bg-white px-4 py-4 ring-1 ring-[#EEE7DF]">
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#8A6A4A]">
                  Delivery
                </p>
                <p className="mt-2 text-sm leading-6 text-[#666666]">
                  Delivery available inside Kathmandu. Contact on WhatsApp for
                  timing and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-10 rounded-[2rem] bg-[#FCFAF8] px-4 py-7 ring-1 ring-[#EEE7DF] sm:px-6 sm:py-8">
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A6A4A] sm:text-[11px]">
              You may also like
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-3xl">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {relatedProducts.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#EAE4DD] transition duration-500 hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(17,17,17,0.06)] hover:ring-[#E2D6CA]"
              >
                <Link href={`/products/${item.slug}`} className="block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F6F1EB] p-4 sm:p-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
                    {item.category}
                  </p>

                  <div className="mt-2 flex flex-col gap-1">
                    <h3 className="text-[17px] font-semibold leading-snug text-[#111111] sm:text-[20px]">
                      <Link
                        href={`/products/${item.slug}`}
                        className="transition hover:text-[#7A1F2A]"
                      >
                        {item.name}
                      </Link>
                    </h3>

                    <p className="text-[15px] font-normal text-[#5B5B5B] sm:text-base">
                      NPR {item.price}
                    </p>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#6B6B6B] sm:text-sm sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/products/${item.slug}`}
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