"use client";

import { useState } from "react";
import { posts } from "@/app/types";
import { BlogCard } from "@/components/blog/BlogCard";
import Reveal from "@/components/shared/Reveal";
import Pagination from "@/components/shared/Pagination";

const PAGE_SIZE = 6;
const PAGE_COUNT = Math.ceil(posts.length / PAGE_SIZE);

export default function BlogPosts() {
  const [page, setPage] = useState(1);
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((post, index) => (
          <Reveal key={`${post.title}-${page}`} delay={(index % 3) * 140}>
            <BlogCard {...post} />
          </Reveal>
        ))}
      </div>
      {PAGE_COUNT > 1 && (
        <Pagination
          pages={PAGE_COUNT}
          page={page}
          onPageChange={setPage}
          className="mt-12"
        />
      )}
    </>
  );
}
