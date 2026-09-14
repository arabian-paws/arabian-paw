import Image from "next/image";
import { Frame, PillButton, WHATSAPP_EMERGENCY, WHATSAPP_DISPLAY } from "@/components/ui";

export function ServicesHero() {
  return (
    <section className="pt-6 lg:pt-[28px]">
      <Frame>
        <div
          className="hero-rise relative min-h-[560px] overflow-hidden rounded-[12px] bg-sage sm:min-h-[560px] lg:h-[720px] lg:min-h-0"
          style={{ animationDelay: "80ms" }}
        >
          <Image
            src="/images/services-hero-blend.png"
            alt=""
            fill
            aria-hidden
            className="object-cover mix-blend-soft-light"
            sizes="1280px"
            priority
          />

          <h1 className="absolute left-1/2 top-[40px] z-20 -translate-x-1/2 font-display text-[42px] uppercase leading-[40px] text-olive sm:top-[56px] sm:text-[56px] sm:leading-[52px] lg:top-[89px] lg:-translate-y-1/2 lg:text-[78px] lg:leading-[74px]">
            Services
          </h1>

          <div className="absolute inset-0 z-[3]">
            <Image
              src="/images/services-hero.png"
              alt="Dogs, cats, birds and small pets treated at Arabian Paws"
              fill
              className="object-cover object-[center_35%] sm:object-center"
              sizes="1280px"
              priority
            />
          </div>

          <article className="absolute left-4 top-[100px] z-10 flex h-[150px] w-[210px] cursor-pointer flex-col rounded-[12px] bg-[rgba(255,247,233,0.5)] p-4 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)] sm:left-6 sm:top-[110px] sm:h-[180px] sm:w-[240px] sm:p-5 lg:left-[81px] lg:top-[111px] lg:h-[217px] lg:w-[284px] lg:p-6">
            <h2 className="max-w-[141px] text-[15px] uppercase leading-4 text-black sm:text-[18px] sm:leading-5 lg:text-[20px]">
              Professional Veterinary Care
            </h2>
            <div className="mt-auto flex items-end justify-between gap-2">
              <p className="max-w-[115px] text-[11px] font-light leading-4 text-black sm:text-sm">
                Assessment, diagnosis and follow-up
              </p>
              <span className="relative size-8 shrink-0 overflow-clip sm:size-9">
                <img src="/icons/arrow-circle.svg" alt="" className="size-full object-contain" />
              </span>
            </div>
          </article>

          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start justify-between gap-3 px-5 pb-5 pt-6 sm:flex-row sm:items-end sm:gap-4 sm:px-8 sm:pb-8 sm:pt-8 lg:px-[89px] lg:py-10">
            <p className="max-w-[369px] rounded-[10px] bg-[rgba(255,247,233,0.92)] px-3 py-2 text-[15px] leading-[21px] tracking-[-0.66px] text-olive backdrop-blur-sm sm:text-[20px] sm:leading-[22px] lg:bg-transparent lg:px-0 lg:py-0 lg:text-black lg:backdrop-blur-none">
              Expert veterinary care, specialised dental expertise and thoughtful support for every
              stage of your pet&apos;s life.
            </p>
            <PillButton
              href={WHATSAPP_EMERGENCY}
              variant="olive"
              icon="/icons/medical-cream.svg"
              size="sm"
              className="shrink-0"
              subtitle={WHATSAPP_DISPLAY}
            >
              Book Appointment
            </PillButton>
          </div>
        </div>
      </Frame>
    </section>
  );
}
