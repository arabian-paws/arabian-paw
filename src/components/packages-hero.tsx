import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";
import { CARE_INTRO } from "@/data/membership";

export function PackagesHero() {
  return (
    <section className="pt-6 lg:pt-[28px]">
      <Frame>
        <div
          className="hero-rise grid items-stretch gap-2 lg:grid-cols-2"
          style={{ animationDelay: "80ms" }}
        >
          <div className="flex flex-col justify-between rounded-[12px] bg-gold px-6 py-10 sm:px-10 sm:py-12 lg:px-[48px] lg:py-[52px]">
            <div>
              <p className="font-display text-[18px] uppercase leading-[22px] text-olive sm:text-[22px]">
                Packages
              </p>
              <h1 className="mt-3 font-display text-[32px] uppercase leading-[36px] text-olive sm:text-[46px] sm:leading-[44px]">
                Health Care
                <br />
                Packages
              </h1>
              <span className="mt-5 inline-flex rounded-full bg-olive px-4 py-1.5 text-[12px] font-bold tracking-[-0.16px] text-cream">
                Grand Opening Pricing
              </span>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[24px] text-olive sm:text-[18px] sm:leading-[26px]">
                {CARE_INTRO}
              </p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <PillButton href="#surgery" variant="olive" size="sm">
                Surgery
              </PillButton>
              <PillButton href="#dental" variant="cream" size="sm">
                Dental
              </PillButton>
              <PillButton href="/membership" variant="cream" size="sm">
                View Memberships
              </PillButton>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[12px] sm:min-h-[380px] lg:min-h-0">
            <Image
              src="/images/svc/wellness-hero.jpg"
              alt="Veterinary wellness care at Arabian Paws"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
        </div>
      </Frame>
    </section>
  );
}
