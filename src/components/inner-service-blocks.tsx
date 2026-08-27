import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";

const BLOCKS = [
  {
    title: "Emergency Triage & Stabilisation",
    body: "Rapid assessment and immediate support for pets requiring urgent attention.",
    image: "/images/inner-triage.png",
    alt: "Veterinarian examining a puppy during emergency triage",
    imageLeft: false,
  },
  {
    title: "Intensive Care",
    body: "Dedicated ICU support for patients who require close observation and ongoing treatment.",
    image: "/images/inner-icu.png",
    alt: "Dog receiving intensive care monitoring",
    imageLeft: true,
  },
  {
    title: "Trauma & Poisoning Management",
    body: "Prompt assessment and treatment for serious injuries, suspected poisoning and other urgent conditions.",
    image: "/images/inner-trauma.png",
    alt: "Veterinarian examining a cat after trauma",
    imageLeft: false,
  },
  {
    title: "Emergency Surgery",
    body: "Surgical intervention when an emergency requires immediate treatment.",
    image: "/images/inner-surgery.png",
    alt: "Veterinary team performing emergency surgery",
    imageLeft: true,
  },
] as const;

function Actions() {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-[22px]">
      <PillButton
        href="/#emergency"
        variant="emergency"
        icon="/icons/medical-white.svg"
        size="sm"
      >
        24/7 • Emergency Service
      </PillButton>
      <PillButton href="#book" variant="olive" icon="/icons/medical-cream.svg" size="sm">
        Book Online
      </PillButton>
    </div>
  );
}

export function InnerServiceBlocks() {
  return (
    <section className="pt-10 lg:pt-[86px]">
      <Frame>
        <div className="flex flex-col gap-[30px]">
          {BLOCKS.map((block) => (
            <article
              key={block.title}
              className="group flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-[120px]"
            >
              <div
                className={`relative h-[240px] w-full overflow-hidden rounded-[12px] sm:h-[320px] lg:h-[358px] lg:w-[551px] lg:shrink-0 ${
                  block.imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 551px, 100vw"
                />
              </div>
              <div
                className={`flex w-full flex-col items-start lg:w-[495px] ${
                  block.imageLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h2 className="font-display text-[28px] uppercase leading-[32px] text-olive sm:text-[36px] sm:leading-[34px]">
                  {block.title}
                </h2>
                <p className="mt-6 max-w-[369px] text-[18px] leading-[22px] tracking-[-0.66px] text-black sm:mt-8 sm:text-[20px] lg:min-h-[129px] lg:content-center">
                  {block.body}
                </p>
                <Actions />
              </div>
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}
