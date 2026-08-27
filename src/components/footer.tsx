"use client";

import Image from "next/image";
import { Logo } from "@/components/logo";
import { PillButton } from "@/components/ui";

const services = [
  "Clinical Services",
  "Emergency Care",
  "VIP Home Care",
  "Grooming & Spa",
  "Wellness Packages",
];

const extra = ["Pet Boutique", "Our Vets", "Health Library", "Contact"];

export function Footer() {
  return (
    <footer className="relative mt-4 w-full min-h-[700px] overflow-hidden rounded-t-[48px] bg-olive text-cream lg:min-h-[760px]">
      <a
        href="#home"
        aria-label="Back to top"
        className="absolute right-5 top-5 z-30 size-9 transition-transform duration-300 hover:scale-110 lg:right-10 lg:top-8 lg:size-10"
      >
        <img src="/icons/arrow-circle.svg" alt="" className="size-full -rotate-90 object-contain" />
      </a>

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1440px] flex-col px-5 pb-8 pt-16 lg:min-h-[760px] lg:px-[80px] lg:pb-10 lg:pt-[72px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr_minmax(0,280px)] lg:items-start lg:gap-12">
          <div>
            <Logo variant="footer" />
            <p className="mt-6 max-w-[319px] text-base font-light leading-[24px] text-cream">
              Exceptional Care. Healthier Smiles.
            </p>
          </div>

          <div>
            <p className="font-display text-lg text-cream">Services</p>
            <div className="mt-4 grid max-w-[340px] grid-cols-2 gap-x-8">
              <ul className="space-y-1 text-xs font-light leading-[22.5px]">
                {services.map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Emergency Care" ? "/services/emergency" : "/services"}
                      className="hover:text-gold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 text-xs font-light leading-[22.5px]">
                {extra.map((item) => (
                  <li key={item}>
                    <a
                      href={
                        item === "Contact"
                          ? "/contact"
                          : item === "Our Vets"
                            ? "/about#vets"
                            : item === "Health Library"
                              ? "/#news"
                              : "/about"
                      }
                      className="hover:text-gold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-display text-lg text-cream">Contact</p>
            <p className="mt-4 text-xs font-light leading-[22.5px]">Majan, Dubai, UAE</p>
            <p className="text-xs font-medium leading-[22.5px]">contact@arabianpaw.ae</p>
            <p className="text-xs font-light leading-[22.5px]">24/7 Emergency Service</p>
          </div>
        </div>

        <div className="mt-auto pt-24 lg:pt-32">
          <div className="flex min-h-[220px] items-center justify-end rounded-xl bg-gold px-6 py-10 sm:min-h-[255px] lg:pl-[420px] lg:pr-16">
            <div className="relative z-10 max-w-[470px] lg:text-right">
              <h2 className="font-display text-[28px] uppercase leading-[32px] text-olive lg:text-[36px] lg:leading-[40px]">
                Your pet deserves
                <br />
                exceptional care
              </h2>
              <div className="mt-6 flex flex-wrap gap-2 lg:justify-end">
                <PillButton href="/contact" variant="olive" icon="/icons/medical-footer.svg" size="sm">
                  Book Online
                </PillButton>
                <PillButton
                  href="/#emergency"
                  variant="cream"
                  icon="/icons/medical-footer-dark.svg"
                  size="sm"
                >
                  24/7 • Emergency Service
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-[500px] w-[400px] lg:block">
        <Image
          src="/images/footer-pets.png"
          alt="Cat and dog"
          fill
          className="object-contain object-left-bottom"
          sizes="400px"
        />
      </div>
    </footer>
  );
}
