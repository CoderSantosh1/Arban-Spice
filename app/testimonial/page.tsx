import type { Metadata } from "next";
import Image from "next/image";
import { LeafBranch } from "@/components/Decor";
import Pagination from "@/components/Pagination";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PageBanner, TestimonialCard } from "@/components/Sections";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialPage() {
  return (
    <>
      <PageBanner title="Testimonial" />
      <section className="relative mt-16 overflow-hidden bg-gradient-to-b from-cream-2 to-beige/60 py-16 lg:py-24">
        <div className="absolute -top-4 -left-16 hidden h-[240px] w-[292px] animate-float lg:block">
          <Image src="/common/deco-plate.jpg" alt="" fill sizes="290px" className="object-cover mix-blend-multiply" />
        </div>
        <LeafBranch flip className="absolute top-0 right-0 h-72 w-44 animate-sway opacity-60" />
        <LeafBranch className="absolute bottom-20 left-0 h-72 w-44 animate-sway opacity-60 [animation-delay:-2s]" />
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
          <div className="mx-auto mt-10 grid max-w-[1045px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, k) => (
              <Reveal key={t.name} delay={(k % 3) * 120}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
          <Pagination pages={3} className="mt-10" />
        </div>
      </section>
    </>
  );
}
