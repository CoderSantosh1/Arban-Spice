import Image from "next/image";
import Link from "next/link";
import { homeCopy, menuCategories } from "@/app/data";
import { LeafBranch, Script } from "@/components/shared/Decor";
import { ArrowRight } from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export function MenuCategories() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute top-24 -left-10 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-0 -right-4 text-[160px]">{homeCopy.menu.script}</Script>
      <div className="container-x relative">
        <SectionHeading
          eyebrow={homeCopy.menu.eyebrow}
          title={
            <>
              {homeCopy.menu.titleStart} <em>{homeCopy.menu.titleHighlight}</em> {homeCopy.menu.titleEnd}
            </>
          }
          text={
            <>
              {homeCopy.menu.description}
            </>
          }
        />
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-24">
          {menuCategories.map((c, k) => (
            <Reveal key={c.title} delay={k * 150} className={k === 1 ? "lg:mt-9" : ""}>
              <Link href="/menu" className="group frame block">
                <div className="zoom-img shine relative aspect-[302/322] overflow-hidden">
                  <Image src={c.img} alt={c.title} fill sizes="(min-width:1024px) 304px, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/20" />
                </div>
                <div className="border border-t-0 border-gold-2 bg-cream py-7 text-center transition-colors duration-500 group-hover:bg-white">
                  <h3 className="font-serif text-[28px] text-ink">{c.title}</h3>
                  <span className="mx-auto mt-3 block h-[2px] w-7 bg-gold-2 transition-all duration-500 group-hover:w-16" />
                  <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-gold uppercase">
                    {homeCopy.menu.viewLabel}
                    <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-500 group-hover:w-4 group-hover:opacity-100" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
