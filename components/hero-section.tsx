"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const sliderImages = [
  { src: "/images/hero1.webp", alt: "Kabul Jaan restaurant hero image one" },
  { src: "/images/hero2.webp", alt: "Kabul Jaan restaurant hero image two" },
  { src: "/images/hero3.webp", alt: "Kabul Jaan restaurant hero image three" }
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % sliderImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + sliderImages.length) % sliderImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative isolate bg-black">
      {/* Hero area */}
      <div className="relative flex min-h-[78svh] items-center overflow-hidden px-4 pb-20 pt-28 sm:min-h-[84svh] md:min-h-screen md:px-8 md:pb-24 md:pt-32">
        {/* Slider images */}
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={sliderImages[current].src}
              alt={sliderImages[current].alt}
              fill
              priority={current === 0}
              sizes="(max-width: 640px) 160vw, (max-width: 1024px) 120vw, 100vw"
              quality={100}
              unoptimized
              className="object-cover [object-position:50%_45%]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Readability overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.24),rgba(0,0,0,0.36)_48%,rgba(0,0,0,0.62))]"
        />

        {/* Hero text */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto w-full max-w-6xl text-center"
        >
          <motion.p
            data-kj-motion
            variants={reveal}
            className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-kj-accent-hover md:text-xs"
          >
            Afghan cuisine / modern soul
          </motion.p>

          <motion.h1
            data-kj-motion
            variants={reveal}
            className="mt-5 font-display italic text-[clamp(3.25rem,9vw,7rem)] font-normal leading-none text-kj-accent drop-shadow-[0_4px_24px_rgba(0,0,0,0.72)]"
          >
            Kabul Jaan
          </motion.h1>

          <motion.h2
            data-kj-motion
            variants={reveal}
            className="mt-4 font-display text-[clamp(1.6rem,4.5vw,3.5rem)] font-semibold uppercase tracking-[0.1em] leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] md:mt-5"
          >
            Best Afghan Restaurant
          </motion.h2>

          <motion.p
            data-kj-motion
            variants={reveal}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/86 md:text-lg"
          >
            Slow rice, charred kebabs, hand-folded mantu, and a warm dining
            room made for family celebrations.
          </motion.p>

          <motion.div
            data-kj-motion
            variants={reveal}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/reservations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-kj-accent px-7 text-sm font-semibold uppercase tracking-[0.12em] text-kj-accent-ink transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-kj-accent-hover"
            >
              Book a Table
              <Utensils size={18} />
            </Link>
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border border-white/40 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent"
            >
              View Menu
            </Link>
          </motion.div>

          {/* Slider dots */}
          <motion.div
            data-kj-motion
            variants={reveal}
            className="mt-8 flex items-center justify-center gap-2"
          >
            {sliderImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                suppressHydrationWarning
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-kj-accent"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={prev}
          suppressHydrationWarning
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 p-2.5 text-white backdrop-blur-sm transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent md:inline-flex"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          suppressHydrationWarning
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 p-2.5 text-white backdrop-blur-sm transition-colors duration-200 hover:border-kj-accent hover:text-kj-accent md:inline-flex"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
