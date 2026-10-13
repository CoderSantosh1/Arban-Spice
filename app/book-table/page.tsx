import type { Metadata } from "next";
import Image from "next/image";
import { LeafBranch } from "@/components/shared/Decor";
import { BookingForm } from "@/components/shared/Forms";
import { Moon, Sun } from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { PageBanner } from "@/components/shared/PageBanner";

export const metadata: Metadata = { title: "Book a Table" };

export default function BookTablePage() {
  return (
    <>
      <PageBanner title="Book a Table" />

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-[521fr_828fr]  py-10">
          <Reveal variant="clip" className="relative min-h-[320px] overflow-hidden lg:min-h-0">
            <Image src="/book-table/dining.jpg" alt="Candle-lit dining table" fill sizes="(min-width:1024px) 40vw, 100vw" className="animate-kenburns object-cover" />
          </Reveal>
          <div className="relative px-4 py-16 sm:px-8 lg:px-14 lg:py-20">
            <LeafBranch flip className="absolute top-0 right-0 h-64 w-40 animate-sway opacity-60" />
            <LeafBranch className="absolute bottom-0 left-0 h-56 w-36 animate-sway opacity-60 [animation-delay:-3s]" />
            <SectionHeading
              eyebrow="Reservation"
              title={
                <>
                  Book a <em>Table</em>
                </>
              }
              text={
                <>
                  Enjoy a memorable dining experience with delicious food, a warm ambience and excellent service. Reserve your table in advance to avoid
                  any wait.
                </>
              }
              className="max-w-lg"
            />
            <Reveal variant="up" delay={200} className="relative mt-10 rounded-md border border-gold/50 bg-[#141414] px-5 py-9 shadow-2xl sm:px-10">
              <div className="text-center">
                <p className="flex items-center justify-center gap-4 text-[13px] tracking-[0.2em] text-gold-2 uppercase">
                  <span className="h-px w-16 bg-gold" /> Make a reservation <span className="h-px w-16 bg-gold" />
                </p>
                <h2 className="mt-3 font-serif text-[34px] text-white sm:text-[40px]">Book Your Table</h2>
                <p className="mt-1 mb-7 text-[15px] text-white/80">Fill in the details below and we’ll confirm your booking shortly.</p>
              </div>
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-20">
        <Reveal variant="up" className="relative overflow-hidden rounded-md">
          <div className="absolute inset-0 lg:left-[55%]">
            <Image src="/book-table/hours-band.jpg" alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="animate-kenburns object-cover" />
          </div>
          <div className="relative grid gap-10 bg-gradient-to-r from-cream via-cream/95 to-cream/80 px-6 py-12 sm:grid-cols-2 sm:divide-x sm:divide-gold-2/60 lg:w-[64%] lg:rounded-r-[50%] lg:py-14">
            {[
              { Icon: Sun, bg: "bg-gold", title: "Opening", days: "Monday – Sunday", time: "9:00 AM – 10:00 PM", spin: "animate-spin-slow" },
              { Icon: Moon, bg: "bg-wine", title: "Closing", days: "Monday – Sunday", time: "10:00 PM", spin: "animate-sway" },
            ].map(({ Icon, bg, title, days, time, spin }, k) => (
              <Reveal key={title} delay={k * 150} variant="zoom" className="text-center">
                <span className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${bg} text-white`}>
                  <Icon className={`h-10 w-10 ${spin}`} />
                </span>
                <h3 className="mt-3 font-serif text-[34px] font-medium">
                  {title} <span className="text-gold">Hours</span>
                </h3>
                <span className="mx-auto mt-2 block h-[2px] w-11 bg-gold" />
                <p className="mt-5 text-xl text-muted">{days}</p>
                <p className="text-2xl font-medium text-ink">{time}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
