import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

/** Eyebrow with hairlines, serif title (wrap accent words in <em>), optional lead text. */
export default function SectionHeading({ eyebrow, title, text, align = "center", light, className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <Reveal variant="fade" className={`flex items-center gap-5 ${center ? "justify-center" : ""}`}>
        <span className="gold-line grow-line origin-right" />
        <span className={`eyebrow ${light ? "text-white" : ""}`}>{eyebrow}</span>
        <span className="gold-line grow-line origin-left" />
      </Reveal>
      <Reveal
        as="h2"
        delay={120}
        className={`mt-4 font-serif text-[34px] leading-[1.12] font-medium sm:text-5xl lg:text-[54px] [&_em]:text-gold [&_em]:not-italic ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Reveal>
      {text && (
        <Reveal as="p" delay={240} className={`mt-4 text-[15px] leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>
          {text}
        </Reveal>
      )}
    </div>
  );
}
