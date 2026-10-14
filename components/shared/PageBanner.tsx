import Image from "next/image";
import Link from "next/link";
import { CrossMark } from "@/components/shared/Decor";
import { assets, uiText } from "@/app/types";

export function PageBanner({ title, crumb }: { title: string; crumb?: string }) {
  const letters = title.split("");
  return (
    <section className="relative isolate flex h-[300px] items-center justify-center overflow-hidden sm:h-[380px]">
      <Image src={assets.pageBanner} alt="" fill priority sizes="100vw" className="-z-20 animate-kenburns object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/55 via-black/35 to-navy/60" />
      <div className="text-center text-white">
        <h1 className="flex items-center justify-center gap-4 font-display text-[38px] tracking-[0.04em] uppercase sm:gap-6 sm:text-6xl">
          <CrossMark className="hidden h-4 w-8 animate-[fadeIn_1s_1.2s_both] text-gold-2 sm:block" />
          <span aria-label={title}>
            {letters.map((ch, k) => (
              <span
                key={k}
                aria-hidden
                className="letter"
                style={{ animationDelay: `${0.25 + k * 0.05}s` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
          <CrossMark className="hidden h-4 w-8 animate-[fadeIn_1s_1.2s_both] text-gold-2 sm:block" />
        </h1>
        <nav aria-label="Breadcrumb" className="mt-24 animate-[fadeIn_1s_0.9s_both] text-[13px] [text-shadow:0_1px_8px_rgba(0,0,0,.7)] font-medium tracking-[0.16em] uppercase sm:mt-28">
          <Link href="/" className="transition-colors hover:text-gold-2">{uiText.breadcrumbHome}</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{crumb ?? title}</span>
        </nav>
      </div>
    </section>
  );
}

