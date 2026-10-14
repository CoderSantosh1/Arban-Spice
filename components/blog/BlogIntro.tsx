import SectionHeading from "@/components/shared/SectionHeading";
import { blogIntroContent } from "@/app/types";

export function BlogIntro() {
  return (
    <SectionHeading
      eyebrow={blogIntroContent.eyebrow}
      title={
        <>
          {blogIntroContent.titleStart} <em>{blogIntroContent.titleHighlight}</em>
        </>
      }
      text={
        <>
          Explore our latest articles, food tips, chef’s special recipes and behind
          <br className="hidden sm:block" /> the scenes stories from our restaurant.
        </>
      }
    />
  );
}
