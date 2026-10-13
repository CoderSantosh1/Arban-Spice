import Image from "next/image";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/shared/SectionHeading";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden py-10 sm:py-12 lg:py-16">
      {/* Background image */}
      <Image
        src="/common/testimonials-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 z-[1] bg-[#fffaf3]/10" />

      <div className="container-x relative z-10">
        {/* Section heading */}
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Our <em>Guests</em> Say
            </>
          }
          text={
            <>
              Real stories from our valued guests who have experienced
              <br className="hidden sm:block" />
              the taste, ambience and hospitality at our restaurant.
            </>
          }
        />

        {/* Cards with decorative navigation arrows */}
        <div className="relative mx-auto mt-8 max-w-[1045px] sm:mt-10">
          {/* Left arrow — decorative only */}
          <span
            aria-hidden="true"
            className="absolute left-[-64px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#c79449] text-3xl leading-none text-white shadow-md lg:flex"
          >
            ‹
          </span>

          {/* Right arrow — decorative only */}
          <span
            aria-hidden="true"
            className="absolute right-[-64px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#c79449] text-3xl leading-none text-white shadow-md lg:flex"
          >
            ›
          </span>

          {/* Three static testimonial cards */}
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
              />
            ))}
          </div>
        </div>

        {/* Static pagination dots */}
        <div
          className="mt-8 flex items-center justify-center gap-3"
          aria-label="Decorative pagination indicators"
        >
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full bg-[#b7792d]"
          />
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full bg-[#e9d5b6]"
          />
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full bg-[#e9d5b6]"
          />
        </div>
      </div>
    </section>
  );
}
