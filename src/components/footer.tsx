"use client";

import Image from "next/image";
import { Logo } from "@/components/logo";
import {
  PillButton,
  WHATSAPP_EMERGENCY,
  WHATSAPP_DISPLAY,
  PHONE_LANDLINE,
  PHONE_DISPLAY,
} from "@/components/ui";
import { SERVICES } from "@/data/services";

const quickLinks: Record<string, string> = {
  Home: "/",
  "About Us": "/about",
  Services: "/services",
  "Our Team": "/our-vets",
  Blog: "/blogs",
  Contact: "/contact",
};

export function Footer() {
  const mid = Math.ceil(SERVICES.length / 2);
  const serviceCols = [SERVICES.slice(0, mid), SERVICES.slice(mid)];

  return (
    <footer className="relative mt-4 w-full overflow-hidden rounded-t-[48px] bg-olive text-cream">
      <a
        href="#home"
        aria-label="Back to top"
        className="absolute right-5 top-5 z-30 size-9 transition-transform duration-300 hover:scale-110 lg:right-10 lg:top-8 lg:size-10"
      >
        <img src="/icons/arrow-circle.svg" alt="" className="size-full -rotate-90 object-contain" />
      </a>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-5 pb-6 pt-12 lg:px-[80px] lg:pb-8 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)_minmax(0,240px)] lg:items-start lg:gap-10">
          <div className="relative z-20 max-w-[260px] lg:pb-8">
            <Logo variant="footer" />
            <p className="mt-4 max-w-[260px] text-sm font-light leading-[22px] text-cream">
              Exceptional Care. Healthier Smiles.
            </p>
            <p className="mt-2 max-w-[220px] text-xs font-light leading-[18px] text-cream/70">
              Veterinary Care | Dental Care | Emergency &amp; Critical Care | Wellness
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            <div>
              <p className="font-display text-base text-cream">Quick Links</p>
              <ul className="mt-3 space-y-1 text-xs font-light leading-[20px]">
                {Object.entries(quickLinks).map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-base text-cream">Services</p>
              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                {serviceCols.map((col, colIndex) => (
                  <ul key={colIndex} className="space-y-1 text-xs font-light leading-[20px]">
                    {col.map((service) => (
                      <li key={service.slug}>
                        <a href={`/services/${service.slug}`} className="hover:text-gold">
                          {service.catalogTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-base text-cream">Contact</p>
            <p className="mt-3 text-xs font-light leading-[20px]">Majan, Dubai, UAE</p>
            <p className="text-xs font-medium leading-[20px]">
              <a href="mailto:Info@arabianpaws.ae" className="hover:text-gold">
                Info@arabianpaws.ae
              </a>
            </p>
            <p className="text-xs font-light leading-[20px]">
              Landline:{" "}
              <a href={PHONE_LANDLINE} className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="text-xs font-light leading-[20px]">
              WhatsApp:{" "}
              <a
                href={WHATSAPP_EMERGENCY}
                className="hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-10 lg:mt-12">
          <div className="flex min-h-[160px] items-center justify-end rounded-xl bg-gold px-6 py-8 sm:min-h-[180px] lg:pl-[420px] lg:pr-12">
            <div className="relative z-10 max-w-[470px] lg:text-right">
              <h2 className="font-display text-[24px] uppercase leading-[28px] text-olive lg:text-[32px] lg:leading-[36px]">
                Your pet deserves
                <br />
                exceptional care
              </h2>
              <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
                <PillButton
                  href={WHATSAPP_EMERGENCY}
                  variant="olive"
                  icon="/icons/medical-footer.svg"
                  size="sm"
                  subtitle={WHATSAPP_DISPLAY}
                >
                  Book Appointment
                </PillButton>
                <PillButton
                  href={PHONE_LANDLINE}
                  variant="cream"
                  icon="/icons/medical-footer-dark.svg"
                  size="sm"
                  subtitle={PHONE_DISPLAY}
                >
                  24/7 Emergency
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-[300px] w-[400px] lg:block">
        <Image
          src="/images/footer-cat-dog.png"
          alt="Cat and dog"
          fill
          className="object-contain object-left-bottom mix-blend-screen opacity-95"
          sizes="400px"
        />
      </div>
      <div className="relative z-10 pb-4 text-center text-xs font-light text-cream/60">
        © Arabian Paws Veterinary Clinic. All Rights Reserved.
      </div>
    </footer>
  );
}
