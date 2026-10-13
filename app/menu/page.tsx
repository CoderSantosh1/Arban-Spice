import type { Metadata } from "next";
import Image from "next/image";
import { LeafBranch } from "@/components/shared/Decor";
import { Bowl, Cake, Cloche, Fish, ForkKnife, Leaf, Plate } from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { PageBanner } from "@/components/shared/PageBanner";
import { desserts, mainMenu, seafood, specials, type Dish } from "@/lib/data";

export const metadata: Metadata = { title: "Our Menu" };

const icons = { plate: Plate, cloche: Cloche, bowl: Bowl, leaf: Leaf };

function MenuRow({ dish, delay }: { dish: Dish; delay: number }) {
  return (
    <Reveal delay={delay} className="group flex items-start gap-5">
      {dish.img && (
        <span className="relative mt-0.5 h-[66px] w-[66px] shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md ring-1 ring-gold-2 transition-transform duration-700 group-hover:rotate-[20deg]">
          <Image src={dish.img} alt="" fill sizes="66px" className="object-cover transition-transform duration-700 group-hover:scale-125" />
        </span>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <h4 className="font-serif text-[14.5px] font-semibold tracking-[0.03em] whitespace-nowrap text-ink uppercase transition-colors duration-300 group-hover:text-gold-dark">
            {dish.name}
          </h4>
          <span className="h-px flex-1 origin-left bg-gold-2 transition-transform duration-500 group-hover:scale-x-105" />
          <span className="font-serif text-xl font-semibold text-gold transition-transform duration-300 group-hover:scale-110">${dish.price}</span>
        </div>
        <p className="mt-1.5 max-w-[17rem] text-[14.5px] leading-snug text-muted">{dish.desc}</p>
      </div>
    </Reveal>
  );
}

export default function MenuPage() {
  return (
    <>
      <PageBanner title="Our Menu" />

      {/* Special menu */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <LeafBranch className="absolute top-6 -left-6 h-56 w-36 animate-sway opacity-70" />
        <LeafBranch flip className="absolute -right-6 bottom-0 h-56 w-36 animate-sway opacity-70 [animation-delay:-3s]" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Our Special Menu"
            title={
              <>
                Handcrafted Dishes,
                <br />
                <em>Made with Passion</em>
              </>
            }
            text={
              <>
                From fresh ingredients to authentic flavours, our special menu brings you
                <br className="hidden sm:block" /> a perfect blend of tradition and taste in every bite.
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specials.map((s, k) => {
              const Icon = icons[s.icon];
              return (
                <Reveal key={s.title} delay={k * 120}>
                  <article className="group h-full overflow-hidden rounded-md border border-sand bg-cream text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold-2 hover:bg-white hover:shadow-[0_24px_50px_-20px_rgba(120,80,30,0.45)]">
                    <div className="zoom-img shine relative aspect-[296/178] overflow-hidden">
                      <Image src={s.img} alt={s.title} fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
                    </div>
                    <span className="relative z-10 mx-auto -mt-7 grid h-14 w-14 place-items-center rounded-full border-[3px] border-white bg-gold text-white transition-transform duration-700 group-hover:rotate-[360deg]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div className="px-5 pt-3 pb-6">
                      <h3 className="font-serif text-[22px] text-ink">{s.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.text}</p>
                      <span className="mx-auto mt-4 block h-[2px] w-8 bg-gold-2 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main menu */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <Reveal variant="left" className="absolute top-24 left-0 hidden h-[500px] w-[200px] xl:block">
          <div className="absolute inset-0 -translate-x-5 -rotate-3 bg-gold" />
          <div className="relative h-full w-full -rotate-3 overflow-hidden border-4 border-white shadow-xl">
            <Image src="/menu/side-1.jpg" alt="" fill sizes="200px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal variant="right" className="absolute top-12 right-0 hidden h-[480px] w-[200px] xl:block">
          <div className="absolute inset-0 translate-x-5 rotate-3 bg-gold" />
          <div className="relative h-full w-full rotate-3 overflow-hidden border-4 border-white shadow-xl">
            <Image src="/menu/side-2.jpg" alt="" fill sizes="200px" className="object-cover" />
          </div>
        </Reveal>
        <LeafBranch className="absolute top-0 left-40 hidden h-44 w-28 opacity-60 xl:block" />

        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="fade" className="flex items-center justify-center gap-5">
              <span className="gold-line grow-line" />
              <span className="eyebrow">Top Rated Dishes</span>
              <span className="gold-line grow-line" />
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-4 flex items-center justify-center gap-5 font-serif text-[40px] font-medium uppercase sm:text-5xl">
              <span className="h-[2px] w-10 bg-gold-2" />
              <span>
                Main <span className="text-gold">Menu</span>
              </span>
              <span className="h-[2px] w-10 bg-gold-2" />
            </Reveal>
            <Reveal as="p" delay={200} className="mt-4 text-[16px] text-muted">
              Enjoy a carefully curated selection of our chef’s special dishes, prepared with
              <br className="hidden sm:block" /> fresh ingredients and authentic flavours.
            </Reveal>
          </div>
          <div className="mx-auto mt-10 grid max-w-[920px] gap-x-14 gap-y-5 md:grid-cols-2">
            {mainMenu.map((col, c) => (
              <div key={c} className="space-y-5">
                {col.map((d, k) => (
                  <MenuRow key={d.name + k} dish={d} delay={k * 90} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seafood & desserts */}
      <section className="relative overflow-hidden bg-cream-2/70 py-16 lg:py-20">
        <div className="container-x relative">
          <div className="text-center">
            <Reveal variant="down" className="flex items-center justify-center gap-3 text-gold">
              <span className="h-px w-20 bg-gold" />
              <ForkKnife className="h-6 w-6" />
              <span className="h-px w-20 bg-gold" />
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-3 font-serif text-[44px] font-semibold uppercase sm:text-6xl">
              Our <span className="text-gold">Menu</span>
            </Reveal>
            <Reveal as="p" delay={200} className="mt-3 text-[15px] text-muted">
              Explore our carefully crafted selection of seafood and desserts, made with
              <br className="hidden sm:block" /> the finest ingredients and a passion for great taste.
            </Reveal>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_440px_1fr] lg:gap-8">
            {[
              { list: seafood, Icon: Fish, kicker: "Fresh from the Ocean", title: "Seafood" },
              null,
              { list: desserts, Icon: Cake, kicker: "Food of Heaven", title: "Desserts" },
            ].map((col, c) =>
              col ? (
                <div key={c} className={c === 2 ? "lg:order-none" : ""}>
                  <Reveal className="text-center">
                    <col.Icon className="mx-auto h-9 w-9 text-gold" />
                    <p className="mt-2 text-[13px] font-medium tracking-[0.3em] text-gold uppercase">{col.kicker}</p>
                    <h3 className="mt-2 flex items-center justify-center gap-5 font-serif text-[36px] font-semibold uppercase">
                      <span className="h-px w-12 bg-gold" /> {col.title} <span className="h-px w-12 bg-gold" />
                    </h3>
                  </Reveal>
                  <div className="mt-8 space-y-7">
                    {col.list.map((d, k) => (
                      <MenuRow key={d.name + k} dish={d} delay={k * 90} />
                    ))}
                  </div>
                </div>
              ) : (
                <Reveal key={c} variant="zoom" className="relative mx-auto aspect-square w-full max-w-[440px]">
                  <div className="absolute inset-[-4%] rounded-full border border-dashed border-gold-2/70 animate-spin-slow" />
                  <div className="relative h-full w-full animate-[spin_60s_linear_infinite] overflow-hidden rounded-full shadow-[0_30px_60px_-25px_rgba(80,50,20,0.6)]">
                    <Image src="/common/prawn-plate.jpg" alt="Grilled prawns and scallops platter" fill sizes="440px" className="scale-[1.12] object-cover" />
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
