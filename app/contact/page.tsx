import type { Metadata } from "next";
import Image from "next/image";
import { LeafBranch } from "@/components/shared/Decor";
import { ContactForm } from "@/components/shared/Forms";
import { IconById } from "@/components/shared/IconById";
import Reveal from "@/components/shared/Reveal";
import { PageBanner } from "@/components/shared/PageBanner";
import { assets, contactPageContent, site } from "@/app/types";

export const metadata: Metadata = { title: contactPageContent.title };

const cards = contactPageContent.cards.map((card) => ({
  ...card,
  lines: card.lines ?? (card.useSitePhones ? [site.phone, site.phone2] : [site.email, site.email2]),
}));
const socials = contactPageContent.socials;

export default function ContactPage() {
  return (
    <>
      <PageBanner title={contactPageContent.title} />

      <section className="relative isolate overflow-hidden bg-[#fbf7f2] lg:pt-10">
        {/* Gold botanical line-art */}
        <LeafBranch flip className="absolute top-14 left-[56%] -z-10 hidden h-44 w-28 animate-sway opacity-70 lg:block" />
        <LeafBranch className="absolute -bottom-6 -left-4 -z-10 h-80 w-52 animate-sway opacity-70 [animation-delay:-3s]" />

        {/* Restaurant photo: right third, full height below the 40px top gap */}
        <Reveal variant="clip" className="absolute top-10 right-0 bottom-0 -z-10 hidden w-[33%] lg:block">
          <div className="relative h-full w-full overflow-hidden">
            <Image src={assets.contactInterior} alt="" fill sizes="33vw" className="animate-kenburns object-cover object-[78%_center]" />
          </div>
        </Reveal>

        <div className="container-x grid gap-12 py-16 lg:grid-cols-[610px_461px] lg:gap-[18px] lg:pt-[160px] lg:pb-[135px]">
          {/* Left: heading, info cards, socials */}
          <div>
            <Reveal variant="fade" className="flex items-center gap-6">
              <span className="gold-line grow-line w-[74px] origin-right" />
              <span className="eyebrow">Contact us</span>
              <span className="gold-line grow-line w-[74px] origin-left" />
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-4 font-serif text-[46px] leading-[1.05] font-medium text-ink sm:text-[68px]">
              {contactPageContent.headingStart} <span className="text-gold">{contactPageContent.headingEnd}</span>
            </Reveal>
            <Reveal as="p" delay={200} className="mt-5 max-w-[580px] text-[17px] leading-[1.5] text-[#6b6d74]">
              We’d love to hear from you. Whether you have a question, a special request or want to make a reservation, our team is here to help.
            </Reveal>

            <div className="mt-10 grid gap-[7px] sm:grid-cols-[204fr_188fr_203fr]">
              {cards.map(({ icon, title, lines, small }, k) => (
                <Reveal key={title} delay={k * 120} variant="up">
                  <div className="group flex h-full min-h-[200px] flex-col items-center bg-[#141414] px-3 pt-5 pb-6 text-center text-white shadow-[0_18px_30px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#1c1712]">
                    <span className="grid h-[66px] w-[66px] place-items-center rounded-full border-[1.5px] border-[#c69250] text-[#d7a868] transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-[#c69250] group-hover:text-white">
                      <IconById icon={icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-3 font-serif text-[23px] text-[#e3c296]">{title}</h3>
                    <div className={`mt-2 ${small ? "text-[13.5px] leading-[1.55]" : "text-[15.5px] leading-[1.5]"} text-white/90`}>
                      {lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150} className="mt-12 sm:pl-[146px]">
              <p className="flex items-center gap-5 font-serif text-[21px] text-ink">
                {contactPageContent.socialTitle} <span className="h-px w-[60px] bg-gold-2" />
              </p>
              <div className="mt-6 flex gap-[18px]">
                {socials.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href ?? "#"}
                    aria-label={label}
                    className="grid h-[50px] w-[50px] place-items-center rounded-full bg-[#b9813f] text-white shadow-[0_8px_16px_-8px_rgba(120,80,30,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#152036]"
                  >
                    <IconById icon={icon} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: dark message form overlapping the photo */}
          <Reveal
            variant="right"
            className="relative self-start border border-[#3b342c] bg-[#121212] px-6 pt-11 pb-8 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] sm:px-11 lg:mt-[6px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{ background: "radial-gradient(120% 70% at 100% 0%, rgba(198,146,80,0.08), transparent 60%), radial-gradient(90% 60% at 0% 100%, rgba(255,255,255,0.04), transparent 60%)" }}
            />
            <div className="relative">
              <p className="flex items-center gap-4 text-[13px] tracking-[0.3em] text-white uppercase">
                <span className="h-px w-14 bg-[#c69250]" /> {contactPageContent.formEyebrow} <span className="h-px w-14 bg-[#c69250]" />
              </p>
              <h2 className="mt-4 mb-7 font-serif text-[40px] leading-[1.15] text-white sm:text-[44px]">
                We’d Love to
                <br />
                {contactPageContent.formHeadingSecond}
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal variant="fade" className="relative h-[420px] w-full overflow-hidden lg:h-[480px]">
        <iframe
          title={contactPageContent.mapTitle}
          src={contactPageContent.mapUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </>
  );
}
