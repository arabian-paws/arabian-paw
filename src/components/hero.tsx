import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";

export function Hero() {
  return (
    <section id="home" className="pt-6 lg:pt-[28px]">
      <Frame>
        <div className="grid items-stretch gap-2 lg:grid-cols-[minmax(0,639fr)_minmax(0,633fr)]">
          <div className="hero-rise flex flex-col gap-2" style={{ animationDelay: "80ms" }}>
            <div className="relative flex h-auto shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-sage px-7 py-7 lg:h-[247px]">
              <h1 className="font-display text-[30px] uppercase leading-[34px] text-olive lg:text-[36px]">
                Trusted Veterinary
                <br />
                Clinics Across Dubai
              </h1>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <p className="max-w-[227px] text-[20px] leading-[23px] text-black">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                </p>
                <PillButton
                  href="#emergency"
                  variant="emergency"
                  icon="/icons/medical-hero.svg"
                  size="sm"
                  className="text-[15px]"
                >
                  Open 24/7 • Emergency Service
                </PillButton>
              </div>
            </div>

            <div className="grid h-auto shrink-0 grid-cols-2 gap-2 lg:h-[316px]">
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
              className="flex h-auto shrink-0 items-end justify-between gap-6 rounded-xl bg-olive px-7 py-7 text-cream lg:h-[199px]"
            >
              <div>
                <p className="font-display text-[20px] leading-[21px] text-sage">Sign up online now</p>
                <p className="mt-5 font-display text-[20px] uppercase leading-[21px] text-cream">
                  wide spectrum
                  <br />
                  Veterinary Services
                </p>
              </div>
              <PillButton href="#book" variant="cream" className="w-[166px] shrink-0 px-0">
                Book Online
              </PillButton>
            </div>
          </div>

          <div
            className="hero-rise relative min-h-[480px] overflow-hidden rounded-xl lg:h-full lg:min-h-0"
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
            <div className="absolute bottom-[25px] left-[29px] right-[29px] grid grid-cols-2 gap-[8px]">
              <article className="group flex h-[217px] cursor-pointer flex-col rounded-xl bg-[rgba(255,247,233,0.5)] p-6 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)]">
                <h2 className="max-w-[141px] text-[20px] uppercase leading-5 text-black">
                  Check up for your pet
                </h2>
                <div className="mt-auto flex h-[calc(100%-40px)] items-end justify-between gap-3">
                  <p className="max-w-[115px] text-sm font-light leading-4 text-black">
                    Comprehensive Diagnostic
                  </p>
                  <span className="relative size-9 shrink-0 overflow-clip transition-transform duration-300 group-hover:translate-x-1">
                    <img src="/icons/arrow-circle.svg" alt="" className="size-full object-contain" />
                  </span>
                </div>
              </article>
              <article className="group flex h-[217px] cursor-pointer flex-col rounded-xl bg-[rgba(255,247,233,0.5)] p-6 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)]">
                <h2 className="max-w-[141px] text-[20px] uppercase leading-5 text-black">
                  Vaccination calendar
                </h2>
                <div className="mt-auto flex justify-end">
                  <span className="relative size-9 shrink-0 overflow-clip transition-transform duration-300 group-hover:translate-x-1">
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
