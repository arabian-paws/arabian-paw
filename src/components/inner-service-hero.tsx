import { Frame, PillButton } from "@/components/ui";
import type { ServicePageData } from "@/data/services";

function ExpertTeamIcon() {
  return (
    <span className="relative h-[38px] w-[37px] shrink-0 overflow-hidden" aria-hidden>
      <span className="absolute inset-[0_2.51%_47.85%_2.51%]">
        <img src="/icons/inner-team.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
      <span className="absolute inset-[49.74%_38.67%_27.59%_38.67%]">
        <img src="/icons/inner-team-2.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
      <span className="absolute inset-[75.55%_27.86%_0_27.86%]">
        <img src="/icons/inner-team-3.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
      <span className="absolute inset-[54.98%_63.89%_24.72%_15.8%]">
        <img src="/icons/inner-team-4.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
      <span className="absolute inset-[78.09%_76.11%_0_6.12%]">
        <img src="/icons/inner-team-5.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
      <span className="absolute inset-[54.98%_15.8%_24.72%_63.89%]">
        <img src="/icons/inner-team-6.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
      <span className="absolute inset-[78.09%_6.12%_0_76.11%]">
        <img src="/icons/inner-team-7.svg" alt="" className="absolute inset-0 size-full max-w-none" />
      </span>
    </span>
  );
}

export function InnerServiceHero({ service }: { service: ServicePageData }) {
  return (
    <section className="pt-6 lg:pt-[28px]">
      <Frame>
        <div
          className="hero-rise relative overflow-hidden rounded-[12px] bg-gold lg:h-[720px]"
          style={{ animationDelay: "80ms" }}
        >
          <div
            className={
              service.heroWrapClass
                ? `pointer-events-none absolute hidden overflow-hidden lg:block ${service.heroWrapClass}`
                : "pointer-events-none absolute left-[414px] top-0 hidden h-[720px] w-[842px] overflow-hidden pt-10 lg:block"
            }
          >
            <img
              src={service.heroImage}
              alt=""
              className={service.heroImageClass ?? "size-full object-contain object-bottom"}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-6 px-5 py-8 sm:gap-[33px] sm:px-8 sm:py-10 lg:absolute lg:left-[57px] lg:top-[59px] lg:w-[560px] lg:p-0">
            <p className="font-display text-[22px] uppercase leading-[26px] text-olive sm:text-[27px] sm:leading-[26px]">
              {service.eyebrow}
            </p>
            <h1 className="font-display text-[34px] uppercase leading-[36px] text-olive sm:text-[46px] sm:leading-[43px]">
              {service.headline}
            </h1>
            <p className="max-w-[520px] text-[18px] leading-[22px] tracking-[-0.66px] text-black sm:text-[20px]">
              {service.intro}
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-[18px]">
              <PillButton
                href="/#emergency"
                variant="emergency"
                icon="/icons/medical-white.svg"
                size="sm"
              >
                Open 24/7 • Emergency Service
              </PillButton>
              <PillButton href="/contact" variant="olive" icon="/icons/medical-cream.svg" size="sm">
                Book Online
              </PillButton>
            </div>
          </div>

          <div className="relative mx-5 mb-6 h-[240px] overflow-hidden rounded-[12px] sm:mx-8 sm:h-[320px] lg:hidden">
            <img
              src={service.heroImage}
              alt={service.heroAlt}
              className="size-full object-contain object-bottom"
            />
          </div>

          <div className="relative z-10 mx-5 mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 rounded-[7px] bg-[rgba(255,247,233,0.5)] px-4 py-5 backdrop-blur-[7px] sm:mx-8 lg:absolute lg:left-[57px] lg:top-[543px] lg:mx-0 lg:mb-0 lg:h-[117px] lg:w-[814px] lg:gap-[33px] lg:px-0 lg:py-0">
            {service.stats.map((stat) => (
              <div key={stat.title} className="flex items-center gap-[13px]">
                {stat.icon === "team" ? (
                  <ExpertTeamIcon />
                ) : (
                  <img src={stat.icon} alt="" className={`${stat.iconClass} shrink-0 object-contain`} />
                )}
                <span className="h-14 w-px shrink-0 bg-olive" />
                <div className="text-olive">
                  <p className="font-display text-[14px] leading-normal">{stat.title}</p>
                  <p className="text-[11px] font-light leading-normal">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 z-20 hidden size-[140px] flex-col items-center justify-center gap-3 rounded-full bg-olive sm:flex lg:bottom-auto lg:right-[57px] lg:top-[460px] lg:size-[200px] lg:gap-[18px]">
            <img
              src="/icons/inner-paw.svg"
              alt=""
              className="h-[34px] w-7 object-contain lg:h-[49px] lg:w-[41px]"
            />
            <p className="w-[100px] text-center text-[11px] leading-[13px] tracking-[-0.45px] text-white lg:w-[141px] lg:text-[14px] lg:leading-[15px]">
              {service.badge}
            </p>
          </div>
        </div>
      </Frame>
    </section>
  );
}
