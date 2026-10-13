"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "./Icons";

type Props = {
  children: ReactNode;
  /** Items visible at [<640, <1024, >=1024] widths. */
  perView?: [number, number, number];
  gap?: number;
  autoplay?: number;
  arrows?: "round-arrow" | "round-chevron";
  className?: string;
};

function usePerView([sm, md, lg]: [number, number, number]) {
  const [n, setN] = useState(lg);
  useEffect(() => {
    const calc = () => setN(window.innerWidth < 640 ? sm : window.innerWidth < 1024 ? md : lg);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [sm, md, lg]);
  return n;
}

/** Sliding carousel that pages one item at a time, with arrows, dots, autoplay and swipe. */
export default function Carousel({ children, perView = [1, 2, 3], gap = 32, autoplay = 5000, arrows = "round-arrow", className = "" }: Props) {
  const items = Children.toArray(children);
  const view = usePerView(perView);
  const pages = Math.max(1, items.length - view + 1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const i = Math.min(index, pages - 1);

  const go = (d: number) => setIndex((v) => (Math.min(v, pages - 1) + d + pages) % pages);

  useEffect(() => {
    if (!autoplay || paused || pages < 2) return;
    const t = setInterval(() => setIndex((v) => (Math.min(v, pages - 1) + 1) % pages), autoplay);
    return () => clearInterval(t);
  }, [autoplay, paused, pages]);

  const Prev = arrows === "round-arrow" ? ArrowLeft : ChevronLeft;
  const Next = arrows === "round-arrow" ? ArrowRight : ChevronRight;
  const arrowCls =
    "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-gold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-navy";

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="overflow-hidden px-1 pt-6 pb-4">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.25,1)]"
          style={{ gap, transform: `translateX(calc(${-i} * ((100% - ${(view - 1) * gap}px) / ${view} + ${gap}px)))` }}
        >
          {items.map((child, k) => (
            <div key={k} className="shrink-0" style={{ width: `calc((100% - ${(view - 1) * gap}px) / ${view})` }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <>
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className={`${arrowCls} -left-2 lg:-left-16`}>
            <Prev className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Next" onClick={() => go(1)} className={`${arrowCls} -right-2 lg:-right-16`}>
            <Next className="h-5 w-5" />
          </button>
          <div className="mt-6 flex justify-center gap-3">
            {Array.from({ length: pages }, (_, k) => (
              <button
                key={k}
                type="button"
                aria-label={`Go to slide ${k + 1}`}
                onClick={() => setIndex(k)}
                className={`h-3 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-gold" : "w-3 bg-sand hover:bg-gold-2"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
