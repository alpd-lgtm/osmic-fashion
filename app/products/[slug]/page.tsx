const whatsappNumber = "9779800000000";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const allProducts = [
  {
    slug: "red-festive-kurtha",
    title: "Red Festive Kurtha",
    price: "Rs. 3950",
    category: "Kurthas",
    img: "https://images.unsplash.com/photo-1583391733981-6d3c2d95a88a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant festive kurtha with boutique finishing, perfect for family gatherings and special occasions.",
    fabric: "Soft premium blend",
    sizes: "M, L, XL",
  },
  {
    slug: "wedding-kurtha-set",
    title: "Wedding Kurtha Set",
    price: "Rs. 4750",
    category: "Kurthas",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    description:
      "A complete festive look designed for weddings and celebration events.",
    fabric: "Festive wear fabric",
    sizes: "M, L, XL",
  },
  {
    slug: "celebration-saree",
    title: "Celebration Saree",
    price: "Rs. 6800",
    category: "Sarees",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A graceful saree option with a refined boutique look for parties and celebrations.",
    fabric: "Premium saree fabric",
    sizes: "Free Size",
  },
  {
    slug: "elegant-party-saree",
    title: "Elegant Party Saree",
    price: "Rs. 7250",
    category: "Sarees",
    img: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=1200&q=80",
    description:
      "A premium party saree with elegant drape and polished occasion styling.",
    fabric: "Luxury occasion fabric",
    sizes: "Free Size",
  },
  {
    slug: "printed-ethnic-top",
    title: "Printed Ethnic Top",
    price: "Rs. 1850",
    category: "Boutique Tops",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Simple, stylish, and comfortable boutique top for daily and semi-festive wear.",
    fabric: "Cotton blend",
    sizes: "S, M, L",
  },
  {
    slug: "boutique-daily-blouse",
    title: "Boutique Daily Blouse",
    price: "Rs. 1650",
    category: "Boutique Tops",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Easy-to-style boutique blouse made for everyday comfort with elegant finishing.",
    fabric: "Soft everyday fabric",
    sizes: "S, M, L",
  },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,#fffdfb_0%,#fff8f2_100%)] px-4 py-10 text-slate-800">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-3 text-stone-600">
            The product you are looking for is not available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdfb_0%,#fff8f2_100%)] px-4 py-8 text-slate-800 md:py-12">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div className="overflow-hidden rounded-[24px]">
          <img
            src={product.img}
            alt={product.title}
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-700">
            {product.category}
          </div>

          <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
            {product.title}
          </h1>

          <div className="mt-4 text-2xl font-semibold text-blue-900">
            {product.price}
          </div>

          <p className="mt-5 text-sm leading-7 text-stone-600 md:text-base">
            {product.description}
          </p>

          <div className="mt-6 grid gap-3 rounded-[20px] bg-stone-50 p-4 text-sm text-slate-700">
            <div>
              <span className="font-semibold">Category:</span> {product.category}
            </div>
            <div>
              <span className="font-semibold">Fabric:</span> {product.fabric}
            </div>
            <div>
              <span className="font-semibold">Sizes:</span> {product.sizes}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={createWhatsAppLink(
                `Hello, I want to order ${product.title} priced at ${product.price}. Please share availability and sizes.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600"
            >
              Order on WhatsApp
            </a>

            <a
              href="/products"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-red-200 hover:text-red-700"
            >
              Back to Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}