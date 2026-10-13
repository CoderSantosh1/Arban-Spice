import type { Metadata } from "next";
import { AboutIntro, Achievements, ChefsSection, PageBanner, TestimonialsSection, WhyChooseUs } from "@/components/Sections";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <AboutIntro full />
      <WhyChooseUs />
      <ChefsSection />
      <Achievements />
      <TestimonialsSection />
    </>
  );
}
