import { Frame, PillButton, WHATSAPP_EMERGENCY } from "@/components/ui";

export function InnerServiceReasons({
  title,
  intro,
  reasons,
}: {
  title: string;
  intro: string;
  reasons: string[];
}) {
  return (
    <section className="py-16 lg:py-[148px]">
      <Frame>
        <div className="mx-auto flex max-w-[1117px] flex-col items-center gap-8 lg:gap-12">
          <h2 className="max-w-[602px] text-center font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
            {title}
          </h2>
          <p className="max-w-[776px] text-center text-[18px] leading-[24px] text-olive sm:text-[22.5px] sm:leading-[24px]">
            {intro}
          </p>

          <div className="grid w-full grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[19px] lg:gap-y-[18px]">
            {reasons.map((reason, index) => (
              <article
                key={reason}
                className={`group/card flex min-h-[157px] flex-col items-center justify-center gap-[18px] rounded-[9px] border border-[#d7d7d7] px-[14px] py-[14px] transition-all duration-300 ease-out cursor-pointer ${
                  index === 0
                    ? "bg-sage text-[#1c1b1f] shadow-[2px_2px_1px_rgba(58,61,45,0.5)]"
                    : "bg-white text-olive hover:bg-sage hover:text-[#1c1b1f] hover:shadow-[2px_2px_1px_rgba(58,61,45,0.5)] hover:-translate-y-1"
                }`}
              >
                <img src="/icons/inner-pets.svg" alt="" className="size-[34px] object-contain" />
                <p className="max-w-[233px] text-center text-[16.5px] leading-[1.34] tracking-[-0.83px]">
                  {reason}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-[22px]">
            <PillButton
              href={WHATSAPP_EMERGENCY}
              variant="emergency"
              icon="/icons/medical-white.svg"
              size="sm"
            >
              24/7 • Emergency Service
            </PillButton>
            <PillButton href="/contact" variant="olive" icon="/icons/medical-cream.svg" size="sm">
              Book Appointment
            </PillButton>
          </div>
        </div>
      </Frame>
    </section>
  );
}
