
import Image from "next/image";
import Link from "next/link";

import { openingHours, site } from "@/lib/data";
import {
  ChevronRight,
  Facebook,
  Instagram,
  MailSolid,
  MapPin,
  Owl,
  Phone,
  Twitter,
  Youtube,
} from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";

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
    <footer className="relative isolate overflow-hidden bg-[#100d09] text-white/85">

      {/* Full-width generated background image */}
      <Image
        src="/common/footer-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for readable content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[#100d09]/35"
      />

      {/* Subtle center shading */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,13,9,0.08) 0%, rgba(16,13,9,0.35) 48%, rgba(16,13,9,0.12) 100%)",
        }}
      />

      {/* Footer content */}
      <div className="container-x relative z-10 grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.15fr_1.2fr] lg:gap-0 lg:py-20">

        {/* Brand */}
        <Reveal className="lg:pr-8">
          <Image
            src="/common/logo-light.png"
            alt="ArbanSpice Restaurant"
            width={520}
            height={132}
            className="h-[65px] w-auto object-contain sm:h-[72px]"
          />

          <p className="mt-6 font-serif text-[16px] leading-relaxed text-white/90">
            At ArbanSpice, we bring people together with authentic flavours,
            warm hospitality and unforgettable dining experiences. Fresh
            ingredients, inspired recipes and a cozy ambience make every visit
            special.
          </p>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social link ${i + 1}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold-2 text-white transition-colors duration-300 hover:bg-gold hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Quick links */}
        <Reveal
          delay={100}
          className="md:border-l md:border-gold/40 md:pl-6 lg:px-7"
        >
          <Title>Quick Links</Title>

          <ul className="mt-6 space-y-3">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center gap-3 transition-colors hover:text-gold-2"
                >
                  <ChevronRight className="h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Opening hours */}
        <Reveal
          delay={200}
          className="md:border-l md:border-gold/40 md:pl-6 lg:px-7"
        >
          <Title>Opening Hours</Title>

          <ul className="mt-6 text-[14px] sm:text-[15px]">
            {openingHours.map(([day, hours]) => (
              <li
                key={day}
                className="flex justify-between gap-3 border-b border-white/15 py-2"
              >
                <span>{day}</span>
                <span className="whitespace-nowrap text-right">
                  {hours}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Contact information */}
        <Reveal
          delay={300}
          className="md:border-l md:border-gold/40 md:pl-6 lg:pl-8"
        >
          <Title>Contact Info</Title>

          <ul className="mt-6 space-y-5 text-[14px] leading-relaxed sm:text-[15px]">
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-2 text-gold-2">
                <MapPin className="h-5 w-5" />
              </span>

              <span>
                {site.fullAddress[0]}
                <br />
                {site.fullAddress[1]}
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-2 text-gold-2">
                <Phone className="h-5 w-5" />
              </span>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="break-all transition-colors hover:text-gold-2"
              >
                {site.phone}
              </a>
            </li>

            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-2 text-gold-2">
                <MailSolid className="h-5 w-5" />
              </span>

              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-gold-2"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 border-t border-gold/50 bg-[#100d09]/90 py-5 text-center text-[13px] text-white/75 sm:text-[15px]">
        © 2026{" "}
        <span className="font-serif font-semibold text-gold-2">
          ArbanSpice
        </span>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
