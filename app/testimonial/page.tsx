
"use client";

import { useState } from "react";
import Image from "next/image";

import { assets, testimonials, testimonialPageContent, uiText } from "@/app/types";
import SectionHeading from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
const CARDS_PER_PAGE = 3;

export default function TestimonialsContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    testimonials.length / CARDS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="relative isolate mt-0 overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Full-width generated background */}
      <Image
        src={assets.testimonialsBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Soft cream overlay */}
      <div className="absolute inset-0 z-[1] bg-[#fffaf3]/10" />

      {/* Content */}
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={testimonialPageContent.eyebrow}
          title={
            <>
              {testimonialPageContent.titleStart} <em>{testimonialPageContent.titleHighlight}</em>
            </>
          }
          text={
            <>
              {testimonialPageContent.description}
            </>
          }
        />

        {/* Testimonial cards */}
        <div
          className="mx-auto mt-10 grid max-w-[1045px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>

        {/* Working pagination */}
        {totalPages > 1 && (
          <nav
            aria-label={uiText.testimonialPagination}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {/* Previous */}
            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label={uiText.previousPage}
              className="flex h-10 items-center justify-center border border-[#c79449] px-2 text-sm text-[#9c6d32] transition hover:bg-[#c79449] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#9c6d32]"
            >
              <Image src={assets.galleryLeftArrow} alt="right icon" className="w-3 h-3"/>
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const active = currentPage === page;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition ${
                    active
                      ? "border-[#b7792d] bg-[#b7792d] text-white"
                      : "border-[#ead7bd] bg-white/80 text-[#9c6d32] hover:bg-[#f1dfc5]"
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
              <Image src={assets.galleryRightArrow} alt="right Icon" className="w-3 h-3"/>
            </button>
          </nav>
        )}

        {/* Page indicator */}
        {/* {totalPages > 1 && (
          <p className="mt-4 text-center text-sm text-[#77716a]">
            Page {currentPage} of {totalPages}
          </p>
        )} */}
      </div>
    </section>
  );
}
