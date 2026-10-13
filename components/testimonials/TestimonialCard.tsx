import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Quote, Star } from "@/components/shared/Icons";

export function TestimonialCard({
  name,
  city,
  img,
  text,
}: (typeof testimonials)[number]) {
  return (
    <figure className="flex h-full min-h-[350px] flex-col border border-[#ead7bd] bg-[#fffdf9]/95 px-6 py-6 shadow-[0_6px_25px_-15px_rgba(120,80,30,0.18)] sm:min-h-[370px] sm:px-7 sm:py-7">
      {/* Quote icon */}
      <Quote className="h-10 w-10 shrink-0 text-[#c79449]" />

      {/* Five-star rating */}
      <div
        className="mt-2 flex gap-1 text-[#c18a2f]"
        aria-label="5 out of 5 stars"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="h-[18px] w-[18px]" />
        ))}
      </div>

      {/* Review */}
      <blockquote className="mt-4 flex-1 text-[14px] leading-[1.65] text-[#62636a] sm:text-[15px]">
        {text}
      </blockquote>

      {/* Gold divider */}
      <span className="mt-5 block h-px w-11 shrink-0 bg-[#c79449]" />

      {/* Guest profile */}
      <figcaption className="mt-5 flex items-center gap-4">
        <span className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full border-[3px] border-white ring-2 ring-[#e5c79d]">
          <Image
            src={img}
            alt={name}
            fill
            sizes="68px"
            className="object-cover"
          />
        </span>

        <span className="min-w-0">
          <span className="block font-serif text-[18px] font-semibold leading-tight text-[#192034] sm:text-xl">
            {name}
          </span>

          <span className="mt-1 block text-[13px] text-[#77777b] sm:text-[14px]">
            {city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
