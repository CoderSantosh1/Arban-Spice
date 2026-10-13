import type { Metadata } from "next";
import { LeafBranch, Script } from "@/components/Decor";
import Pagination from "@/components/Pagination";
import Reveal from "@/components/Reveal";
import { BlogCard, BlogIntro, PageBanner } from "@/components/Sections";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Our Blogs" };

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Our Blogs" />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <LeafBranch className="absolute top-20 -left-10 h-72 w-44 animate-sway opacity-60" />
        <LeafBranch flip className="absolute -right-8 bottom-10 h-64 w-40 animate-sway opacity-60 [animation-delay:-3s]" />
        <Script className="absolute top-2 -right-4 text-[150px]">Blog</Script>
        <div className="container-x relative">
          <BlogIntro />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, k) => (
              <Reveal key={p.title} delay={(k % 3) * 140}>
                <BlogCard {...p} />
              </Reveal>
            ))}
          </div>
          <Pagination pages={4} className="mt-12" />
        </div>
      </section>
    </>
  );
}
