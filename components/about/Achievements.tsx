import Image from "next/image";
import Counter from "@/components/shared/Counter";
import { IconById } from "@/components/shared/IconById";
import { achievements, assets } from "@/app/types";
import Reveal from "@/components/shared/Reveal";


export function Achievements() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16 lg:py-[68px]">
      {/* Generated food-themed background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={assets.achievementsBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft cream overlay */}
      <div className="absolute inset-0 -z-10 bg-[#fffdf9]/25" />

      <div className="container-x relative mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#d9a65b]" />
            <span className="text-[10px] font-semibold tracking-[0.32em] text-[#292633] uppercase sm:text-[11px]">
              {achievements.eyebrow}
            </span>
            <span className="h-px w-12 bg-[#d9a65b]" />
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h2              className="mt-4 font-serif text-[38px] leading-[1.08] font-medium text-[#211d2a] sm:text-[48px] lg:text-[52px]"
            >
              {achievements.titleFirst}
              <br />
              <em className="not-italic text-[#b68a4e]">
                {achievements.titleSecond}
              </em>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-[1.65] text-[#777571] sm:text-[15px]">
              {achievements.description}
            </p>
          </Reveal>
        </div>

        {/* Achievement cards */}
        <div className="mx-auto mt-7 grid max-w-[910px] grid-cols-2 gap-3 sm:mt-8 sm:gap-3 lg:grid-cols-4">
          {achievements.items.map(({ icon, value, suffix, label }, index) => (
            <Reveal
              key={label}
              delay={index * 100}
              variant="up"
            >
              <div className="group flex h-full min-h-[200px] flex-col items-center rounded-[9px] border border-[#ead5b8] bg-white/65 px-3 py-5 text-center shadow-[0_5px_20px_-15px_rgba(125,83,36,0.22)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-[#c89b5d] hover:bg-white/90 sm:min-h-[216px] sm:px-4 sm:py-5">
                {/* Icon circle */}
                <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-[#c99b5b] text-white transition-transform duration-300 group-hover:scale-110 sm:h-[66px] sm:w-[66px]">
                  <IconById icon={icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>

                {/* Animated number */}
                <p className="mt-3 font-serif text-[36px] leading-none text-[#211d2a] sm:text-[42px]">
                  <Counter to={value} />{suffix}
                </p>

                {/* Label */}
                <p className="mt-3 max-w-[130px] text-[9px] leading-[1.8] font-semibold tracking-[0.25em] text-[#45414a] uppercase sm:text-[10px] sm:tracking-[0.28em]">
                  {label}
                </p>

                {/* Gold underline */}
                <span className="mt-auto block h-px w-8 bg-[#d9a65b] pt-0 transition-all duration-300 group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
