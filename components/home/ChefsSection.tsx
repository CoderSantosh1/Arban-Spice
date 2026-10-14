import { homeChefs, homeCopy } from "@/app/types";
import { LeafBranch, Script } from "@/components/shared/Decor";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ChefCard } from "./ChefCard";

export function ChefsSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute bottom-10 -left-12 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-6 -right-6 text-[160px]">{homeCopy.chefs.script}</Script>
      <div className="container-x relative">
        <SectionHeading
          eyebrow={homeCopy.chefs.eyebrow}
          title={
            <>
              {homeCopy.chefs.titleStart} <em>{homeCopy.chefs.titleHighlight}</em> {homeCopy.chefs.titleEnd}
            </>
          }
          text={
            <>
              {homeCopy.chefs.description}
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
