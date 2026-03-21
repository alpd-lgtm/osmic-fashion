import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      slug: "red-festive-kurtha",
      title: "Red Festive Kurtha",
      price: "Rs. 3950",
    },
    {
      slug: "celebration-saree",
      title: "Celebration Saree",
      price: "Rs. 6800",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Products</h1>

      {products.map((item) => (
        <Link
          key={item.slug}
          href={`/products/${item.slug}`}
          style={{
            display: "block",
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </Link>
      ))}
    </div>
  );
}