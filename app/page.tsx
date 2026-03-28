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
    <main className="mx-auto max-w-7xl bg-white px-4 pt-4 pb-6 sm:px-6 sm:pt-6 sm:pb-8 lg:px-8">
      <HeroSlider />

      <section className="mt-8 rounded-[2rem] bg-[#FCFAF8] px-4 py-8 sm:mt-10 sm:px-6 sm:py-9">
        <div className="mb-6 flex items-end justify-between gap-4">
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
            className="text-sm font-medium text-gray-600 underline underline-offset-4 transition hover:text-[#7A1F2A]"
          >
            View all
          </Link>
        </div>

        {/* MOBILE */}
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth lg:hidden">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-[260px] flex-shrink-0 snap-start rounded-3xl bg-white p-3.5 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-[260px] w-full overflow-hidden rounded-[1.75rem] bg-[#FAF7F3] ring-1 ring-gray-100">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#7A1F2A] px-3 py-1 text-[11px] font-medium text-white">
                    New
                  </span>

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </Link>

              <div className="mt-3.5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#7A1F2A]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug text-[#111111]">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>

                  <p className="shrink-0 text-sm font-semibold text-[#111111]">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-4 flex flex-col">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#111111] underline underline-offset-4 transition hover:text-[#7A1F2A]"
                  >
                    View Product
                  </Link>

                  <ProductQuickOrder productName={product.name} />
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
              className="group rounded-3xl bg-white p-3.5 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-[#7A1F2A]/20"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-[300px] w-full overflow-hidden rounded-[1.75rem] bg-[#FAF7F3] ring-1 ring-gray-100 sm:h-[340px]">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#7A1F2A] px-3 py-1 text-[11px] font-medium text-white">
                    New
                  </span>

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </Link>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7A1F2A]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug text-[#111111]">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>

                  <p className="shrink-0 text-sm font-semibold text-[#111111] sm:text-base">
                    NPR {product.price}
                  </p>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-4 flex flex-col">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#111111] underline underline-offset-4 transition hover:text-[#7A1F2A]"
                  >
                    View Product
                  </Link>

                  <ProductQuickOrder productName={product.name} />
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
      <section className="mt-10 grid grid-cols-1 gap-5 pb-4 md:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-white p-6 ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-[#111111]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
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
              Each piece is thoughtfully selected to bring a balance of modern style
              and traditional inspiration. We focus on making fashion easy to browse,
              easy to choose, and easy to order.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Whether for daily wear or special occasions, our collection is designed
              to help you feel confident with minimal effort and maximum comfort.
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