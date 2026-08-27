import { Frame } from "@/components/ui";

export function AboutMission() {
  return (
    <section className="pt-6 lg:pt-[28px]">
      <Frame>
        <div className="relative lg:h-[1040px]">
          <div
            className="hero-rise relative z-[25] mx-auto max-w-[740px] py-6 text-center lg:absolute lg:inset-x-0 lg:top-[56px] lg:py-0"
            style={{ animationDelay: "80ms" }}
          >
            <h1 className="font-display text-[32px] uppercase leading-[36px] text-olive sm:text-[44px] sm:leading-[44px] lg:text-[52px] lg:leading-[50px]">
              Our mission
              <br />
              A different standard of care
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[18px] leading-[24px] text-olive sm:mt-8 sm:text-[22px] sm:leading-[26px]">
              Arabian Paws was created to offer pet families a veterinary experience that combines
              clinical expertise with a higher standard of care.
            </p>
          </div>

          <div
            className="hero-rise relative z-20 mx-auto mt-6 h-[240px] w-full max-w-[314px] overflow-hidden rounded-[12px] bg-sage sm:h-[280px] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[314px] lg:w-[314px] lg:max-w-none"
            style={{ animationDelay: "140ms" }}
          >
            <img
              src="/images/about-mission-cat.png"
              alt="Grey cat"
              className="size-full origin-[82%_14%] scale-[1.85] object-cover object-[82%_14%] transition-transform duration-700 ease-out hover:scale-[2]"
            />
          </div>

          <div
            className="hero-rise relative z-20 mx-auto mt-4 h-[240px] w-full max-w-[314px] overflow-hidden rounded-[12px] bg-cream sm:h-[280px] lg:absolute lg:left-0 lg:top-[185px] lg:mt-0 lg:h-[314px] lg:w-[314px] lg:max-w-none"
            style={{ animationDelay: "200ms" }}
          >
            <img
              src="/images/about-mission-dog.png"
              alt="Basenji dog"
              className="size-full origin-[26%_32%] scale-[1.55] object-cover object-[26%_32%] transition-transform duration-700 ease-out hover:scale-[1.7]"
            />
          </div>

          <div
            className="hero-rise relative z-10 mt-6 overflow-visible rounded-[32px] bg-olive px-6 pb-8 pt-10 sm:rounded-[48px] sm:px-10 sm:pt-14 lg:absolute lg:inset-x-0 lg:top-[430px] lg:mt-0 lg:h-[578px] lg:px-[73px] lg:pb-0 lg:pt-[140px]"
            style={{ animationDelay: "260ms" }}
          >
            <div className="relative z-10 max-w-[453px] text-cream">
              <h2 className="font-display text-[28px] uppercase leading-[34px] sm:text-[36px] sm:leading-[40px]">
                The story behind Arabian Paws
              </h2>
              <p className="mt-8 text-[16px] leading-[24px] sm:mt-10 sm:text-[20px] sm:leading-[24px]">
                Founded by five partners with experience across veterinary care, nursing and clinic
                administration. The clinic was created to become a respected veterinary name in
                Dubai, beginning with the communities around Majan.
              </p>
            </div>

            <div className="relative z-20 mt-8 h-[280px] overflow-hidden rounded-[12px] bg-gold sm:h-[360px] lg:absolute lg:right-0 lg:top-[-72px] lg:mt-0 lg:h-[417px] lg:w-[720px]">
              <img
                src="/images/about-story.png"
                alt="Veterinarian holding a white puppy"
                className="size-full origin-[48%_38%] scale-[1.2] object-cover object-[48%_38%] transition-transform duration-700 ease-out hover:scale-[1.28]"
              />
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
