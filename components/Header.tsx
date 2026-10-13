"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import { ChevronDown, Clock, Close, Facebook, Instagram, MapPin, Menu, Phone, Twitter, Youtube } from "./Icons";

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
];

function isActive(pathname: string, href: string, children?: { href: string }[]) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href) || !!children?.some((c) => pathname.startsWith(c.href));
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden bg-sand text-[15px] text-ink lg:block">
        <div className="container-x flex h-12 items-center justify-between">
          <div className="flex items-center divide-x divide-ink/30">
            <span className="flex items-center gap-2.5 pr-6">
              <MapPin className="h-5 w-5" /> {site.address}
            </span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 px-6 transition-colors hover:text-gold-dark">
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
            <span className="flex items-center gap-2.5 pl-6">
              <Clock className="h-5 w-5" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-2 border-l border-ink/30 pl-6">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-8 w-8 place-items-center rounded-full bg-navy text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 bg-navy transition-shadow duration-500 ${scrolled ? "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" : ""}`}
      >
        <div className={`container-x flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-[66px]" : "h-[78px]"}`}>
          <Link href="/" aria-label="ArbanSpice home" className="shrink-0">
            <Image
              src="/common/logo-light.png"
              alt="ArbanSpice Restaurant"
              width={520}
              height={132}
              priority
              className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-12"}`}
            />
          </Link>

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-11">
              {nav.map((item) => {
                const active = isActive(pathname, item.href, item.children);
                return (
                  <li key={item.label} className="group/nav relative">
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 py-7 text-[16px] transition-colors duration-300 ${
                        active ? "font-semibold text-gold-2" : "text-white hover:text-gold-2"
                      }`}
                    >
                      {item.label}
                      {item.children && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180" />}
                      <span
                        className={`absolute bottom-5 left-0 h-[2px] w-full origin-left bg-gold-2 transition-transform duration-500 ${
                          active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                        }`}
                      />
                    </Link>
                    {item.children && (
                      <ul className="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 translate-y-3 border-t-2 border-gold bg-white py-2 opacity-0 shadow-xl transition-all duration-300 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={`block px-5 py-2.5 text-[15px] transition-all duration-300 hover:bg-cream-2 hover:pl-7 hover:text-gold-dark ${
                                pathname === c.href ? "text-gold-dark" : "text-ink"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/book-table" className="btn-sand hidden sm:inline-flex">
              Book a Table
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded border border-white/20 text-white transition-colors hover:border-gold-2 hover:text-gold-2 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-navy text-white transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Image src="/common/logo-light.png" alt="ArbanSpice" width={520} height={132} className="h-10 w-auto" />
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-transform duration-500 hover:rotate-90">
            <Close className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto px-6 py-4">
          {nav.map((item, i) => (
            <li
              key={item.label}
              className="border-b border-white/10 transition-all duration-500"
              style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateX(30px)" }}
            >
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={`block py-4 text-lg ${isActive(pathname, item.href, item.children) ? "text-gold-2" : ""}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button type="button" aria-label={`Toggle ${item.label}`} onClick={() => setSub(sub === item.label ? null : item.label)} className="p-2">
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${sub === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              {item.children && (
                <div className={`grid transition-[grid-template-rows] duration-500 ${sub === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <ul className="overflow-hidden">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block py-2 pl-4 text-white/75 hover:text-gold-2">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                    <li className="h-3" />
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="space-y-3 border-t border-white/10 px-6 py-6 text-sm text-white/75">
          <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold-2" /> {site.address}</p>
          <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold-2" /> {site.phone}</p>
          <Link href="/book-table" className="btn-sand mt-3 w-full">Book a Table</Link>
        </div>
      </aside>
    </>
  );
}
