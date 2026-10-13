import type { Metadata } from "next";
import { LeafBranch } from "@/components/Decor";
import Pagination from "@/components/Pagination";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ChefCard, PageBanner } from "@/components/Sections";
import { chefs } from "@/lib/data";

export const metadata: Metadata = { title: "Our Chefs" };

export default function ChefsPage() {
  return (
    <>
      <PageBanner title="Our Chefs" />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <LeafBranch className="absolute top-10 -left-10 h-72 w-44 animate-sway opacity-60" />
        <LeafBranch flip className="absolute -right-8 bottom-24 h-72 w-44 animate-sway opacity-60 [animation-delay:-3s]" />
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
          <div className="mx-auto mt-14 grid max-w-[1090px] gap-x-18 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {chefs.map((c, k) => (
              <Reveal key={c.name} delay={(k % 3) * 140}>
                <ChefCard {...c} aspect="aspect-[319/212]" />
              </Reveal>
            ))}
          </div>
          <Pagination pages={3} className="mt-12" />
        </div>
      </section>
    </>
  );
}
