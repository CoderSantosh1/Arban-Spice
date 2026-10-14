import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/data";
import { ArrowRight } from "@/components/shared/Icons";

export function BlogCard({ date, cat, title, text, img }: (typeof posts)[number]) {
  return (
    <Link href="/blog-details" className="group flex h-full flex-col border border-gold-2 bg-cream transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(120,80,30,0.45)]">
      <div className="zoom-img shine relative aspect-[382/235] overflow-hidden">
        <Image src={img} alt={title} fill sizes="(min-width:1024px) 382px, (min-width:640px) 50vw, 100vw" className="object-cover" />
        <span className="absolute top-3.5 left-3.5 border border-gold-2 bg-coal/90 px-3.5 py-2 text-[12px] font-semibold tracking-[0.18em] text-white uppercase">
          {date}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <p className="flex items-center gap-4 text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
          {cat}
          <span className="h-px w-11 bg-gold-2 transition-all duration-500 group-hover:w-20" />
        </p>
        <div className="mt-3 flex flex-1 items-end gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-[23px] leading-tight text-ink transition-colors duration-300 group-hover:text-gold-dark">{title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">{text}</p>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-white transition-all duration-500 group-hover:-rotate-45 group-hover:bg-navy">
            <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
