"use client";

import { uiText } from "@/app/data";
import { ChevronLeft, ChevronRight } from "./Icons";

type PaginationProps = {
  pages: number;
  page: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export default function Pagination({
  pages,
  page,
  onPageChange,
  className = "",
}: PaginationProps) {
  const buttonBase =
    "grid h-10 w-10 place-items-center rounded border transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0";
  const idleButton = `${buttonBase} border-sand bg-white text-ink hover:border-gold hover:text-gold`;
  const activeButton = `${buttonBase} border-gold bg-gold text-white hover:text-white`;

  return (
    <nav aria-label={uiText.pagination} className={`flex justify-center gap-3 ${className}`}>
      <button
        type="button"
        aria-label={uiText.previousPage}
        className={idleButton}
        disabled={page <= 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
        <button
          key={number}
          type="button"
          aria-label={`Page ${number}`}
          aria-current={number === page ? "page" : undefined}
          onClick={() => onPageChange(number)}
          className={number === page ? activeButton : idleButton}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        aria-label={uiText.nextPage}
        className={idleButton}
        disabled={page >= pages}
        onClick={() => onPageChange(Math.min(pages, page + 1))}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}


