import SectionHeading from "@/components/shared/SectionHeading";

export function BlogIntro() {
  return (
    <SectionHeading
      eyebrow="Our Blog"
      title={
        <>
          Latest <em>Food Stories</em>
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
