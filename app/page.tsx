import Image from "next/image";
import { assets, homeHeroContent } from "@/app/data";
import Link from "next/link";
import { ArrowRight } from "@/components/shared/Icons";
import { AboutIntro } from "@/components/about/AboutIntro";
import { BlogSection } from "@/components/blog/BlogSection";
import { ChefsSection } from "@/components/home/ChefsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { MenuCategories } from "@/components/home/MenuCategories";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-navy sm:min-h-[560px] lg:h-[calc(100svh-126px)] lg:max-h-[720px]">
      <Image src={assets.homeHero} alt="" fill priority sizes="100vw" className="-z-20 animate-kenburns object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 " />
      <div className="absolute inset-0 -z-10" />

      {/* floating warm glows */}
      <span aria-hidden className="absolute top-[18%] right-[30%] -z-10 h-24 w-24 animate-float rounded-full bg-gold/30 blur-2xl" />
      <span aria-hidden className="absolute right-[12%] bottom-[22%] -z-10 h-32 w-32 animate-float rounded-full bg-gold/20 blur-3xl [animation-delay:-3s]" />

      <div className="container-x py-20">
        <div className="hero-in max-w-[720px] text-white">
          <p className="flex items-center gap-4 text-[13px] font-medium tracking-[0.25em] text-gold-2 uppercase">
            <span className="h-px w-10 bg-gold-2" /> <span className="whitespace-nowrap">{homeHeroContent.eyebrow}</span>
            <span className="hidden h-px w-10 bg-gold-2 sm:block" />
          </p>
          <h1 className="mt-5 font-serif text-[44px] leading-[1.08] font-medium sm:text-[64px]">
            {homeHeroContent.lineOne}
            <br />
            <span className="text-gold-2">{homeHeroContent.highlight}</span> {homeHeroContent.lineTwo}
          </h1>
          {/* <p className="mt-6 max-w-[500px] text-[17px] leading-relaxed text-white/90">
            A perfect blend of authentic flavours, fresh ingredients and warm hospitality. Experience unforgettable dining moments at ArbanSpice.
          </p> */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/menu" className="btn-gold">
              {homeHeroContent.menuLabel} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/book-table" className="btn-outline light">
              {homeHeroContent.bookingLabel}
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={homeHeroContent.scrollLabel}
        className="absolute bottom-6 left-1/2 hidden h-11 w-7 -translate-x-1/2 justify-center rounded-full border-2 border-white/60 pt-2 sm:flex"
      >
        <span className="h-2 w-1 rounded-full bg-gold-2" style={{ animation: "scrollDot 1.6s ease-in-out infinite" }} />
      </a>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about" className="scroll-mt-20">
        <AboutIntro />
      </div>
      <MenuCategories />
      <ChefsSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
