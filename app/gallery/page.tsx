import type { Metadata } from "next";
import { galleryPageContent } from "@/app/types";
import { LeafBranch, Script } from "@/components/shared/Decor";
import GalleryGrid from "@/components/shared/GalleryGrid";
import SectionHeading from "@/components/shared/SectionHeading";
import { PageBanner } from "@/components/shared/PageBanner";

export const metadata: Metadata = { title: galleryPageContent.title };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title={galleryPageContent.title} />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <LeafBranch className="absolute top-10 -left-10 h-72 w-44 animate-sway opacity-60" />
        <LeafBranch flip className="absolute -right-8 bottom-24 h-72 w-44 animate-sway opacity-60 [animation-delay:-3s]" />
        <Script className="absolute top-4 -right-6 text-[150px]">{galleryPageContent.title}</Script>
        <div className="container-x relative">
          <SectionHeading
            eyebrow={galleryPageContent.eyebrow}
            title={
              <>
                {galleryPageContent.titleStart} <em>{galleryPageContent.titleHighlight}</em>
              </>
            }
            text={
              <>
                {galleryPageContent.description}
              </>
            }
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
