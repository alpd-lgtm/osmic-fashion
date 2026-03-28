import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import HeroSlider from "@/components/HeroSlider";
import ProductQuickOrder from "@/components/ProductQuickOrder";


const categories = [
  {
    name: "Kurthas",
    desc: "Elegant daily & festive wear",
    mobileImg: "/products/kurtha-1.avif",
    desktopImg: "/products/kurtha-4.jpg",
    link: "/products?category=kurtha",
  },
  {
    name: "Sarees",
    desc: "Graceful traditional fashion",
    mobileImg: "/products/saree-1.avif",
    desktopImg: "/products/saree-1.webp",
    link: "/products?category=saree",
  },
  {
    name: "Tops",
    desc: "Modern casual styles",
    mobileImg: "/products/top-1.avif",
    desktopImg: "/products/top-2.webp",
    link: "/products?category=top",
  },
];

const trustItems = [
  {
    title: "Quality Fabric",
    description:
      "Elegant pieces selected for comfort, style, and long-lasting wear.",
  },
  {
    title: "Kathmandu Delivery",
    description:
      "Easy ordering with local delivery and simple purchase support.",
  },
  {
    title: "Easy Ordering",
    description:
      "Shop online and order quickly through your preferred contact method.",
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl bg-white px-4 pt-4 pb-24 sm:px-6 sm:pt-6 sm:pb-28 lg:px-8">
      <HeroSlider />

      {/* FEATURED PRODUCTS */}
      <section className="mt-8 rounded-[2rem] bg-[#FCFAF8] px-5 py-8 ring-1 ring-[#EEE7DF] sm:mt-10 sm:px-7 sm:py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A6A4A] sm:text-[11px]">
              Featured
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-4xl">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-medium text-[#6B6B6B] underline underline-offset-4 transition hover:text-[#7A1F2A]"
          >
            View all
          </Link>
        </div>

        {/* MOBILE */}
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth lg:hidden">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#EAE4DD] transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-[#E2D6CA]"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F6F1EB] p-4">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#7A1F2A] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                    New
                  </span>

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="flex min-h-[220px] flex-col px-4 pb-5 pt-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
                  {product.category}
                </p>

                <div className="mt-2 flex flex-col gap-1">
                  <h3 className="text-[17px] font-semibold leading-snug text-[#111111]">
                    <Link
                      href={`/products/${product.slug}`}
                      className="transition hover:text-[#7A1F2A]"
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="text-[15px] font-normal text-[#5B5B5B]">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#6B6B6B]">
                  {product.description}
                </p>

                <div className="mt-auto pt-5">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-[13px] font-medium tracking-[0.02em] text-[#111111] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7A1F2A]"
                  >
                    View Product →
                  </Link>

                  <div className="mt-2 transition-all duration-300 group-hover:translate-x-1">
                    <ProductQuickOrder productName={product.name} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden grid-cols-2 gap-5 lg:grid xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#EAE4DD] transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-[#E2D6CA]"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F6F1EB] p-5">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#7A1F2A] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                    New
                  </span>

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="flex min-h-[250px] flex-col px-5 pb-6 pt-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
                  {product.category}
                </p>

                <div className="mt-2 flex flex-col gap-1">
                  <h3 className="text-[19px] font-semibold leading-snug text-[#111111]">
                    <Link
                      href={`/products/${product.slug}`}
                      className="transition hover:text-[#7A1F2A]"
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="text-[15px] font-normal text-[#5B5B5B] sm:text-base">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#6B6B6B] sm:text-sm sm:leading-7">
                  {product.description}
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-[13px] font-medium tracking-[0.02em] text-[#111111] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7A1F2A] sm:text-sm"
                  >
                    View Product →
                  </Link>

                  <div className="mt-2 transition-all duration-300 group-hover:translate-x-1">
                    <ProductQuickOrder productName={product.name} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mt-7 md:mt-8">
        <div className="mb-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[#7A1F2A]">
            Shop by Category
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
            Explore Collections
          </h2>
        </div>

        {/* MOBILE */}
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:hidden">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="group relative min-w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={item.mobileImg}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-xs text-white/80">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden grid-cols-3 gap-6 md:grid">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="group relative overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[320px] w-full">
                <Image
                  src={item.desktopImg}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-white/80">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mt-12 grid grid-cols-1 gap-5 pb-4 md:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.8rem] bg-[#FCFAF8] px-6 py-6 ring-1 ring-[#EEE7DF] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(17,17,17,0.05)]"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A6A4A]">
              AAWASE
            </p>

            <h3 className="mt-3 text-lg font-semibold text-[#111111]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#6B6B6B]">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* ABOUT AAWASE */}
      <section className="mt-10 rounded-[2rem] bg-[#FCFAF8] px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#7A1F2A]">
              About Aawase
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
              A simple and elegant boutique experience
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Aawase is built around simplicity, elegance, and everyday comfort.
              Each piece is thoughtfully selected to bring a balance of modern
              style and traditional inspiration. We focus on making fashion easy
              to browse, easy to choose, and easy to order.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Whether for daily wear or special occasions, our collection is
              designed to help you feel confident with minimal effort and
              maximum comfort.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-[#7A1F2A] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore Collection
            </Link>
          </div>

          <div className="relative h-[300px] w-full overflow-hidden rounded-[2rem] bg-[#FAF7F3] sm:h-[380px]">
            <Image
              src="/products/kurtha-1.avif"
              alt="Aawase collection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}