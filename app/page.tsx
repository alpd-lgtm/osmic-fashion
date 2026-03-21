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
      title: "Red Festive Kurtha",
      price: "Rs. 3,950",
      tag: "Popular",
      desc: "Elegant festive styling with a clean traditional look.",
      img: "https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Celebration Saree",
      price: "Rs. 6,800",
      tag: "Traditional",
      desc: "Perfect for family functions, parties, and wedding events.",
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Printed Ethnic Top",
      price: "Rs. 1,850",
      tag: "New",
      desc: "Simple boutique wear for daily and festive styling.",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdfb_0%,#fff8f2_100%)] text-slate-800">
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-900 to-red-700 px-4 py-2 text-center text-sm text-white">
        Direct order available on WhatsApp · Store pickup and delivery in Kathmandu, Lalitpur & Bhaktapur
      </div>

      <header className="sticky top-0 z-20 border-b border-stone-200 bg-[#fcfaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] uppercase tracking-[0.22em] text-red-700">
              Cosmic
            </span>
            <span className="text-base font-semibold tracking-[0.14em] text-blue-900 md:text-lg">
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
          </nav>

          <a
            href={createWhatsAppLink(
              "Hello, I want to contact Cosmic Fashion & Tailoring Centre. Please share details."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0 0 12.02 24c6.63 0 12.01-5.38 12.01-12 0-3.2-1.25-6.21-3.51-8.52zM12.02 21.8c-1.88 0-3.72-.5-5.33-1.45l-.38-.23-3.67.96.98-3.57-.25-.37A9.8 9.8 0 0 1 2.2 12c0-5.43 4.4-9.83 9.82-9.83 2.63 0 5.1 1.02 6.95 2.88A9.77 9.77 0 0 1 21.82 12c0 5.42-4.4 9.8-9.8 9.8zm5.37-7.37c-.29-.15-1.72-.85-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.84 1.17 3.03c.14.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-2 md:py-10">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
              Premium boutique · local trust · festive style
            </div>

            <h1 className="max-w-lg text-4xl font-semibold leading-tight text-slate-800 md:text-5xl">
              Traditional fashion, styled with elegance.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 md:text-base">
              Discover sarees, kurthas, tailoring support, and festive pieces with easy
              ordering for Kathmandu, Lalitpur, and Bhaktapur.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={createWhatsAppLink(
                  "Hello, I want to shop your collection. Please share available products."
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-red-700 px-6 py-3 font-medium text-white transition hover:bg-red-800"
              >
                Shop Collection
              </a>
              <a
                href={createWhatsAppLink(
                  "Hello, I want to book tailoring service. Please share the process."
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-blue-900 transition hover:border-blue-200"
              >
                Book Tailoring
              </a>
            </div>

            <div className="mt-6 rounded-[24px] border border-slate-200 bg-[#fcfaf7] p-5">
              <div className="text-sm font-medium text-slate-800">
                Why customers choose Cosmic
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-medium text-slate-800">
                    Festive & Daily Wear
                  </div>
                  <div className="mt-1 text-xs leading-5 text-stone-500">
                    Kurthas, sarees and boutique tops for regular wear and special occasions.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-medium text-slate-800">
                    Tailoring Available
                  </div>
                  <div className="mt-1 text-xs leading-5 text-stone-500">
                    Simple custom fitting and stitching support for a better finish.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1610189020382-668f0a7e0c1f?auto=format&fit=crop&w=1400&q=80"
                alt="Kurtha fashion"
                className="h-[260px] w-full rounded-[24px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&w=1400&q=80"
                alt="Ethnic top fashion"
                className="h-[160px] w-full rounded-[24px] object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-medium text-slate-800">
                  Tailoring Support
                </div>
                <div className="mt-1 text-sm text-stone-500">
                  Custom fitting and stitching for a better finish.
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-medium text-slate-800">
                  Festive Picks
                </div>
                <div className="mt-1 text-sm text-stone-500">
                  Curated styles for Teej, Dashain, Tihar and weddings.
                </div>
              </div>
            </div>
          </div>
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

                  <div className="mt-4">
                    <a
                      href={createWhatsAppLink(
                        `Hello, I want to view the ${item.title} collection. Please share available designs.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-blue-900 transition hover:border-blue-200 hover:text-blue-950"
                    >
                      View Collection
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
            <a
              href={createWhatsAppLink("Hello, please share all new arrivals.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-blue-900 transition hover:border-blue-200 hover:text-blue-950"
            >
              View All
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
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
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-tight text-slate-800">
                      {item.title}
                    </h3>
                    <div className="whitespace-nowrap text-sm font-semibold text-blue-900">
                      {item.price}
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-stone-500">{item.desc}</p>

                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-xs uppercase tracking-[0.22em] text-stone-400">
                      Boutique Pick
                    </div>
                    <a
                      href={createWhatsAppLink(
                        `Hello, I want to order ${item.title} priced at ${item.price}. Please share availability.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.96 11.96 0 0 0 12.02 24c6.63 0 12.01-5.38 12.01-12 0-3.2-1.25-6.21-3.51-8.52zM12.02 21.8c-1.88 0-3.72-.5-5.33-1.45l-.38-.23-3.67.96.98-3.57-.25-.37A9.8 9.8 0 0 1 2.2 12c0-5.43 4.4-9.83 9.82-9.83 2.63 0 5.1 1.02 6.95 2.88A9.77 9.77 0 0 1 21.82 12c0 5.42-4.4 9.8-9.8 9.8zm5.37-7.37c-.29-.15-1.72-.85-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.84 1.17 3.03c.14.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" />
                      </svg>
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="festive" className="mx-auto max-w-7xl px-4 py-4 md:py-8">
          <div className="grid gap-5 rounded-[28px] border border-slate-200 bg-[linear-gradient(135deg,rgba(18,58,143,0.05)_0%,rgba(198,40,59,0.06)_100%)] p-5 shadow-sm md:grid-cols-2 md:p-7">
            <div className="flex flex-col justify-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
                Festive focus
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-slate-800 md:text-4xl">
                Wedding, festive and tailoring promotion section
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-600 md:text-base">
                Highlight Teej, Dashain, Tihar, wedding season, tailoring offers,
                and your strongest festive pieces here with a bold but still clean presentation.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={createWhatsAppLink(
                    "Hello, I want to shop your festive collection. Please share festive products."
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
              src="https://images.unsplash.com/photo-1594736797933-d0d9e77a7d17?auto=format&fit=crop&w=1400&q=80"
              alt="Festive banner"
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