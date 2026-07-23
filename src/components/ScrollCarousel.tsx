"use client";

import { ReactNode, useRef } from "react";
import { IconArrowLeft, IconArrowRight } from "@/components/icons";

export function ScrollCarousel({
  children,
  arrowClassName = "border-line text-ink hover:bg-paper-dim",
}: {
  children: ReactNode;
  arrowClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${arrowClassName}`}
        >
          <IconArrowLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${arrowClassName}`}
        >
          <IconArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
