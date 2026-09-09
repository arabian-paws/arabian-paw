import { Frame } from "@/components/ui";

export function AboutMission() {
  return (
    <section className="overflow-x-clip pt-6 lg:pt-[28px]">
      <Frame>
        <div className="relative">
          <div
            className="hero-rise relative z-10 mx-auto hidden h-[314px] w-[314px] overflow-hidden rounded-[12px] bg-sage lg:absolute lg:right-0 lg:top-0 lg:block"
            style={{ animationDelay: "140ms" }}
          >
            <img
              src="/images/about-mission-cat.png"
              alt="Grey cat"
              className="absolute bottom-0 right-0 h-[90%] w-[62%] object-cover object-[82%_38%] transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          <div
            className="hero-rise relative z-10 overflow-hidden pt-8 text-center lg:ml-[378px] lg:mr-[330px] lg:pt-[56px] xl:pt-[72px]"
            style={{ animationDelay: "80ms" }}
          >
            <h1 className="font-display text-[32px] uppercase leading-[36px] text-olive sm:text-[44px] sm:leading-[44px] lg:text-[52px] lg:leading-[50px]">
              Our mission
              <br />
              A different standard of care
            </h1>
          </div>

          <div className="relative mt-6 sm:mt-8 lg:min-h-[230px]">
            <div
              className="hero-rise absolute left-[48px] top-[24px] z-20 hidden h-[314px] w-[314px] overflow-hidden rounded-[12px] bg-cream sm:top-[26px] lg:block"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src="/images/about-mission-dog.png"
                alt="Basenji dog"
                className="size-full origin-left object-cover object-[0%_40%] translate-x-10 transition-transform duration-700 ease-out hover:translate-x-11 hover:scale-105"
              />
            </div>

            <p className="hero-rise relative z-10 overflow-hidden text-center text-[18px] leading-[24px] text-olive sm:text-[22px] sm:leading-[26px] lg:ml-[378px] lg:mr-[330px]">
              Arabian Paws was created to offer pet families a veterinary experience that combines
              clinical expertise with a higher standard of care.
            </p>
          </div>

          <div
            className="hero-rise relative mx-auto mb-4 mt-6 h-[314px] w-[314px] overflow-hidden rounded-[12px] bg-sage lg:hidden"
            style={{ animationDelay: "140ms" }}
          >
            <img
              src="/images/about-mission-cat.png"
              alt="Grey cat"
              className="absolute bottom-0 right-0 h-[90%] w-[62%] object-cover object-[82%_38%]"
            />
          </div>
        </div>
      </Frame>

      <div
        className="hero-rise relative mx-auto mb-4 mt-4 h-[314px] w-[314px] overflow-hidden rounded-[12px] bg-cream lg:hidden"
        style={{ animationDelay: "200ms" }}
      >
        <img
          src="/images/about-mission-dog.png"
          alt="Basenji dog"
          className="size-full origin-left object-cover object-[0%_40%] translate-x-10"
        />
      </div>

      <div className="relative mx-4 mt-4 sm:mx-6 lg:mx-8 lg:mt-0 xl:mx-10">
        <div
          className="hero-rise overflow-hidden rounded-[32px] bg-olive sm:rounded-[40px] lg:min-h-[520px] lg:rounded-[48px] xl:min-h-[560px] 2xl:min-h-[640px]"
          style={{ animationDelay: "260ms" }}
        >
          <div className="flex flex-col gap-8 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:pb-12 lg:pt-16 xl:gap-12 xl:px-16 xl:pb-16 xl:pt-20">
            <div className="max-w-[453px] text-cream-soft lg:pt-[100px]">
              <h2 className="font-display text-[28px] uppercase leading-[34px] sm:text-[36px] sm:leading-[40px]">
                The story behind Arabian Paws
              </h2>
              <p className="mt-8 text-[16px] leading-[24px] sm:mt-10 sm:text-[20px] sm:leading-[24px]">
                Founded by five partners with experience across veterinary care, nursing and clinic
                administration. The clinic was created to become a respected veterinary name in
                Dubai, beginning with the communities around Majan.
              </p>
            </div>

            <div className="relative h-[260px] w-full overflow-hidden rounded-[12px] bg-gold sm:h-[340px] lg:h-[360px] lg:w-[min(100%,560px)] lg:shrink-0 xl:h-[400px] 2xl:h-[420px] 2xl:w-[min(100%,640px)]">
              <img
                src="/images/about-story.png"
                alt="Woman smiling with a white puppy"
                className="size-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
