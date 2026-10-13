import Link from "next/link";
import { posts } from "@/lib/data";
import { LeafBranch, Script } from "@/components/shared/Decor";
import { ArrowRight } from "@/components/shared/Icons";
import Reveal from "@/components/shared/Reveal";
import { BlogCard } from "./BlogCard";
import { BlogIntro } from "./BlogIntro";

export function BlogSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <LeafBranch className="absolute top-24 -left-10 h-72 w-44 animate-sway opacity-60" />
      <Script className="absolute top-4 -right-4 text-[150px]">Blog</Script>
      <div className="container-x relative">
        <BlogIntro />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, k) => (
            <Reveal key={p.title} delay={k * 150}>
              <BlogCard {...p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/blog" className="btn-outline px-14">
            View more <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
