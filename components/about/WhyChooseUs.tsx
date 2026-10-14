import Image from "next/image";
import Link from "next/link";
import { LeafBranch } from "@/components/shared/Decor";
import { IconById } from "@/components/shared/IconById";
import { assets, whyChooseContent } from "@/app/data";
import Reveal from "@/components/shared/Reveal";


export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute bottom-0 left-0 h-64 w-40 animate-sway opacity-60" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal variant="fade" className="flex items-center gap-5">
            <span className="gold-line grow-line origin-right" />
            <span className="eyebrow">{whyChooseContent.eyebrow}</span>
            <span className="gold-line grow-line origin-left" />
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 font-serif text-[34px] leading-[1.15] font-medium sm:text-[50px]">
            {whyChooseContent.title}
            <br />
            <em className="text-gold not-italic">{whyChooseContent.highlight}</em>
          </Reveal>
          <Reveal as="p" delay={200} className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
            {whyChooseContent.description}
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyChooseContent.features.map(({ icon, title, text }, k) => (
              <Reveal key={title} delay={150 + k * 100} variant="zoom">
                <div className="group flex h-full gap-5 border border-sand bg-cream p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold-2 hover:bg-white hover:shadow-xl">
                  <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-gold text-white transition-transform duration-700 group-hover:rotate-[360deg]">
                    <IconById icon={icon} className="h-9 w-9" />
                  </span>
                  <span>
                    <span className="block font-serif text-xl font-semibold text-ink">{title}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-muted">{text}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-10">
            <Link href="/menu" className="btn-outline">
              {whyChooseContent.menuLinkLabel} <IconById icon={whyChooseContent.menuLinkIcon} className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
        <Reveal variant="right" className="relative mx-4 my-6 lg:mx-0">
          <div aria-hidden className="absolute -top-6 -left-8 h-[42%] w-[36%] bg-gold-2" />
          <div aria-hidden className="absolute -right-8 -bottom-8 h-[56%] w-[16%] border border-gold-2" />
          <div aria-hidden className="absolute -right-8 -bottom-8 h-[12%] w-[46%] bg-gold-2" />
          <div className="group zoom-img shine relative aspect-[498/523] overflow-hidden">
            <Image src={assets.whyChoose} alt="Restaurant interior" fill sizes="(min-width:1024px) 500px, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
