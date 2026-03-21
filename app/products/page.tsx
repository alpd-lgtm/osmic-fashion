import Link from "next/link";

const productData = [
  {
    category: "Kurthas",
    items: [
      { slug: "kurtha-1", img: "/products/kurtha-1.avif", title: "Kurtha Style 1" },
      { slug: "kurtha-2", img: "/products/kurtha-2.webp", title: "Kurtha Style 2" },
      { slug: "kurtha-3", img: "/products/kurtha-3.jpg", title: "Kurtha Style 3" },
      { slug: "kurtha-4", img: "/products/kurtha-4.jpg", title: "Kurtha Style 4" },
      { slug: "kurtha-5", img: "/products/kurtha-5.jpg", title: "Kurtha Style 5" },
      { slug: "kurtha-6", img: "/products/kurtha-6.jpg", title: "Kurtha Style 6" },
    ],
  },
  {
    category: "Sarees",
    items: [
      { slug: "saree-1", img: "/products/saree-1.webp", title: "Saree Style 1" },
      { slug: "saree-2", img: "/products/saree-2.jpg", title: "Saree Style 2" },
      { slug: "saree-3", img: "/products/saree-3.webp", title: "Saree Style 3" },
      { slug: "saree-4", img: "/products/saree-4.webp", title: "Saree Style 4" },
      { slug: "saree-5", img: "/products/saree-5.jpeg", title: "Saree Style 5" },
      { slug: "saree-6", img: "/products/saree-6.webp", title: "Saree Style 6" },
    ],
  },
  {
    category: "Blouses & Tops",
    items: [
      { slug: "top-2", img: "/products/top-2.webp", title: "Top Style 1" },
      { slug: "top-4", img: "/products/top-4.webp", title: "Top Style 2" },
      { slug: "top-5", img: "/products/top-5.webp", title: "Top Style 3" },
      { slug: "top-6", img: "/products/top-6.jpg", title: "Top Style 4" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-10">All Products</h1>

      {productData.map((group) => (
        <div key={group.category} className="mb-14">
          <h2 className="text-xl font-semibold mb-6 text-slate-800">
            {group.category}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {group.items.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group block rounded-2xl overflow-hidden border hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  className="h-72 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Click to view details
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}