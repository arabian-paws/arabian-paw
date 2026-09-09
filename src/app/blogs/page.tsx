import { News } from "@/components/news";
import { Reveal } from "@/components/reveal";
import { Frame } from "@/components/ui";

export const metadata = {
  title: "Blogs | Arabian Paws",
  description:
    "Practical advice for better pet care — everyday pet care, seasonal concerns, preventive healthcare, dental health and more.",
};

export default function BlogsPage() {
  return (
    <main className="pb-10 pt-[140px]">
      <Frame>
        <div className="mx-auto max-w-[720px] text-center">
          <h1 className="font-display text-[36px] uppercase leading-[40px] text-olive lg:text-[48px] lg:leading-[52px]">
            Health Library
          </h1>
          <p className="mt-4 text-[20px] font-medium leading-[26px] text-ink">
            Practical Advice for Better Pet Care.
          </p>
          <p className="mt-3 text-base leading-[22px] text-[#555]">
            Pet parents have questions. We believe the answers should be easy to understand. Explore
            our health library for useful information on everyday pet care, seasonal concerns,
            preventive healthcare, dental health and more.
          </p>
        </div>
      </Frame>
      <Reveal>
        <News showHeading={false} showBrowseAll={false} />
      </Reveal>
    </main>
  );
}
