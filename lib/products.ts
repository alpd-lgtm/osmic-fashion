export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Red Kurtha",
    slug: "red-kurtha",
    category: "kurtha",
    price: 2500,
    image: "/products/kurtha-1.avif",
    description: "Elegant red kurtha for festive and daily wear.",
    sizes: ["S", "M"],   // 👈 ADD THIS
  },
  {
    id: 2,
    name: "Blue Kurtha",
    slug: "blue-kurtha",
    category: "kurtha",
    price: 2800,
    image: "/products/kurtha-2.jpg",
    description: "Stylish blue kurtha with a clean modern finish.",
    sizes: ["S", "M" , "L"],
  },
  {
    id: 3,
    name: "Classic Kurtha",
    slug: "classic-kurtha",
    category: "kurtha",
    price: 3000,
    image: "/products/kurtha-3.webp",
    description: "Classic kurtha design made for comfort and elegance.",
    sizes: ["S", "M" , "L" , "XL"],
  },
  {
    id: 4,
    name: "Green Saree",
    slug: "green-saree",
    category: "saree",
    price: 4200,
    image: "/products/saree-1.webp",
    description: "Beautiful green saree with graceful traditional styling.",
    sizes: ["S", "M" , "L" , "XL"],
  },
  {
    id: 5,
    name: "Pink Saree",
    slug: "pink-saree",
    category: "saree",
    price: 4600,
    image: "/products/saree-2.jpg",
    description: "Soft pink saree perfect for festive and family occasions.",
    sizes: ["S", "M" , "L" , "XL"],
  },
  {
    id: 6,
    name: "Elegant Saree",
    slug: "elegant-saree",
    category: "saree",
    price: 4900,
    image: "/products/saree-3.webp",
    description: "Elegant saree with rich traditional appeal.",
    sizes: ["S", "M" , "L" , "XL"],
  },
  {
    id: 7,
    name: "Casual Top",
    slug: "casual-top",
    category: "top",
    price: 1800,
    image: "/products/top-2.webp",
    description: "Modern casual top for everyday wear.",
    sizes: ["S", "M" , "L" , "XL"],
  },
  {
    id: 8,
    name: "Fashion Top",
    slug: "fashion-top",
    category: "top",
    price: 2100,
    image: "/products/top-4.webp",
    description: "Trendy fashion top with a stylish silhouette.",
    sizes: ["S", "M" , "L" , "XL"],
  },
];