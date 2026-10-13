import type { Metadata } from "next";
import Image from "next/image";
import { LeafBranch } from "@/components/Decor";
import { ContactForm } from "@/components/Forms";
import { Facebook, Instagram, Mail, MapPinLine, PhoneLine, Pinterest, XLogo, Youtube } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { PageBanner } from "@/components/Sections";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us" };

const cards = [
  { Icon: MapPinLine, title: "Our Location", lines: ["123 Food Street, Connaught", "Place, New Delhi, India - 110001"] },
  { Icon: PhoneLine, title: "Call Us", lines: [site.phone, site.phone2] },
  { Icon: Mail, title: "Email Us", lines: [site.email, site.email2] },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="relative overflow-hidden">
        <LeafBranch className="absolute bottom-10 left-0 h-80 w-52 animate-sway opacity-60" />
        <LeafBranch flip className="absolute top-6 right-[38%] hidden h-40 w-28 opacity-60 lg:block" />
        <div aria-hidden className="absolute inset-y-10 right-0 hidden w-1/3 lg:block">
          <Reveal variant="clip" className="relative h-full w-full">
            <Image src="/contact/contact-interior.jpg" alt="" fill sizes="33vw" className="animate-kenburns object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </Reveal>
        </div>

        <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1fr_460px] lg:gap-8 lg:py-28">
          <div className="lg:pt-20">
            <Reveal variant="fade" className="flex items-center gap-5">
              <span className="gold-line grow-line" />
              <span className="eyebrow">Contact us</span>
              <span className="gold-line grow-line" />
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-4 font-serif text-[44px] leading-tight font-medium sm:text-[64px]">
              Get in <span className="text-gold">Touch</span>
            </Reveal>
            <Reveal as="p" delay={200} className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted">
              We’d love to hear from you. Whether you have a question, a special request or want to make a reservation, our team is here to help.
            </Reveal>
            <div className="mt-10 grid gap-2 sm:grid-cols-3">
              {cards.map(({ Icon, title, lines }, k) => (
                <Reveal key={title} delay={k * 120} variant="up">
                  <div className="group h-full bg-coal px-3 py-6 text-center text-white transition-all duration-500 hover:-translate-y-2 hover:bg-navy hover:shadow-2xl">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold text-gold-2 transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-gold-2">{title}</h3>
                    {lines.map((l) => (
                      <p key={l} className="mt-1.5 text-[14px] text-white/85">
                        {l}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150} className="mt-12 sm:pl-36">
              <p className="flex items-center gap-5 font-serif text-xl">
                Follow Us <span className="h-px w-14 bg-gold-2" />
              </p>
              <div className="mt-5 flex gap-4">
                {[Facebook, Instagram, XLogo, Youtube, Pinterest].map((Icon, k) => (
                  <a
                    key={k}
                    href="#"
                    aria-label="Social link"
                    className="grid h-12 w-12 place-items-center rounded-full bg-gold text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-navy"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" className="relative z-10 self-center border border-gold/50 bg-[#141414] px-7 py-10 shadow-2xl sm:px-11">
            <p className="flex items-center gap-4 text-[13px] tracking-[0.3em] text-white uppercase">
              <span className="h-px w-14 bg-gold" /> Send us a message <span className="h-px w-14 bg-gold" />
            </p>
            <h2 className="mt-4 mb-7 font-serif text-[40px] leading-[1.15] text-white">
              We’d Love to
              <br />
              Hear from You
            </h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Reveal variant="fade" className="relative h-[420px] w-full overflow-hidden lg:h-[480px]">
        <iframe
          title="ArbanSpice location map"
          src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed"
          className="h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </>
  );
}
