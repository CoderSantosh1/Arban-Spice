import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Check, ChevronRight, CrossedUtensils, Folder, Quote, Search, User } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { PageBanner } from "@/components/Sections";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "The Impact of Fresh Ingredients on Great Food" };

const categories = ["Food", "Industry Expertise", "Restaurants", "Fast Casual Restaurants", "Casual Dining", "Pizzerias", "Coffee’s"];
const latest = [
  { ...posts[0], img: "/gallery/gallery-1.jpg", date: "12 Aug 2024" },
  { ...posts[1], img: "/gallery/gallery-13.jpg", date: "08 Aug 2024" },
  { ...posts[2], img: "/home/menu-drinks.jpg", date: "03 Aug 2024" },
  { ...posts[4], img: "/menu/special-4.jpg", date: "28 Jul 2024" },
];
const benefits = [
  "Better taste and aroma",
  "Fewer preservatives",
  "Rich in essential nutrients",
  "Adds natural colour and texture",
  "Supports local farmers",
  "Creates healthier meals",
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="h2" className="mt-10 font-serif text-[28px] font-medium text-ink sm:text-[34px]">
      {children}
      <span className="grow-line mt-3 block h-[2px] w-16 origin-left bg-gold" />
    </Reveal>
  );
}

function WidgetTitle({ children, search }: { children: string; search?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-gold bg-navy px-7 py-5">
      <h3 className="font-display text-[22px] tracking-[0.04em] text-gold-2 uppercase">{children}</h3>
      {search && <Search className="h-6 w-6 text-gold-2" />}
    </div>
  );
}

export default function BlogDetailsPage() {
  return (
    <>
      <PageBanner title="Blog Detail" />
      <section className="py-14 lg:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_385px]">
          <article>
            <Reveal variant="clip" className="zoom-img relative aspect-[820/540] overflow-hidden">
              <Image src="/blog/detail-main.jpg" alt="Elegant dinner table" fill priority sizes="(min-width:1024px) 820px, 100vw" className="object-cover" />
            </Reveal>
            <Reveal className="flex flex-wrap gap-x-12 gap-y-2 bg-beige/60 px-6 py-3.5 text-[15px] text-muted">
              <span className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /> 08 Sep 2024</span>
              <span className="flex items-center gap-2"><User className="h-5 w-5 text-gold" /> Admin</span>
              <span className="flex items-center gap-2"><Folder className="h-5 w-5 text-gold" /> Food, Restaurant</span>
            </Reveal>
            <Reveal as="h1" className="mt-6 font-serif text-[36px] leading-[1.12] font-medium sm:text-[50px]">
              The Impact of Fresh Ingredients on <span className="text-gold">Great Food</span>
            </Reveal>
            <Reveal as="p" className="mt-4 text-[17px] leading-[1.7] text-muted">
              Fresh ingredients are the heart of every great dish. They bring natural flavours, vibrant colours and essential nutrients, making food not
              only delicious but also healthier. In this article, we explore why fresh ingredients matter and how they can transform your dining
              experience.
            </Reveal>
            <Reveal variant="zoom" className="my-8 flex items-center gap-4 text-gold">
              <span className="h-px flex-1 bg-gold-2" />
              <CrossedUtensils className="h-7 w-7 animate-sway" />
              <span className="h-px flex-1 bg-gold-2" />
            </Reveal>

            <H2>Why Fresh Ingredients Matter</H2>
            <Reveal as="p" className="mt-4 text-[17px] leading-[1.7] text-muted">
              Using fresh, seasonal ingredients enhances the taste, texture and aroma of every dish. Fresh produce contains more nutrients, fewer
              preservatives and a natural flavour that processed ingredients simply can’t match.
            </Reveal>
            <Reveal variant="clip" className="zoom-img relative mt-7 aspect-[815/345] overflow-hidden">
              <Image src="/blog/bowl.jpg" alt="Fresh salad bowl" fill sizes="(min-width:1024px) 820px, 100vw" className="object-cover" />
            </Reveal>

            <H2>How Fresh Ingredients Enhance Flavour</H2>
            <Reveal as="p" className="mt-4 text-[17px] leading-[1.7] text-muted">
              When ingredients are fresh, their natural flavours shine. From crisp vegetables to aromatic herbs, each element adds depth and richness to
              the dish, creating a more satisfying and memorable meal.
            </Reveal>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {benefits.map((b, k) => (
                <Reveal as="li" key={b} delay={k * 80} variant="left" className="flex items-center gap-4 text-[17px] text-ink">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  {b}
                </Reveal>
              ))}
            </ul>

            <H2>Tips for Choosing Fresh Ingredients</H2>
            <Reveal as="p" className="mt-4 text-[17px] leading-[1.7] text-muted">
              Opt for seasonal produce, check for vibrant colours, and choose locally sourced ingredients whenever possible. Fresh ingredients not only
              taste better but also support sustainable and healthy eating habits.
            </Reveal>
            <Reveal as="blockquote" variant="right" className="mt-7 flex gap-5 border-l-4 border-gold bg-beige/60 px-7 py-6">
              <Quote className="h-9 w-9 shrink-0 text-gold" />
              <div>
                <p className="font-serif text-[21px] leading-snug text-ink italic">
                  Good food starts with great ingredients. Fresh, local and seasonal produce always makes a difference in every bite.
                </p>
                <footer className="mt-3 text-muted">— Chef Michael Brown</footer>
              </div>
            </Reveal>
          </article>

          <aside className="space-y-10">
            <Reveal variant="right" className="bg-beige/50">
              <WidgetTitle search>Categories</WidgetTitle>
              <ul className="px-8 py-5">
                {categories.map((c) => (
                  <li key={c}>
                    <Link href="/blog" className="group flex items-center gap-3 py-2.5 text-[18px] text-ink transition-colors hover:text-gold-dark">
                      <ChevronRight className="h-5 w-5 text-gold transition-transform duration-300 group-hover:translate-x-1.5" /> {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="right" delay={100} className="bg-beige/50">
              <WidgetTitle>Latest Posts</WidgetTitle>
              <ul className="px-6 py-2">
                {latest.map((p) => (
                  <li key={p.title} className="border-b border-sand last:border-0">
                    <Link href="/blog-details" className="group flex gap-5 py-5">
                      <span className="zoom-img relative h-[105px] w-[115px] shrink-0 overflow-hidden">
                        <Image src={p.img} alt="" fill sizes="115px" className="object-cover" />
                      </span>
                      <span>
                        <span className="block font-serif text-[19px] leading-snug text-ink transition-colors group-hover:text-gold-dark">{p.title}</span>
                        <span className="mt-3 flex items-center gap-2 text-[15px] text-muted">
                          <Calendar className="h-4 w-4 text-gold" /> {p.date}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="zoom" className="group relative aspect-[385/525] overflow-hidden">
              <Image src="/gallery/gallery-1.jpg" alt="" fill sizes="385px" className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1b120b]/95 via-[#1b120b]/30 to-transparent" />
              <div className="absolute inset-x-0 top-0 p-8 text-center text-white">
                <p className="text-[13px] tracking-[0.25em] text-gold-2 uppercase">Taste the difference</p>
                <p className="mt-3 font-serif text-[40px] leading-tight">Fresh Food Brighter Days</p>
                <span className="mx-auto mt-4 block h-[2px] w-12 bg-gold-2 transition-all duration-500 group-hover:w-24" />
                <Link href="/book-table" className="btn-gold mt-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Book a Table
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
