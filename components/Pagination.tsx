"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

/** Visual pager matching the design; tracks the selected page locally. */
export default function Pagination({ pages, className = "" }: { pages: number; className?: string }) {
  const [page, setPage] = useState(1);
  const btn = "grid h-10 w-10 place-items-center rounded border border-sand bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold";
  return (
    <nav aria-label="Pagination" className={`flex justify-center gap-3 ${className}`}>
      <button type="button" aria-label="Previous page" className={btn} onClick={() => setPage((p) => Math.max(1, p - 1))}>
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: pages }, (_, k) => k + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={n === page ? "page" : undefined}
          onClick={() => setPage(n)}
          className={n === page ? `${btn} border-gold bg-gold text-white hover:text-white` : btn}
        >
          {n}
        </button>
      ))}
      <button type="button" aria-label="Next page" className={btn} onClick={() => setPage((p) => Math.min(pages, p + 1))}>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
