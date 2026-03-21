import Link from "next/link";

export default function CosmicHomepageUI() {
  const whatsappNumber = "9779800000000";

  const createWhatsAppLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const categories = [
    {
      title: "Kurthas",
      desc: "Classic daily and festive wear",
      img: "https://images.unsplash.com/photo-1583391733981-6d3c2d95b9f6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sarees",
      desc: "Traditional drapes for celebrations",
      img: "https://images.unsplash.com/photo-1594736797933-d0d9e77a7d17?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Blouses & Tops",
      desc: "Simple boutique styles with ethnic touch",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tailoring",
      desc: "Custom stitching and fitting support",
      img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const products = [
    {
      slug: "red-festive-kurtha",
      title: "Red Festive Kurtha",
      price: "Rs. 3,950",
      tag: "Popular",
      desc: "Elegant festive styling with a clean traditional look.",
      img: "https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "celebration-saree",
      title: "Celebration Saree",
      price: "Rs. 6,800",
      tag: "Traditional",
      desc: "Perfect for family functions, parties, and wedding events.",
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "printed-ethnic-top",
      title: "Printed Ethnic Top",
      price: "Rs. 1,850",
      tag: "New",
      desc: "Simple boutique wear for daily and festive styling.",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdfb_0%,#fff8f2_100%)] text-slate-800">
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-900 to-red-700 px-4 py-2 text-center text-xs text-white sm:text-sm">
        Direct order available on WhatsApp · Store pickup and delivery in Kathmandu, Lalitpur & Bhaktapur
      </div>

      <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#fcfaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.22em] text-red-700">
              Cosmic
            </span>
            <span className="text-sm font-semibold tracking-[0.12em] text-blue-900 sm:text-base md:text-lg">
              Fashion & Tailoring Centre
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            <a href="#categories" className="hover:text-blue-900">
              Collections
            </a>
            <a href="#products" className="hover:text-blue-900">
              New Arrivals
            </a>
            <a href="#festive" className="hover:text-blue-900">
              Festive
            </a>
            <a href="#contact" className="hover:text-blue-900">
              Contact
            </a>
            <Link href="/products" className="hover:text-blue-900">
              All Products
            </Link>
          </nav>

          <a
            href={createWhatsAppLink(
              "Hello, I want to contact Cosmic Fashion & Tailoring Centre. Please share details."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-600 sm:px-5"
          >
            WhatsApp
          </a>
        </div>

        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 pb-3 text-sm text-stone-600 md:hidden">
          <a href="#categories" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2">
            Collections
          </a>
          <a href="#products" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2">
            New Arrivals
          </a>
          <a href="#festive" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2">
            Festive
          </a>
          <a href="#contact" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2">
            Contact
          </a>
          <Link
            href="/products"
            className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2"
          >
            All Products
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-2 md:py-10">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
              Boutique style
            </div>

            <h1 className="mt-2 text-3xl font-semibold leading-tight text-slate-800 md:text-5xl">
              Elegant ethnic fashion with tailoring support
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 md:text-base">
              Discover sarees, kurthas, boutique tops, and festive collections
              with direct WhatsApp ordering and local tailoring service.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-red-700 px-6 py-3 text-center font-medium text-white transition hover:bg-red-800"
              >
                View All Products
              </Link>

              <a
                href={createWhatsAppLink("Hello, please share festive products.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center font-medium text-blue-900 transition hover:border-blue-200"
              >
                Shop on WhatsApp
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1594736797933-d0d9e77a7d17?auto=format&fit=crop&w=1400&q=80"
            alt="Festive banner"
            className="h-64 w-full rounded-[24px] object-cover md:h-full md:min-h-[380px]"
          />
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
                Main categories
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-800 md:text-4xl">
                Shop by collection
              </h2>
            </div>
            <div className="text-sm text-stone-500">
              Browse your main store sections easily
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
                    <div className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-stone-500">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-stone-400">
                    Boutique Category
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-blue-900 transition hover:border-blue-200 hover:text-blue-950"
                    >
                      Browse Category
                    </Link>

                    <a
                      href={createWhatsAppLink(
                        `Hello, I want to view the ${item.title} collection. Please share available designs.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-stone-100 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
                Fresh stock
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-800 md:text-4xl">
                New arrivals
              </h2>
            </div>

            <Link
              href="/products"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-blue-900 transition hover:border-blue-200 hover:text-blue-950"
            >
              View All
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-red-700 shadow-sm backdrop-blur">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-stone-500">
                        {item.desc}
                      </p>
                    </div>

                    <div className="whitespace-nowrap text-sm font-semibold text-blue-900">
                      {item.price}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-red-700">
                      View Product
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 group-hover:border-red-200 group-hover:text-red-700">
                      Open
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="festive" className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="grid gap-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
            <div className="flex flex-col justify-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
                Festive spotlight
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-800 md:text-4xl">
                Styles for celebrations and family events
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600 md:text-base">
                Explore festive picks for Teej, Dashain, Tihar, weddings, and
                special gatherings with boutique tailoring support.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={createWhatsAppLink(
                    "Hello, please share festive products."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-700 px-6 py-3 font-medium text-white transition hover:bg-red-800"
                >
                  Shop Festive
                </a>
                <a
                  href={createWhatsAppLink(
                    "Hello, I want tailoring service for a festive outfit. Please share details."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-blue-900 transition hover:border-blue-200"
                >
                  Book Tailoring
                </a>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&w=1400&q=80"
              alt="Ethnic top fashion"
              className="h-64 w-full rounded-[24px] object-cover md:h-80"
            />
          </div>
        </section>

        <footer id="contact" className="mx-auto max-w-7xl px-4 py-6 md:py-10">
          <div className="grid gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-800">
                Cosmic Fashion & Tailoring Centre
              </h3>
              <p className="mt-2 text-sm text-stone-500">
                Premium boutique style with local trust, festive focus, and tailoring support.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-800">Service Areas</h4>
              <p className="mt-2 text-sm text-stone-500">
                Kathmandu
                <br />
                Lalitpur
                <br />
                Bhaktapur
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-800">Order Support</h4>
              <p className="mt-2 text-sm text-stone-500">
                Direct WhatsApp order
                <br />
                Store pickup available
                <br />
                Local delivery support
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}