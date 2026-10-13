import Image from "next/image";
import Link from "next/link";
import { openingHours, site } from "@/lib/data";
import { LeafBranch } from "./Decor";
import { ChevronRight, Facebook, Instagram, MailSolid, MapPin, Owl, Phone, Twitter, Youtube } from "./Icons";
import Reveal from "./Reveal";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Menu", "/menu"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
];

const socials = [Facebook, Instagram, Twitter, Youtube, Owl];

function Title({ children }: { children: string }) {
  return (
    <h3 className="font-display text-xl tracking-[0.08em] text-white uppercase">
      {children}
      <span className="mt-3 block h-[2px] w-10 bg-gold" />
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-coal text-white/85">
      {/* Ambient texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 80% at 85% 0%, rgba(192,138,79,0.18), transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(192,138,79,0.14), transparent 60%)",
        }}
      />
      <LeafBranch className="absolute top-6 -left-10 h-52 w-32 animate-sway opacity-40" />
      <LeafBranch flip className="absolute -right-6 bottom-10 h-64 w-40 animate-sway opacity-40 [animation-delay:-3s]" />
      <div aria-hidden className="absolute -top-28 -right-28 h-56 w-56 overflow-hidden rounded-full opacity-40 ring-1 ring-gold/30">
        <Image src="/common/prawn-plate.jpg" alt="" fill sizes="288px" className="animate-spin-slow object-cover brightness-75" />
      </div>

      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.15fr_1.2fr] lg:gap-0">
        <Reveal className="lg:pr-8">
          <Image src="/common/logo-light.png" alt="ArbanSpice Restaurant" width={520} height={132} className="h-[72px] w-auto" />
          <p className="mt-6 font-serif text-[16.5px] leading-relaxed text-white/85">
            At ArbanSpice, we bring people together with authentic flavours, warm hospitality and unforgettable dining experiences. Fresh ingredients,
            inspired recipes and a cozy ambience make every visit special.
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold-2 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:border-l lg:border-gold/40 lg:px-7">
          <Title>Quick Links</Title>
          <ul className="mt-6 space-y-3">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="group flex items-center gap-3 transition-colors hover:text-gold-2">
                  <ChevronRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="lg:border-l lg:border-gold/40 lg:px-7">
          <Title>Opening Hours</Title>
          <ul className="mt-6 text-[15px]">
            {openingHours.map(([d, h]) => (
              <li key={d} className="flex justify-between gap-4 border-b border-white/10 py-2">
                <span>{d}</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300} className="lg:border-l lg:border-gold/40 lg:pl-8">
          <Title>Contact Info</Title>
          <ul className="mt-6 space-y-5 text-[15px]">
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-2"><MapPin className="h-5 w-5" /></span>
              <span>{site.fullAddress[0]}<br />{site.fullAddress[1]}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-2"><Phone className="h-5 w-5" /></span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-2">{site.phone}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-2"><MailSolid className="h-5 w-5" /></span>
              <a href={`mailto:${site.email}`} className="hover:text-gold-2">{site.email}</a>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="relative border-t border-gold/60 bg-[#110f0d] py-6 text-center text-[15px]">
        © 2026 <span className="font-serif font-semibold text-gold-2">ArbanSpice</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
