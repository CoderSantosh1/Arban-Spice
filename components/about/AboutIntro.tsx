import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/shared/Counter";
import { ArrowRight } from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";

export function AboutIntro({ full = false }: { full?: boolean }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="absolute top-8 left-0 hidden h-[310px] w-[35%] bg-beige lg:block" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal variant="clip" className="relative">
          <div aria-hidden className="absolute top-20 -left-12 hidden h-[60%] w-16 bg-sand lg:block" />
          <div className="group zoom-img shine relative aspect-[541/615] overflow-hidden">
            <Image src="/home/about-dish.jpg" alt="Grilled chicken with roasted vegetables" fill sizes="(min-width:1024px) 541px, 100vw" className="object-cover" />
          </div>
          <div className="absolute -right-4 -bottom-6 hidden animate-float rounded-sm bg-navy px-7 py-5 text-center text-white shadow-2xl sm:block">
            <p className="font-serif text-4xl text-gold-2">
              <Counter to={15} />
            </p>
            <p className="mt-1 text-[11px] tracking-[0.25em] uppercase">Years of taste</p>
          </div>
        </Reveal>

        <div>
          <Reveal variant="fade" className="flex items-center gap-4">
            <span className="eyebrow">About our restaurant</span>
            <span className="gold-line grow-line origin-left" />
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 font-serif text-[38px] leading-[1.1] font-medium sm:text-[56px]">
            A <em className="text-gold-2 not-italic">Culinary</em> Journey Made with Passion
          </Reveal>
          <Reveal as="p" delay={200} className="mt-7 text-[17px] leading-[1.6] text-muted">
            At ArbanSpice, we believe good food brings people together. Our restaurant is a perfect blend of authentic flavours, fresh ingredients and
            modern culinary techniques, creating memorable dining experiences for every guest.
          </Reveal>
          <Reveal as="p" delay={280} className="mt-5 text-[17px] leading-[1.6] text-muted">
            From traditional favourites to contemporary dishes, every plate is crafted with care by our expert chefs. We are committed to offering
            exceptional taste, warm hospitality and a relaxed ambience, making every meal at ArbanSpice a special experience.
          </Reveal>
          {full ? (
            <Reveal as="p" delay={360} className="mt-5 text-[17px] leading-[1.6] text-muted">
              Every season our kitchen sources the finest local produce, spices and seafood, so the menu keeps evolving while the warmth of our welcome
              stays exactly the same.
            </Reveal>
          ) : (
            <Reveal delay={360} className="mt-10">
              <Link href="/about" className="btn-outline">
                Read more about us <ArrowRight className="h-5 w-5" />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
