import type { Metadata } from "next";
import { pageTitles } from "@/app/types";
import { LeafBranch, Script } from "@/components/shared/Decor";
import { BlogIntro } from "@/components/blog/BlogIntro";
import BlogPosts from "@/components/blog/BlogPosts";
import { PageBanner } from "@/components/shared/PageBanner";

export const metadata: Metadata = { title: pageTitles.blog };

export default function BlogPage() {
  return (
    <>
      <PageBanner title={pageTitles.blog} />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <LeafBranch className="absolute top-20 -left-10 h-72 w-44 animate-sway opacity-60" />
        <LeafBranch flip className="absolute -right-8 bottom-10 h-64 w-40 animate-sway opacity-60 [animation-delay:-3s]" />
        <Script className="absolute top-2 -right-4 text-[150px]">Blog</Script>
        <div className="container-x relative">
          <BlogIntro />
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
