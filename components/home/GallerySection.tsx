import Image from "next/image";
import Link from "next/link";
import { gallery, homeCopy } from "@/app/types";
import Carousel from "@/components/shared/Carousel";
import { LeafBranch, Script } from "@/components/shared/Decor";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export function GallerySection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute top-16 -left-10 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-10 -right-6 text-[150px]">{homeCopy.gallery.script}</Script>
      <div className="container-x relative">
        <SectionHeading
          eyebrow={homeCopy.gallery.eyebrow}
          title={
            <>
              {homeCopy.gallery.titleStart} <em>{homeCopy.gallery.titleHighlight}</em>
            </>
          }
          text={
            <>
              {homeCopy.gallery.description}
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
          <Link href="/gallery" className="btn-outline px-16">{homeCopy.gallery.viewLabel}</Link>
        </Reveal>
      </div>
    </section>
  );
}
