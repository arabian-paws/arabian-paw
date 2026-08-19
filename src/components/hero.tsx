import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";

export function Hero() {
  return (
    <section id="home" className="pt-6 lg:pt-[28px]">
      <Frame>
        <div className="grid items-stretch gap-2 lg:grid-cols-[minmax(0,639fr)_minmax(0,633fr)]">
          <div className="hero-rise flex flex-col gap-2" style={{ animationDelay: "80ms" }}>
            <div className="relative flex h-auto shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-sage px-5 py-6 sm:px-7 sm:py-7 lg:h-[247px]">
              <h1 className="font-display text-[26px] uppercase leading-[30px] text-olive sm:text-[30px] sm:leading-[34px] lg:text-[36px]">
                Trusted Veterinary
                <br />
                Clinics Across Dubai
              </h1>
              <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:flex-wrap sm:items-end">
                <p className="max-w-[227px] text-[16px] leading-[20px] text-black sm:text-[20px] sm:leading-[23px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                </p>
                <PillButton
                  href="#emergency"
                  variant="emergency"
                  icon="/icons/medical-hero.svg"
                  size="sm"
                  className="w-full text-[13px] sm:w-auto sm:text-[15px]"
                >
                  Open 24/7 • Emergency Service
                </PillButton>
              </div>
            </div>

            <div className="grid h-[180px] shrink-0 grid-cols-2 gap-2 sm:h-[240px] lg:h-[316px]">
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-vet.png"
                  alt="Veterinarian examining a cat"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="315px"
                  priority
                />
              </div>
              <div className="group relative overflow-hidden rounded-full bg-gold">
                <Image
                  src="/images/hero-cat.png"
                  alt="Cat looking at the camera"
                  fill
                  className="object-cover object-[68%_center] transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="316px"
                  priority
                />
              </div>
            </div>

            <div
              id="emergency"
              className="flex h-auto shrink-0 flex-col items-start justify-between gap-5 rounded-xl bg-olive px-5 py-6 text-cream sm:flex-row sm:items-end sm:px-7 sm:py-7 lg:h-[199px]"
            >
              <div>
                <p className="font-display text-[18px] leading-[21px] text-sage sm:text-[20px]">
                  Sign up online now
                </p>
                <p className="mt-3 font-display text-[18px] uppercase leading-[21px] text-cream sm:mt-5 sm:text-[20px]">
                  wide spectrum
                  <br />
                  Veterinary Services
                </p>
              </div>
              <PillButton href="#book" variant="cream" className="w-full px-0 sm:w-[166px] sm:shrink-0">
                Book Online
              </PillButton>
            </div>
          </div>

          <div
            className="hero-rise relative min-h-[380px] overflow-hidden rounded-xl sm:min-h-[480px] lg:h-full lg:min-h-0"
            style={{ animationDelay: "180ms" }}
          >
            <Image
              src="/images/hero-main.png"
              alt="Woman hugging a golden retriever"
              fill
              className="object-cover object-[center_12%] transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
              sizes="633px"
              priority
            />
            <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2 sm:bottom-[25px] sm:left-[29px] sm:right-[29px] sm:gap-[8px]">
              <article className="group flex min-h-[140px] cursor-pointer flex-col rounded-xl bg-[rgba(255,247,233,0.5)] p-3 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)] sm:h-[217px] sm:p-6">
                <h2 className="max-w-[141px] text-[13px] uppercase leading-4 text-black sm:text-[20px] sm:leading-5">
                  Check up for your pet
                </h2>
                <div className="mt-auto flex items-end justify-between gap-2 sm:h-[calc(100%-40px)] sm:gap-3">
                  <p className="max-w-[115px] text-[10px] font-light leading-3 text-black sm:text-sm sm:leading-4">
                    Comprehensive Diagnostic
                  </p>
                  <span className="relative size-7 shrink-0 overflow-clip transition-transform duration-300 group-hover:translate-x-1 sm:size-9">
                    <img src="/icons/arrow-circle.svg" alt="" className="size-full object-contain" />
                  </span>
                </div>
              </article>
              <article className="group flex min-h-[140px] cursor-pointer flex-col rounded-xl bg-[rgba(255,247,233,0.5)] p-3 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)] sm:h-[217px] sm:p-6">
                <h2 className="max-w-[141px] text-[13px] uppercase leading-4 text-black sm:text-[20px] sm:leading-5">
                  Vaccination calendar
                </h2>
                <div className="mt-auto flex justify-end">
                  <span className="relative size-7 shrink-0 overflow-clip transition-transform duration-300 group-hover:translate-x-1 sm:size-9">
                    <img src="/icons/arrow-circle.svg" alt="" className="size-full object-contain" />
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
