
"use client";

import { useState } from "react";
import Image from "next/image";
import { assets, chefs, chefsPageContent, uiText } from "@/app/types";
import { LeafBranch } from "@/components/shared/Decor";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ChefCard } from "@/components/home/ChefCard";

const CHEFS_PER_PAGE = 3;

export default function ChefsContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(chefs.length / CHEFS_PER_PAGE);

  const startIndex = (currentPage - 1) * CHEFS_PER_PAGE;

  const visibleChefs = chefs.slice(
    startIndex,
    startIndex + CHEFS_PER_PAGE
  );

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Decorative leaves */}
      <LeafBranch className="absolute top-10 -left-10 h-72 w-44 animate-sway opacity-60" />

      <LeafBranch
        flip
        className="absolute -right-8 bottom-24 h-72 w-44 animate-sway opacity-60 [animation-delay:-3s]"
      />

      <div className="container-x relative">
        {/* Heading */}
        <SectionHeading
          eyebrow={chefsPageContent.eyebrow}
          title={
            <>
              {chefsPageContent.titleStart} <em>{chefsPageContent.titleHighlight}</em> {chefsPageContent.titleEnd}
            </>
          }
          text={
            <>
              {chefsPageContent.description}
            </>
          }
        />

        {/* Paginated chef cards */}
        <div
          className="mx-auto mt-14 grid max-w-[1090px] gap-x-18 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {visibleChefs.map((chef, index) => (
            <Reveal
              key={chef.name}
              delay={(index % 3) * 100}
            >
              <ChefCard {...chef} aspect="aspect-[319/212]" />
            </Reveal>
          ))}
        </div>

        {/* Functional pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-3"
            aria-label={chefsPageContent.title}
          >
            {/* Previous */}
            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label={uiText.previousPage}
              className="flex h-10 items-center justify-center border border-[#c79449] px-2 text-sm text-[#9c6d32] transition hover:bg-[#c79449] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#9c6d32]"
            >
              <Image src={assets.galleryLeftArrow} alt="left  icon" className="w-3 h-3" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = currentPage === page;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-10 w-10 items-center justify-center border text-sm transition ${
                    isActive
                      ? "border-[#c79449] bg-[#c79449] text-white"
                      : "border-[#ead7bd] bg-white/80 text-[#8a683d] hover:border-[#c79449] hover:bg-[#f8eddd]"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              type="button"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label={uiText.nextPage}
              className="flex h-10 items-center justify-center border border-[#c79449] px-2 text-sm text-[#9c6d32] transition hover:bg-[#c79449] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#9c6d32]"
            >
               <Image src={assets.galleryRightArrow} alt="Right  icon" className="w-3 h-3" />
            </button>
          </nav>
        )}

        {/* Page indicator */}
        {totalPages > 1 && (
          <p className="mt-4 text-center text-sm text-neutral-500">
            Page {currentPage} of {totalPages}
          </p>
        )}
      </div>
    </section>
  );
}
