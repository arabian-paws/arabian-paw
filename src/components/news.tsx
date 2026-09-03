import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";

const articles = [
  {
    title: "Senior Pet Care",
    description: "How to support your pet as they get older and recognise changes that may need veterinary attention.",
    tag: "Resources",
    date: "May 7, 2024",
    image: "/images/news-1.png",
    dot: "bg-[#ffa0ea]",
  },
  {
    title: "Summer Safety",
    description: "Simple ways to help keep pets comfortable and safe during Dubai's hotter months.",
    tag: "Tips",
    date: "May 7, 2024",
    image: "/images/news-2.png",
    dot: "bg-[#97d4ff]",
  },
  {
    title: "Pet Dental Health",
    description: "What pet owners should know about oral health, dental problems and regular dental care.",
    tag: "Dental",
    date: "May 7, 2024",
    image: "/images/news-1.png",
    dot: "bg-[#ffa0ea]",
  },
  {
    title: "Emergency Warning Signs",
    description: "Understanding when a change in your pet's condition requires urgent veterinary attention.",
    tag: "Emergency",
    date: "May 7, 2024",
    image: "/images/news-2.png",
    dot: "bg-[#ff9797]",
  },
];

export function News() {
  return (
    <section id="news" className="py-20">
      <Frame>
      <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-[36px] uppercase leading-[60px] text-ink">
            Health Library
          </h2>
          <p className="text-[20px] font-medium leading-[26px] text-ink">
            Practical Advice for Better Pet Care.
          </p>
          <p className="mt-2 max-w-[600px] text-base leading-[22px] text-[#555]">
            Pet parents have questions. We believe the answers should be easy to understand. Explore our health library for useful information on everyday pet care, seasonal concerns, preventive healthcare, dental health and more.
          </p>
        </div>
        <PillButton href="#faq" variant="olive" className="shrink-0">
          Browse All
        </PillButton>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, index) => (
          <article
            key={`${article.title}-${index}`}
            className="group relative h-[382px] cursor-pointer overflow-hidden rounded-xl"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="400px"
            />
            <div className="absolute inset-x-[15px] bottom-5 rounded-[10px] bg-cream p-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7d7d7] bg-white px-2 py-1 font-urbanist text-[10px] font-medium text-ink">
                  <span className={`size-[6px] rounded-[3px] ${article.dot}`} />
                  {article.tag}
                </span>
                <span className="font-urbanist text-[10px] font-medium text-[#3f4142]">{article.date}</span>
              </div>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <h3 className="max-w-[250px] font-urbanist text-[17px] font-medium leading-[21px] text-ink">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="mt-1 text-[12px] leading-[16px] text-[#555]">{article.description}</p>
                  )}
                </div>
                <span className="mb-1 inline-flex size-[21px] shrink-0 items-center justify-center overflow-clip rounded-[10px] border border-ink transition-transform duration-300 group-hover:translate-x-0.5">
                  <img src="/icons/news-arrow.svg" alt="" className="size-2.5 object-contain" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      </Frame>
    </section>
  );
}
