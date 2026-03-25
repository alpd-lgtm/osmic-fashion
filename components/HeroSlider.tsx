"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/products/hero.jpg",
    title: "Elegant fashion pieces for every occasion",
    subtitle:
      "Discover graceful kurtas, sarees, and modern boutique styles with a clean and simple shopping experience.",
    tag: "New Collection",
  },
  {
    id: 2,
    image: "/products/saree-2.jpg",
    title: "Boutique styles with modern elegance",
    subtitle:
      "Shop premium looks designed for comfort, confidence, and everyday beauty.",
    tag: "Trending Now",
  },
  {
    id: 3,
    image: "/products/top-6.jpg",
    title: "Graceful looks for festive and daily wear",
    subtitle:
      "Explore curated fashion pieces made to feel timeless, stylish, and easy to wear.",
    tag: "Featured Styles",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative overflow-hidden rounded-[2rem]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-[460px] w-full sm:h-[560px] lg:h-[650px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === current
                ? "z-10 opacity-100"
                : "z-0 opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-[3000ms] ${
                index === current ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex items-center">
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
        className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 sm:block"
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 sm:block"
        aria-label="Next slide"
      >
        →
      </button>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}