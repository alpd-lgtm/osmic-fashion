"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/products/hero.jpg",
    title: "Elegant fashion pieces for every occasion",
    subtitle:
      "Discover graceful kurtas, sarees, and modern boutique styles with a clean and simple shopping experience.",
    tag: "New Collection",
  },
  {
    image: "/products/hero.jpg",
    title: "Boutique styles with modern elegance",
    subtitle:
      "Shop premium looks designed for comfort, confidence, and everyday beauty.",
    tag: "Trending Now",
  },
  {
    image: "/products/top-6.jpg",
    title: "Graceful looks for festive and daily wear",
    subtitle:
      "Explore curated fashion pieces made to feel timeless, stylish, and easy to wear.",
    tag: "Featured Styles",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative overflow-hidden rounded-[2rem]">
      <div className="relative h-[440px] w-full sm:h-[520px] lg:h-[620px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl text-white">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/80 sm:text-xs">
              {slides[current].tag}
            </p>

            <div className="mt-3 h-px w-16 bg-white/70 sm:w-20" />

            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {slides[current].title}
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/85 sm:mt-5 sm:text-base sm:leading-8">
              {slides[current].subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/products"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:scale-[1.02] hover:opacity-95"
              >
                Shop All Products
              </Link>

              <Link
                href="/products?category=kurtha"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Browse Kurthas
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 sm:block"
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 sm:block"
        aria-label="Next slide"
      >
        →
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition ${
              index === current ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}