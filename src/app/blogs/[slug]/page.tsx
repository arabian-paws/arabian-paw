import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frame, PillButton, WHATSAPP_EMERGENCY, WHATSAPP_DISPLAY, PHONE_LANDLINE, PHONE_DISPLAY } from "@/components/ui";
import { BLOGS, getBlog } from "@/data/blogs";

export function generateStaticParams() {
  return BLOGS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return { title: "Blog | Arabian Paws" };
  return {
    title: `${post.title} | Arabian Paws`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  return (
    <main className="pb-16 pt-[120px] lg:pb-24 lg:pt-[140px]">
      <Frame>
        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-olive/70 transition-colors hover:text-olive"
        >
          ← Back to Health Library
        </Link>

        <div className="mx-auto max-w-[860px]">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d7d7d7] bg-white px-3 py-1 font-urbanist text-[12px] font-medium text-ink">
              <span className={`size-[6px] rounded-[3px] ${post.dot}`} />
              {post.tag}
            </span>
            <span className="font-urbanist text-[12px] font-medium text-[#3f4142]">{post.date}</span>
          </div>

          <h1 className="font-display text-[32px] uppercase leading-[36px] text-olive sm:text-[42px] sm:leading-[46px]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-[640px] text-[18px] leading-[26px] text-olive/80">{post.description}</p>

          <div className="relative mt-8 h-[240px] overflow-hidden rounded-[20px] sm:h-[360px] lg:h-[440px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="860px"
            />
          </div>

          <div className="mt-10 flex flex-col gap-5">
            {post.body.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={`h2-${index}`}
                    className="mt-4 font-display text-[22px] uppercase leading-[28px] text-olive sm:text-[26px]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={`ul-${index}`} className="list-disc space-y-2 pl-5 text-[17px] leading-[28px] text-[#333]">
                    {block.items.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "cta") {
                return (
                  <p
                    key={`cta-${index}`}
                    className="rounded-[12px] bg-cream-soft px-5 py-4 text-[17px] leading-[28px] text-olive"
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <p key={`p-${index}`} className="text-[17px] leading-[28px] text-[#333]">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#e5e5e5] pt-10 sm:flex-row sm:items-center">
            <PillButton
              href={WHATSAPP_EMERGENCY}
              variant="olive"
              icon="/icons/medical-cream.svg"
              size="sm"
              subtitle={WHATSAPP_DISPLAY}
            >
              Book Appointment
            </PillButton>
            <PillButton
              href={PHONE_LANDLINE}
              variant="emergency"
              icon="/icons/medical-white.svg"
              size="sm"
              subtitle={PHONE_DISPLAY}
            >
              24/7 Emergency
            </PillButton>
          </div>
        </div>
      </Frame>
    </main>
  );
}
