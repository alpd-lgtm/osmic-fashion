export default function ProductsPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
        <p className="mt-3 text-gray-600">
          Explore our latest fashion collection.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="h-64 bg-gray-200" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Classic Black Dress</h2>
              <p className="mt-2 text-sm text-gray-600">
                Elegant, clean silhouette for modern style.
              </p>
              <p className="mt-3 font-bold">$89</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="h-64 bg-gray-200" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Minimal White Shirt</h2>
              <p className="mt-2 text-sm text-gray-600">
                Simple premium shirt for everyday wear.
              </p>
              <p className="mt-3 font-bold">$49</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="h-64 bg-gray-200" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Beige Luxury Coat</h2>
              <p className="mt-2 text-sm text-gray-600">
                Timeless outerwear with a refined look.
              </p>
              <p className="mt-3 font-bold">$129</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="h-64 bg-gray-200" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Modern Casual Set</h2>
              <p className="mt-2 text-sm text-gray-600">
                Comfort and fashion blended together.
              </p>
              <p className="mt-3 font-bold">$99</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}