"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { PillButton, WHATSAPP_EMERGENCY, WHATSAPP_DISPLAY } from "@/components/ui";
import { SERVICES } from "@/data/services";

const links: { href: string; label: string; match?: string; exact?: boolean }[] = [
  { href: "/", label: "Home", match: "/" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/our-vets", label: "Our Team", match: "/our-vets" },
  { href: "/blogs", label: "Blog", match: "/blogs" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services/");

  return (
    <header className="relative z-50 w-full rounded-b-[28px] border-b border-cream bg-olive text-cream lg:rounded-b-[48px]">
      <div className="mx-auto flex h-[96px] max-w-[1440px] items-center justify-between px-5 lg:h-[138px] lg:px-[80px]">
        <Link href="/" aria-label="Arabian Paws home" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
          <Logo className="h-[60px] w-[136px] lg:h-[77px] lg:w-[173px]" />
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-[38px] lg:flex">
          {links.slice(0, 2).map((link) => {
            const active =
              link.match === "/"
                ? pathname === "/"
                : Boolean(link.match && pathname.startsWith(link.match));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-bold tracking-[-0.16px] text-cream after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="group relative">
            <Link
              href="/services"
              className={`relative flex items-center gap-1 text-base font-bold tracking-[-0.16px] text-cream after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                servicesActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"
              }`}
            >
              Services
              <img
                src="/icons/arrow-drop-down.svg"
                alt=""
                className="size-4 brightness-0 invert opacity-90 transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-[12px] border border-olive/10 bg-cream py-2 shadow-[0_16px_40px_rgba(58,61,45,0.18)]">
                <Link
                  href="/services"
                  className="block px-4 py-2.5 text-[14px] font-bold tracking-[-0.16px] text-olive hover:bg-gold/40"
                >
                  All Services
                </Link>
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`block px-4 py-2 text-[14px] tracking-[-0.16px] hover:bg-gold/40 ${
                      pathname === `/services/${service.slug}`
                        ? "bg-gold/30 font-bold text-olive"
                        : "font-medium text-olive/90"
                    }`}
                  >
                    {service.catalogTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.slice(2).map((link) => {
            const active = link.exact
              ? pathname === link.match
              : link.match === "/"
                ? pathname === "/"
                : Boolean(link.match && pathname.startsWith(link.match));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-bold tracking-[-0.16px] text-cream after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <PillButton
            href={WHATSAPP_EMERGENCY}
            variant="sage"
            icon="/icons/medical.svg"
            size="sm"
            subtitle={WHATSAPP_DISPLAY}
          >
            Book Appointment
          </PillButton>
          <PillButton
            href={WHATSAPP_EMERGENCY}
            variant="emergency"
            icon="/icons/medical-white.svg"
            size="sm"
            subtitle={WHATSAPP_DISPLAY}
          >
            24/7 Emergency
          </PillButton>
        </div>

        <button
          type="button"
          className="relative size-10 overflow-clip rounded-full border border-cream/30 transition-colors hover:bg-cream/10 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="absolute inset-x-2.5 top-3.5 h-0.5 bg-cream" />
          <span className="absolute inset-x-2.5 top-1/2 h-0.5 -translate-y-1/2 bg-cream" />
          <span className="absolute inset-x-2.5 bottom-3.5 h-0.5 bg-cream" />
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-4 px-6 pb-8 lg:hidden">
          {links.slice(0, 2).map((link) => {
            const active =
              link.match === "/"
                ? pathname === "/"
                : Boolean(link.match && pathname.startsWith(link.match));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-bold transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-cream"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          <div>
            <button
              type="button"
              className={`flex w-full items-center justify-between text-base font-bold ${
                servicesActive ? "text-gold" : "text-cream"
              }`}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <img
                src="/icons/arrow-drop-down.svg"
                alt=""
                className={`size-5 brightness-0 invert transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen ? (
              <div className="mt-3 flex flex-col gap-2 pl-3">
                <Link
                  href="/services"
                  className="text-sm font-bold text-gold"
                  onClick={() => setOpen(false)}
                >
                  All Services
                </Link>
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`text-sm ${
                      pathname === `/services/${service.slug}` ? "font-bold text-gold" : "text-cream/90"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {service.catalogTitle}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {links.slice(2).map((link) => {
            const active = link.exact
              ? pathname === link.match
              : Boolean(link.match && pathname.startsWith(link.match));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-bold transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-cream"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <PillButton
            href={WHATSAPP_EMERGENCY}
            variant="sage"
            icon="/icons/medical.svg"
            size="sm"
            subtitle={WHATSAPP_DISPLAY}
          >
            Book Appointment
          </PillButton>
          <PillButton
            href={WHATSAPP_EMERGENCY}
            variant="emergency"
            icon="/icons/medical-white.svg"
            size="sm"
            subtitle={WHATSAPP_DISPLAY}
          >
            24/7 Emergency
          </PillButton>
        </div>
      ) : null}
    </header>
  );
}
