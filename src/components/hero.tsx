import Image from "next/image";
import Link from "next/link";
import {
  Frame,
  MAPS_LOCATION,
  PHONE_MOBILE,
  PHONE_MOBILE_DISPLAY,
  PillButton,
  WHATSAPP_DISPLAY,
  WHATSAPP_EMERGENCY,
} from "@/components/ui";

export function Hero() {
  return (
    <section id="home" className="pt-6 lg:pt-[28px]">
      <Frame>
        <div className="grid items-stretch gap-2 lg:grid-cols-[minmax(0,639fr)_minmax(0,633fr)]">
          <div className="hero-rise flex flex-col gap-2" style={{ animationDelay: "80ms" }}>
            <div className="relative flex h-auto shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-sage px-5 py-6 sm:px-7 sm:py-7 lg:min-h-[247px]">
              <h1 className="font-display text-[26px] uppercase leading-[30px] text-olive sm:text-[30px] sm:leading-[34px] lg:text-[36px]">
                Where Every Paw
                <br />
                Finds Expert Care
              </h1>
              <div className="mt-4 flex w-full flex-col items-start gap-4">
                <p className="w-full text-[16px] leading-[20px] text-black sm:text-[20px] sm:leading-[23px]">
                  Comprehensive veterinary care focused on your pet&apos;s health, comfort and well-being at every stage of life.
                </p>
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <PillButton
                    href={PHONE_MOBILE}
                    variant="emergency"
                    icon="/icons/medical-hero.svg"
                    size="sm"
                    className="w-full sm:w-auto"
                    subtitle={PHONE_MOBILE_DISPLAY}
                  >
                    Open 24/7 Emergency
                  </PillButton>
                  <PillButton
                    href={MAPS_LOCATION}
                    variant="olive"
                    icon="/icons/location-pin.svg"
                    size="sm"
                    className="w-full sm:w-auto"
                    subtitle="Majan, Dubai"
                  >
                    Location
                  </PillButton>
                </div>
              </div>
            </div>

            <div className="grid h-[180px] shrink-0 grid-cols-2 gap-2 sm:h-[240px] lg:h-[316px]">
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-main2.webp"
                  alt="Veterinarian with a cat"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="315px"
                  priority
                />
              </div>
              <div className="group relative overflow-hidden rounded-full bg-gold">
                <Image
                  src="/images/hero-cat.png"
                  alt="Happy dog looking at the camera"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
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
                  24/7 Emergency Service
                </p>
                <p className="mt-3 font-display text-[18px] uppercase leading-[21px] text-cream sm:mt-5 sm:text-[20px]">
                  veterinary care
                  <br />
                  Dental Care
                </p>
              </div>
              <PillButton
                href={WHATSAPP_EMERGENCY}
                variant="cream"
                className="w-full px-0 sm:w-[220px] sm:shrink-0"
                subtitle={WHATSAPP_DISPLAY}
              >
                Book Appointment
              </PillButton>
            </div>
          </div>

          <div
            className="hero-rise relative min-h-[380px] overflow-hidden rounded-xl sm:min-h-[480px] lg:h-full lg:min-h-0"
            style={{ animationDelay: "180ms" }}
          >
            <Image
              src="/images/hero-main.webp"
              alt="Veterinarian holding a dog"
              fill
              className="object-cover object-top transition-transform duration-[1.2s] ease-out hover:scale-[1.03] sm:object-center"
              sizes="633px"
              priority
            />
            <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2 sm:bottom-[25px] sm:left-[29px] sm:right-[29px] sm:gap-[8px]">
              <Link
                href="/services/dentistry"
                className="group flex min-h-[140px] cursor-pointer flex-col rounded-xl bg-[rgba(255,247,233,0.5)] p-3 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)] sm:h-[217px] sm:p-6"
              >
                <h2 className="max-w-[141px] text-[13px] uppercase leading-4 text-black sm:text-[20px] sm:leading-5">
                  Dental Care
                </h2>
                <div className="mt-auto flex items-end justify-between gap-2 sm:h-[calc(100%-40px)] sm:gap-3">
                  <p className="max-w-[115px] text-[10px] font-light leading-3 text-black sm:text-sm sm:leading-4">
                    Specialist dental &amp; oral care
                  </p>
                  <span className="relative size-7 shrink-0 overflow-clip transition-transform duration-300 group-hover:translate-x-1 sm:size-9">
                    <img src="/icons/arrow-circle.svg" alt="" className="size-full object-contain" />
                  </span>
                </div>
              </Link>
              <Link
                href="/services/wellness"
                className="group flex min-h-[140px] cursor-pointer flex-col rounded-xl bg-[rgba(255,247,233,0.5)] p-3 backdrop-blur-[11.4px] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,247,233,0.72)] sm:h-[217px] sm:p-6"
              >
                <h2 className="max-w-[141px] text-[13px] uppercase leading-4 text-black sm:text-[20px] sm:leading-5">
                  Wellness visits
                </h2>
                <div className="mt-auto flex items-end justify-between gap-2 sm:h-[calc(100%-40px)] sm:gap-3">
                  <p className="max-w-[115px] text-[10px] font-light leading-3 text-black sm:text-sm sm:leading-4">
                    Preventive care for every life stage
                  </p>
                  <span className="relative size-7 shrink-0 overflow-clip transition-transform duration-300 group-hover:translate-x-1 sm:size-9">
                    <img src="/icons/arrow-circle.svg" alt="" className="size-full object-contain" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
