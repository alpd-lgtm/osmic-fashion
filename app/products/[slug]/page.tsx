const allProducts = [
  { slug: "kurtha-1", img: "/products/kurtha-1.avif", title: "Kurtha Style 1" },
  { slug: "kurtha-2", img: "/products/kurtha-2.webp", title: "Kurtha Style 2" },
  { slug: "kurtha-3", img: "/products/kurtha-3.jpg", title: "Kurtha Style 3" },
  { slug: "kurtha-4", img: "/products/kurtha-4.jpg", title: "Kurtha Style 4" },
  { slug: "kurtha-5", img: "/products/kurtha-5.jpg", title: "Kurtha Style 5" },
  { slug: "kurtha-6", img: "/products/kurtha-6.jpg", title: "Kurtha Style 6" },

  { slug: "saree-1", img: "/products/saree-1.webp", title: "Saree Style 1" },
  { slug: "saree-2", img: "/products/saree-2.jpg", title: "Saree Style 2" },
  { slug: "saree-3", img: "/products/saree-3.webp", title: "Saree Style 3" },
  { slug: "saree-4", img: "/products/saree-4.webp", title: "Saree Style 4" },
  { slug: "saree-5", img: "/products/saree-5.jpeg", title: "Saree Style 5" },
  { slug: "saree-6", img: "/products/saree-6.webp", title: "Saree Style 6" },

  { slug: "top-2", img: "/products/top-2.webp", title: "Top Style 1" },
  { slug: "top-4", img: "/products/top-4.webp", title: "Top Style 2" },
  { slug: "top-5", img: "/products/top-5.webp", title: "Top Style 3" },
  { slug: "top-6", img: "/products/top-6.jpg", title: "Top Style 4" },
];

export default function ProductDetailPage({ params }: any) {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.img}
          className="w-full rounded-2xl object-cover"
        />

        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          <p className="mt-4 text-gray-600">
            Premium boutique design with tailoring support. Perfect for festive
            and daily wear.
          </p>

          <a
            href={`https://wa.me/9779800000000?text=Hello, I want to order ${product.title}`}
            target="_blank"
            className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}