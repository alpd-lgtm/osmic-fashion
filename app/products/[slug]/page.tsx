import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    {
      title: "Kurthas",
      desc: "Classic daily and festive wear",
    },
    {
      title: "Sarees",
      desc: "Elegant boutique styles for special occasions",
    },
    {
      title: "Boutique Tops",
      desc: "Modern ethnic and casual statement pieces",
    },
  ];

  const groupedProducts = [
    {
      category: "Kurthas",
      products: [
        {
          slug: "red-festive-kurtha",
          title: "Red Festive Kurtha",
          price: "Rs. 3950",
          desc: "Elegant festive styling with boutique detail.",
          img: "https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&w=1200&q=80",
        },
        {
          slug: "wedding-kurtha-set",
          title: "Wedding Kurtha Set",
          price: "Rs. 4750",
          desc: "Perfect for celebrations and family events.",
          img: "https://images.unsplash.com/photo-1610189020382-668f0a7e0c1f?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      category: "Sarees",
      products: [
        {
          slug: "celebration-saree",
          title: "Celebration Saree",
          price: "Rs. 6800",
          desc: "Graceful saree look for parties and festive moments.",
          img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
        },
        {
          slug: "elegant-party-saree",
          title: "Elegant Party Saree",
          price: "Rs. 7250",
          desc: "Premium drape and polished occasion styling.",
          img: "https://images.unsplash.com/photo-1594736797933-d0d9e77a7d17?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      category: "Boutique Tops",
      products: [
        {
          slug: "printed-ethnic-top",
          title: "Printed Ethnic Top",
          price: "Rs. 1850",
          desc: "Simple and stylish for everyday boutique wear.",
          img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          slug: "boutique-daily-blouse",
          title: "Boutique Daily Blouse",
          price: "Rs. 1650",
          desc: "Comfortable and elegant daily styling option.",
          img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdfb_0%,#fff8f2_100%)] text-slate-800">
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
            Boutique Collection
          </div>
          <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
            Browse by category and open any item to view full product details,
            price, and order information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-800">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16">
        {groupedProducts.map((group) => (
          <div key={group.category} className="mt-10">
            <div className="mb-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
                Category
              </div>
              <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
                {group.category}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.products.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold leading-tight text-slate-800">
                        {item.title}
                      </h3>
                      <div className="whitespace-nowrap text-sm font-semibold text-blue-900">
                        {item.price}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-stone-500">
                      {item.desc}
                    </p>

                    <div className="mt-5 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition group-hover:border-red-200 group-hover:text-red-700">
                      View Details
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}