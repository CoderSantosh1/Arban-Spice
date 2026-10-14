"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { assets, testimonialIntroContent, testimonials, uiText } from "@/app/types";
import SectionHeading from "@/components/shared/SectionHeading";
import { ChevronLeft, ChevronRight } from "@/components/shared/Icons";
import { TestimonialCard } from "./TestimonialCard";

const CARDS_PER_PAGE = 3;
const AUTOPLAY_MS = 7000;

export function TestimonialsSection() {
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

  const startIndex = activePage * CARDS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const goToPage = (page: number) => {
    if (totalPages === 0) return;
    // Wrap around when reaching either end
    setActivePage((page + totalPages) % totalPages);
  };

  // Advance pages automatically unless the visitor is hovering the cards.
  useEffect(() => {
    if (paused || totalPages < 2) return;
    const t = setInterval(() => setActivePage((p) => (p + 1) % totalPages), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, totalPages]);

  const arrow =
    "absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#c69250] text-white shadow-[0_8px_20px_-8px_rgba(120,80,30,0.6)] transition-all duration-300 hover:scale-110 hover:bg-[#152036] sm:grid";

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-16 lg:pt-14 lg:pb-[70px]">
      {/* Background: cream paper with scallop plate, cutlery and leaf line-art baked in */}
      <Image src={assets.testimonialsBackground} alt="" fill sizes="100vw" className="-z-10 object-cover object-center" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow={testimonialIntroContent.eyebrow}
          title={
            <>
              {testimonialIntroContent.titleStart} <em>{testimonialIntroContent.titleHighlight}</em>
            </>
          }
          text={
            <>
              {testimonialIntroContent.description}
            </>
          }
        />

        <div
          className="relative mx-auto mt-10 max-w-[1030px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {totalPages > 1 && (
            <button type="button" onClick={() => goToPage(activePage - 1)} aria-label={uiText.previousTestimonials} className={`${arrow} -left-6 lg:-left-[75px]`}>
              <ChevronLeft className="h-5 w-5" strokeWidth={2.4} />
            </button>
          )}

          {/* Cards (re-keyed per page so they animate in on every change) */}
          <div key={activePage} className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, k) => (
              <div
                key={testimonial.name}
                className="h-full animate-[heroIn_0.7s_cubic-bezier(0.2,0.7,0.2,1)_both]"
                style={{ animationDelay: `${k * 110}ms`, opacity: 0, transform: "translateY(30px)" }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <button type="button" onClick={() => goToPage(activePage + 1)} aria-label={uiText.nextTestimonials} className={`${arrow} -right-6 lg:-right-[75px]`}>
              <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
            </button>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-9 flex items-center justify-center gap-4" aria-label={uiText.testimonialPagination}>
            {Array.from({ length: totalPages }, (_, page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-label={`Go to testimonial page ${page + 1}`}
                aria-current={activePage === page ? "page" : undefined}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activePage === page ? "scale-110 bg-[#b5782e]" : "bg-[#ead8bd] hover:bg-[#d2ad79]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
