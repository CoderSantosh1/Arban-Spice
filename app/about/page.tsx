import type { Metadata } from "next";
import { pageTitles } from "@/app/data";
import { AboutIntro } from "@/components/about/AboutIntro";
import { Achievements } from "@/components/about/Achievements";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { ChefsSection } from "@/components/home/ChefsSection";
import { PageBanner } from "@/components/shared/PageBanner";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

export const metadata: Metadata = { title: pageTitles.about };

export default function AboutPage() {
  return (
    <>
      <PageBanner title={pageTitles.about} />
      <AboutIntro full />
      <WhyChooseUs />
      <ChefsSection />
      <Achievements />
      <TestimonialsSection />
    </>
  );
}
