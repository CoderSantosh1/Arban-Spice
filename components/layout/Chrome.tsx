"use client";

import Image from "next/image";
import { assets, uiText } from "@/app/types";
import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/shared/Icons";

/** Brief branded curtain on first load; slides up via CSS. */
export function Preloader() {
  return (
    <div aria-hidden className="preloader fixed inset-0 z-[100] grid place-items-center bg-navy">
      <div className="preloader-logo flex flex-col items-center gap-6">
        <Image src={assets.logo} alt="" width={520} height={132} priority className="h-16 w-auto" />
        <span className="relative block h-[2px] w-40 overflow-hidden bg-white/10">
          <span className="absolute inset-0 origin-left bg-gold-2" style={{ animation: "loaderBar 1s ease forwards" }} />
        </span>
      </div>
    </div>
  );
}

/** Thin gold reading-progress bar plus a back-to-top button with a progress ring. */
export function ScrollExtras() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const C = 2 * Math.PI * 22;
  return (
    <>
      <div className="fixed top-0 left-0 z-[80] h-[3px] w-full origin-left bg-gradient-to-r from-gold-dark to-gold-2" style={{ transform: `scaleX(${p})` }} />
      <button
        type="button"
        aria-label={uiText.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-navy text-gold-2 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-gold hover:text-white ${
          p > 0.06 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden>
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth="2" />
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
        </svg>
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
