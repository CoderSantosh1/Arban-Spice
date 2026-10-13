import Image from "next/image";
import Link from "next/link";
import { gallery, homeChefs, menuCategories, posts, testimonials } from "@/lib/data";
import Carousel from "./Carousel";
import Counter from "./Counter";
import { CrossMark, LeafBranch, Script } from "./Decor";
import { ArrowRight, ChefHat, Cloche, ForkKnife, Leaf, Quote, Star, TableIcon, Trophy, Users } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* ------------------------------------------------------------------ */
/* Inner-page banner                                                   */
/* ------------------------------------------------------------------ */
export function PageBanner({ title, crumb }: { title: string; crumb?: string }) {
  const letters = title.split("");
  return (
    <section className="relative isolate flex h-[300px] items-center justify-center overflow-hidden sm:h-[380px]">
      <Image src="/common/page-banner.jpg" alt="" fill priority sizes="100vw" className="-z-20 animate-kenburns object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/55 via-black/35 to-navy/60" />
      <div className="text-center text-white">
        <h1 className="flex items-center justify-center gap-4 font-display text-[38px] tracking-[0.04em] uppercase sm:gap-6 sm:text-6xl">
          <CrossMark className="hidden h-4 w-8 animate-[fadeIn_1s_1.2s_both] text-gold-2 sm:block" />
          <span aria-label={title}>
            {letters.map((ch, k) => (
              <span key={k} aria-hidden className="letter" style={{ animationDelay: `${0.25 + k * 0.05}s` }}>
                {ch === " " ? " " : ch}
              </span>
            ))}
          </span>
          <CrossMark className="hidden h-4 w-8 animate-[fadeIn_1s_1.2s_both] text-gold-2 sm:block" />
        </h1>
        <nav aria-label="Breadcrumb" className="mt-24 animate-[fadeIn_1s_0.9s_both] text-[13px] [text-shadow:0_1px_8px_rgba(0,0,0,.7)] font-medium tracking-[0.16em] uppercase sm:mt-28">
          <Link href="/" className="transition-colors hover:text-gold-2">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{crumb ?? title}</span>
        </nav>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About intro                                                          */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* Menu categories (home)                                               */
/* ------------------------------------------------------------------ */
export function MenuCategories() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute top-24 -left-10 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-0 -right-4 text-[160px]">Menu</Script>
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Menu"
          title={
            <>
              A Taste for <em>Every</em> Mood
            </>
          }
          text={
            <>
              From delicious breakfasts to flavourful appetisers and refreshing drinks,
              <br className="hidden sm:block" /> explore a menu crafted to delight every palate.
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
                    View menu
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

/* ------------------------------------------------------------------ */
/* Chefs                                                               */
/* ------------------------------------------------------------------ */
export function ChefCard({ name, role, img, aspect = "aspect-[284/346]" }: { name: string; role: string; img: string; aspect?: string }) {
  return (
    <div className="group frame">
      <div className={`zoom-img relative overflow-hidden ${aspect}`}>
        <Image src={img} alt={name} fill sizes="(min-width:1024px) 320px, (min-width:640px) 50vw, 100vw" className="object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-gradient-to-t from-navy/90 to-transparent pt-10 pb-4 transition-transform duration-500 group-hover:translate-y-0">
          {["f", "in", "x"].map((s) => (
            <span key={s} className="grid h-9 w-9 place-items-center rounded-full border border-gold-2 text-xs font-semibold text-white uppercase transition-colors hover:bg-gold">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="border border-t-0 border-gold-2/80 bg-cream py-6 text-center transition-colors duration-500 group-hover:bg-white">
        <h3 className="font-serif text-2xl text-ink">{name}</h3>
        <span className="mx-auto mt-3 block h-[2px] w-6 bg-gold transition-all duration-500 group-hover:w-14" />
        <p className="mt-3 text-[12px] font-medium tracking-[0.22em] text-gold uppercase">{role}</p>
      </div>
    </div>
  );
}

export function ChefsSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute bottom-10 -left-12 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-6 -right-6 text-[160px]">Chefs</Script>
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Chefs"
          title={
            <>
              Meet Our <em>Expert</em> Chefs
            </>
          }
          text={
            <>
              Our talented chefs bring years of experience and a true passion for food,
              <br className="hidden sm:block" /> creating dishes that are full of flavour and crafted with care.
            </>
          }
        />
        <div className="mx-auto mt-16 grid max-w-[1080px] gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-24">
          {homeChefs.map((c, k) => (
            <Reveal key={c.name} delay={k * 150}>
              <ChefCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery slider (home)                                                */
/* ------------------------------------------------------------------ */
export function GallerySection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute top-16 -left-10 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-10 -right-6 text-[150px]">Gallery</Script>
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Gallery"
          title={
            <>
              Moments from <em>Our Restaurant</em>
            </>
          }
          text={
            <>
              Discover the ambience, delicious food and memorable experiences
              <br className="hidden sm:block" /> that make our restaurant special.
            </>
          }
        />
        <Reveal delay={200} className="mx-auto mt-10 max-w-[1110px] px-4 lg:px-0">
          <Carousel gap={64}>
            {gallery.slice(0, 9).map((src, k) => (
              <div key={src} className="frame mt-4 ml-5">
                <Link href="/gallery" className="group zoom-img shine relative block aspect-square overflow-hidden border border-gold-2">
                  <Image src={src} alt={`Gallery photo ${k + 1}`} fill sizes="(min-width:1024px) 330px, 90vw" className="object-cover" />
                  <span className="absolute inset-0 grid place-items-center bg-navy/0 transition-colors duration-500 group-hover:bg-navy/45">
                    <span className="grid h-14 w-14 scale-0 place-items-center rounded-full bg-gold text-3xl text-white transition-transform duration-500 group-hover:scale-100">+</span>
                  </span>
                </Link>
              </div>
            ))}
          </Carousel>
        </Reveal>
        <Reveal delay={200} className="mt-8 text-center">
          <Link href="/gallery" className="btn-outline px-16">View more</Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                         */
/* ------------------------------------------------------------------ */
export function TestimonialCard({ name, city, img, text }: (typeof testimonials)[number]) {
  return (
    <figure className="group flex h-full flex-col border border-sand bg-cream px-8 py-7 shadow-[0_6px_30px_-12px_rgba(120,80,30,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-gold-2 hover:shadow-[0_24px_50px_-20px_rgba(120,80,30,0.45)]">
      <Quote className="h-10 w-10 text-gold-2 transition-transform duration-500 group-hover:-rotate-12" />
      <div className="mt-3 flex gap-1 text-gold">
        {Array.from({ length: 5 }, (_, k) => (
          <Star key={k} className="h-5 w-5" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[16px] leading-[1.65] text-ink/80">{text}</blockquote>
      <span className="mt-5 block h-px w-11 bg-gold transition-all duration-500 group-hover:w-20" />
      <figcaption className="mt-5 flex items-center gap-5">
        <span className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-[3px] border-white ring-2 ring-sand">
          <Image src={img} alt={name} fill sizes="72px" className="object-cover" />
        </span>
        <span>
          <span className="block font-serif text-xl font-semibold text-ink">{name}</span>
          <span className="text-[14px] text-muted">{city}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-2 to-beige/70 py-16 lg:py-24">
      <div className="absolute -top-6 -left-16 hidden h-[240px] w-[292px] animate-float lg:block">
        <Image src="/common/deco-plate.jpg" alt="" fill sizes="290px" className="object-cover mix-blend-multiply" />
      </div>
      <LeafBranch flip className="absolute top-10 right-0 h-72 w-44 animate-sway opacity-60" />
      <LeafBranch className="absolute bottom-0 left-0 h-56 w-36 animate-sway opacity-60 [animation-delay:-2s]" />
      <div className="container-x relative">
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
              <br className="hidden sm:block" /> the taste, ambience and hospitality at our restaurant.
            </>
          }
        />
        <Reveal delay={200} className="mx-auto mt-8 max-w-[1040px] px-4 lg:px-0">
          <Carousel gap={28} arrows="round-chevron" autoplay={6000}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Blog                                                                 */
/* ------------------------------------------------------------------ */
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

export function BlogIntro() {
  return (
    <SectionHeading
      eyebrow="Our Blog"
      title={
        <>
          Latest <em>Food Stories</em>
        </>
      }
      text={
        <>
          Explore our latest articles, food tips, chef’s special recipes and behind
          <br className="hidden sm:block" /> the scenes stories from our restaurant.
        </>
      }
    />
  );
}

export function BlogSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute top-24 -left-10 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-4 -right-4 text-[150px]">Blog</Script>
      <div className="container-x relative">
        <BlogIntro />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, k) => (
            <Reveal key={p.title} delay={k * 150}>
              <BlogCard {...p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/blog" className="btn-outline px-14">
            View more <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why choose us (about)                                                */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* Achievements counters (about)                                        */
/* ------------------------------------------------------------------ */
const stats = [
  { Icon: Users, n: 150, label: "Daily Guests Served" },
  { Icon: ChefHat, n: 82, label: "Special Dishes" },
  { Icon: ForkKnife, n: 35, label: "Expert Chefs" },
  { Icon: Trophy, n: 10, label: "Awards Won" },
];

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-2 to-cream py-16 lg:py-24">
      <div className="absolute top-10 -left-24 hidden h-64 w-64 animate-spin-slow overflow-hidden rounded-full ring-4 ring-white lg:block">
        <Image src="/gallery/gallery-9.jpg" alt="" fill sizes="256px" className="object-cover" />
      </div>
      <div className="absolute -right-20 bottom-8 hidden h-56 w-56 animate-spin-slow overflow-hidden rounded-full ring-4 ring-white [animation-direction:reverse] lg:block">
        <Image src="/gallery/gallery-6.jpg" alt="" fill sizes="224px" className="object-cover" />
      </div>
      <LeafBranch flip className="absolute top-0 right-40 h-48 w-32 opacity-50" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Achievements"
          title={
            <>
              A Journey of
              <br />
              <em>Taste &amp; Trust</em>
            </>
          }
          text="Over the years, we have served delicious food, created memorable dining experiences and earned the trust of our valued guests. These milestones inspire us to keep delivering great taste and warm hospitality every day."
        />
        <div className="mx-auto mt-12 grid max-w-[910px] grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map(({ Icon, n, label }, k) => (
            <Reveal key={label} delay={k * 120} variant="up">
              <div className="group rounded-md border border-sand bg-cream px-4 pt-5 pb-6 text-center shadow-[0_8px_30px_-16px_rgba(120,80,30,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-gold-2 hover:bg-white">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-white transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </span>
                <p className="mt-3 font-serif text-[44px] leading-none text-ink">
                  <Counter to={n} />
                </p>
                <p className="mx-auto mt-3 max-w-[8rem] text-[11px] font-medium tracking-[0.3em] text-ink uppercase">{label}</p>
                <span className="mx-auto mt-3 block h-px w-8 bg-gold-2 transition-all duration-500 group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
