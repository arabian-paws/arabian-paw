import Image from "next/image";
import { Frame, PillButton, WHATSAPP_EMERGENCY, WHATSAPP_DISPLAY } from "@/components/ui";
import type { ServiceBlock } from "@/data/services";

function Actions() {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-[22px]">
      <PillButton
        href={WHATSAPP_EMERGENCY}
        variant="emergency"
        icon="/icons/medical-white.svg"
        size="sm"
        subtitle={WHATSAPP_DISPLAY}
      >
        24/7 Emergency
      </PillButton>
      <PillButton
        href={WHATSAPP_EMERGENCY}
        variant="olive"
        icon="/icons/medical-cream.svg"
        size="sm"
        subtitle={WHATSAPP_DISPLAY}
      >
        Book Appointment
      </PillButton>
    </div>
  );
}

export function InnerServiceBlocks({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <section className="pt-10 lg:pt-[86px]">
      <Frame>
        <div className="flex flex-col gap-[30px]">
          {blocks.map((block, index) => {
            const imageLeft = index % 2 === 1;
            return (
              <article
                key={block.title}
                className="group flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-16"
              >
                <div
                  className={`relative h-[240px] w-full overflow-hidden rounded-[12px] sm:h-[320px] lg:h-[358px] lg:w-[551px] lg:shrink-0 ${
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    className="object-cover object-[center_70%] transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 551px, 100vw"
                  />
                </div>
                <div
                  className={`flex w-full flex-col items-start lg:max-w-[580px] lg:flex-1 ${
                    imageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h2 className="font-display text-[28px] uppercase leading-[32px] text-olive sm:text-[36px] sm:leading-[34px]">
                    {block.title}
                  </h2>
                  <p className="mt-6 max-w-[540px] text-[18px] leading-[26px] tracking-[-0.66px] text-black sm:mt-8 sm:text-[20px] sm:leading-[28px]">
                    {block.body}
                  </p>
                  <div className="mt-8">
                    <Actions />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Frame>
    </section>
  );
}
