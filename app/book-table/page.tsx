import type { Metadata } from "next";
import { assets, bookingPageContent } from "@/app/data";
import Image from "next/image";
import { LeafBranch } from "@/components/shared/Decor";
import { BookingForm } from "@/components/shared/Forms";
import { IconById } from "@/components/shared/IconById";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { PageBanner } from "@/components/shared/PageBanner";

export const metadata: Metadata = { title: bookingPageContent.title };

export default function BookTablePage() {
  return (
    <>
      <PageBanner title={bookingPageContent.title} />

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-[521fr_828fr]  py-10">
          <Reveal variant="clip" className="relative min-h-[320px] overflow-hidden lg:min-h-0">
            <Image src={assets.bookingDining} alt="Candle-lit dining table" fill sizes="(min-width:1024px) 40vw, 100vw" className="animate-kenburns object-cover" />
          </Reveal>
          <div className="relative px-4 py-16 sm:px-8 lg:px-14 lg:py-20">
            <LeafBranch flip className="absolute top-0 right-0 h-64 w-40 animate-sway opacity-60" />
            <LeafBranch className="absolute bottom-0 left-0 h-56 w-36 animate-sway opacity-60 [animation-delay:-3s]" />
            <SectionHeading
              eyebrow={bookingPageContent.eyebrow}
              title={
                <>
                  {bookingPageContent.headingStart} <em>{bookingPageContent.headingEnd}</em>
                </>
              }
              text={
                <>
                  {bookingPageContent.intro}
                </>
              }
              className="max-w-lg"
            />
            <Reveal variant="up" delay={200} className="relative mt-10 rounded-md border border-gold/50 bg-[#141414] px-5 py-9 shadow-2xl sm:px-10">
              <div className="text-center">
                <p className="flex items-center justify-center gap-4 text-[13px] tracking-[0.2em] text-gold-2 uppercase">
                  <span className="h-px w-16 bg-gold" /> {bookingPageContent.formEyebrow} <span className="h-px w-16 bg-gold" />
                </p>
                <h2 className="mt-3 font-serif text-[34px] text-white sm:text-[40px]">{bookingPageContent.formTitle}</h2>
                <p className="mt-1 mb-7 text-[15px] text-white/80">{bookingPageContent.formIntro}</p>
              </div>
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-8">
        <Reveal variant="up" className="relative isolate overflow-hidden rounded-r-[14px] pt-[15px]">
          {/* Full-width blurred restaurant backdrop */}
          <Image src={assets.bookingHours} alt="" fill sizes="100vw" className="-z-20 scale-110 object-cover object-left blur-[7px] brightness-90" />
          {/* Sharp table setting on the right, fading into the blur */}
          <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_30%)] lg:w-[48%]">
            <Image src={assets.bookingHours} alt="" fill sizes="(min-width:1024px) 48vw, 100vw" className="animate-kenburns object-cover object-right" />
          </div>

          {/* Frosted cream panel with the curved right edge */}
          <div className="hours-panel relative overflow-hidden bg-[#fbf6ef]/[0.93] backdrop-blur-[2px] lg:w-[64%]">
            <LeafBranch className="absolute top-6 -left-4 h-56 w-36 opacity-50" />
            <div className="relative grid gap-10 px-6 py-10 sm:grid-cols-2 sm:gap-0 lg:pr-20 lg:pl-10">
              {bookingPageContent.openingHours.map((hour, k) => (
                <Reveal key={hour.title} delay={k * 150} variant="zoom" className={`text-center ${k === 1 ? "sm:border-l sm:border-[#d9c3a2]" : ""}`}>
                  <span className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${hour.tone === "opening" ? "bg-[#b97a30]" : "bg-[#7a1f3b]"} text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]`}>
                    <IconById icon={hour.icon} className={`h-10 w-10 ${hour.animation}`} />
                  </span>
                  <h3 className="mt-3 font-serif text-[30px] leading-tight font-semibold text-[#152036]">
                    {hour.title} <span className="text-[#b97a30]">Hours</span>
                  </h3>
                  <span className="grow-line mx-auto mt-3 block h-[2px] w-11 bg-[#c69250]" />
                  <p className="mt-5 text-[19px] text-[#5d6068]">{hour.days}</p>
                  <p className="mt-0.5 text-[22px] font-semibold text-[#152036]">{hour.time}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
