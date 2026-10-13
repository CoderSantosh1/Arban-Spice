import { homeChefs } from "@/lib/data";
import { LeafBranch, Script } from "@/components/shared/Decor";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ChefCard } from "./ChefCard";

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
