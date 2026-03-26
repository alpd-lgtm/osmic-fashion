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
      <div className="relative h-[430px] w-full sm:h-[560px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === current
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover object-[70%_center] sm:object-center transition-transform duration-[3000ms] ${
                index === current ? "scale-100 sm:scale-[1.02]" : "scale-100"
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-5 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="max-w-[250px] pt-3 text-white sm:max-w-lg sm:pt-8">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/80 sm:text-xs">
              {slides[current].tag}
            </p>

            <div className="mt-3 h-px w-16 bg-white/70 sm:w-20" />

            <h1 className="mt-4 text-[2.05rem] font-bold leading-[1.08] text-white sm:text-5xl lg:text-5xl">
              {slides[current].title}
            </h1>

            <p className="mt-3 text-[13px] leading-6 text-white/85 sm:mt-5 sm:max-w-lg sm:text-base sm:leading-8">
              {slides[current].subtitle}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/products"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:scale-[1.02] hover:opacity-95 sm:w-auto sm:min-h-[52px]"
              >
                Shop All Products
              </Link>

              <Link
                href="/products?category=kurtha"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto sm:min-h-[52px]"
              >
                Browse Kurthas
              </Link>
            </div>
          </div>

          <div className="flex justify-center pb-1 sm:justify-start sm:pb-0">
            <div className="flex gap-2">
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
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 sm:block"
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/30 sm:block"
        aria-label="Next slide"
      >
        →
      </button>
    </section>
  );
}