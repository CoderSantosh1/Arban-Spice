"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/data";
import { ChevronLeft, ChevronRight, Close, Plus } from "./Icons";
import Reveal from "./Reveal";

const tags = ["Food", "Ambience", "Kitchen", "Food", "Ambience", "Dessert", "Drinks", "Food", "Food", "Food", "Food", "Food", "Kitchen", "Ambience", "Dessert"];
const filters = ["All", "Food", "Ambience", "Kitchen", "Dessert", "Drinks"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = gallery.map((src, i) => ({ src, i, tag: tags[i] })).filter((g) => filter === "All" || g.tag === filter);

  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`border px-5 py-2 text-[12px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
              filter === f ? "border-gold bg-gold text-white" : "border-gold-2 text-ink hover:border-gold hover:text-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-[1130px] gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ src, i }, k) => (
          <div key={`${filter}-${src}`} className="frame ml-5 animate-[heroIn_0.7s_both]" style={{ animationDelay: `${(k % 6) * 70}ms`, opacity: 0, transform: "translateY(30px)" }}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open photo ${i + 1}`}
              className={`group zoom-img shine relative block w-full overflow-hidden ${i < 3 ? "aspect-[340/200]" : "aspect-[340/180]"}`}
            >
              <Image src={src} alt={`Gallery photo ${i + 1}`} fill sizes="(min-width:1024px) 340px, (min-width:640px) 50vw, 100vw" className="object-cover" />
              <span className="absolute inset-0 grid place-items-center bg-navy/0 transition-colors duration-500 group-hover:bg-navy/50">
                <span className="grid h-12 w-12 scale-0 rotate-90 place-items-center rounded-full bg-gold text-white transition-transform duration-500 group-hover:scale-100 group-hover:rotate-0">
                  <Plus className="h-6 w-6" />
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[90] grid animate-[fadeIn_0.3s] place-items-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <div className="relative aspect-[3/2] w-full max-w-5xl animate-[pulseIn_0.5s]" onClick={(e) => e.stopPropagation()}>
            <Image key={open} src={gallery[open]} alt={`Gallery photo ${open + 1}`} fill sizes="100vw" loading="eager" className="animate-[fadeIn_0.4s] object-contain" />
          </div>
          <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/30 text-white transition-transform duration-500 hover:rotate-90 hover:bg-gold">
            <Close className="h-6 w-6" />
          </button>
          {[
            [-1, "left-4", ChevronLeft],
            [1, "right-4", ChevronRight],
          ].map(([d, pos, Icon]) => {
            const I = Icon as typeof ChevronLeft;
            return (
              <button
                key={pos as string}
                type="button"
                aria-label={d === 1 ? "Next photo" : "Previous photo"}
                onClick={(e) => {
                  e.stopPropagation();
                  step(d as number);
                }}
                className={`absolute top-1/2 ${pos} grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-gold text-white transition-transform hover:scale-110`}
              >
                <I className="h-6 w-6" />
              </button>
            );
          })}
          <p className="absolute bottom-6 text-sm tracking-[0.2em] text-white/70">
            {open + 1} / {gallery.length}
          </p>
        </div>
      )}
    </>
  );
}
