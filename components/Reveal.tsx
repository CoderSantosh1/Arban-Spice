"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Variant = "up" | "down" | "left" | "right" | "zoom" | "blur" | "clip" | "clip-up" | "fade";

type Props = {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

/** Fades / slides its children in the first time they scroll into view. */
export default function Reveal({ children, as: Tag = "div", variant = "up", delay = 0, duration, className, style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={className}
      style={{ transitionDelay: `${delay}ms`, ...(duration ? { transitionDuration: `${duration}ms` } : null), ...style }}
    >
      {children}
    </Tag>
  );
}
