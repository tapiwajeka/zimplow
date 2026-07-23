"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";
import { IconPlay } from "@/components/icons";

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative h-[640px] overflow-hidden bg-navy-deep lg:h-[720px]">
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(236,108,46,0.16),transparent_60%)]" />
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={s.image}
              alt={s.tag}
              fill
              priority={i === 0}
              className="object-cover opacity-90"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
        </div>
      ))}

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brass" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brass-light">
                {slide.tag}
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 lg:text-lg">
              {slide.copy}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/business-units"
                className="flex items-center gap-2 rounded-sm bg-brass px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-brass-dark"
              >
                Explore Our Businesses
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-sm border border-paper/25 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-paper"
              >
                <IconPlay className="h-4 w-4" />
                Watch Corporate Film
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 flex flex-col items-center gap-3 lg:right-10">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Slide ${i + 1}: ${s.tag}`}
            onClick={() => setActive(i)}
            className="group flex flex-col items-center gap-3"
          >
            <span
              className={`font-display text-xs font-semibold transition-colors ${
                i === active ? "text-brass-light" : "text-paper/40 group-hover:text-paper/70"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < heroSlides.length - 1 && <span className="h-6 w-px bg-paper/20" />}
          </button>
        ))}
      </div>
    </section>
  );
}
