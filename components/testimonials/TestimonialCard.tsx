import Image from "next/image";
import { testimonials } from "@/app/types";
import { Quote, Star } from "@/components/shared/Icons";

export function TestimonialCard({
  name,
  city,
  img,
  text,
}: (typeof testimonials)[number]) {
  return (
    <figure className="group flex h-full min-h-[370px] flex-col border border-[#ecdcc4] bg-[#fffcf7] px-8 pt-8 pb-7 shadow-[0_10px_30px_-18px_rgba(120,80,30,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b98c] hover:shadow-[0_24px_45px_-22px_rgba(120,80,30,0.5)] lg:px-9">
      {/* Quote icon */}
      <Quote className="h-10 w-10 shrink-0 text-[#c69250] transition-transform duration-500 group-hover:-rotate-12" />

      {/* Five-star rating */}
      <div className="mt-3 flex gap-[3px] text-[#c0832b]" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="h-5 w-5" />
        ))}
      </div>

      {/* Review */}
      <blockquote className="mt-4 flex-1 text-[16px] leading-[1.45] text-[#55575e]">{text}</blockquote>

      {/* Gold divider */}
      <span className="mt-5 block h-[2px] w-11 shrink-0 bg-[#c69250] transition-all duration-500 group-hover:w-20" />

      {/* Guest profile */}
      <figcaption className="mt-5 flex items-center gap-5">
        <span className="relative h-[84px] w-[84px] shrink-0 rounded-full bg-gradient-to-br from-[#e9cfa5] to-[#c69250] p-[3px] shadow-[0_6px_14px_-6px_rgba(120,80,30,0.45)]">
          <span className="relative block h-full w-full overflow-hidden rounded-full border-[3px] border-white">
            <Image src={img} alt={name} fill sizes="84px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </span>
        </span>

        <span className="min-w-0">
          <span className="block font-serif text-[21px] leading-tight font-semibold text-[#152036]">{name}</span>
          <span className="mt-1 block text-[14px] text-[#6c6d72]">{city}</span>
        </span>
      </figcaption>
    </figure>
  );
}
