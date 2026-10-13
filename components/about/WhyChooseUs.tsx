import Image from "next/image";
import Link from "next/link";
import { LeafBranch } from "@/components/shared/Decor";
import { ArrowRight, ChefHat, Cloche, Leaf, TableIcon } from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";

const features = [
  { Icon: ChefHat, title: "Delicious Food", text: "Fresh ingredients and expertly crafted recipes served with authentic flavours." },
  { Icon: Cloche, title: "Warm Hospitality", text: "Our friendly staff ensures you feel welcome and cared for every time you visit." },
  { Icon: TableIcon, title: "Elegant Ambience", text: "A cozy and stylish environment perfect for family dining, celebrations and special moments." },
  { Icon: Leaf, title: "Quality & Freshness", text: "We use high-quality ingredients to bring you the best taste in every bite." },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute bottom-0 left-0 h-64 w-40 animate-sway opacity-60" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal variant="fade" className="flex items-center gap-5">
            <span className="gold-line grow-line origin-right" />
            <span className="eyebrow">Why choose us</span>
            <span className="gold-line grow-line origin-left" />
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 font-serif text-[34px] leading-[1.15] font-medium sm:text-[50px]">
            More Than Just a Meal
            <br />
            <em className="text-gold not-italic">A Memorable Experience</em>
          </Reveal>
          <Reveal as="p" delay={200} className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
            We are committed to serving delicious food, warm hospitality and a relaxing ambience. Every detail at our restaurant is designed to make your
            dining experience special and unforgettable.
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map(({ Icon, title, text }, k) => (
              <Reveal key={title} delay={150 + k * 100} variant="zoom">
                <div className="group flex h-full gap-5 border border-sand bg-cream p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold-2 hover:bg-white hover:shadow-xl">
                  <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-gold text-white transition-transform duration-700 group-hover:rotate-[360deg]">
                    <Icon className="h-9 w-9" />
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
              Explore our menu <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
        <Reveal variant="right" className="relative mx-4 my-6 lg:mx-0">
          <div aria-hidden className="absolute -top-6 -left-8 h-[42%] w-[36%] bg-gold-2" />
          <div aria-hidden className="absolute -right-8 -bottom-8 h-[56%] w-[16%] border border-gold-2" />
          <div aria-hidden className="absolute -right-8 -bottom-8 h-[12%] w-[46%] bg-gold-2" />
          <div className="group zoom-img shine relative aspect-[498/523] overflow-hidden">
            <Image src="/about/why-choose-us.jpg" alt="Restaurant interior" fill sizes="(min-width:1024px) 500px, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
