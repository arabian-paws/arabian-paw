"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { PillButton } from "@/components/ui";

const links = [
  { href: "/", label: "Home", match: "/" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/services", label: "Features", match: "/services" },
  { href: "/#products", label: "Pricing" },
  { href: "/#news", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 w-full rounded-b-[28px] border-b border-cream bg-olive text-cream lg:rounded-b-[48px]">
      <div className="mx-auto flex h-[96px] max-w-[1440px] items-center justify-between px-5 lg:h-[138px] lg:px-[80px]">
        <Link href="/" aria-label="Arabian Paws home" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
          <Logo className="h-[60px] w-[136px] lg:h-[77px] lg:w-[173px]" />
        </Link>

        <nav className="hidden items-center gap-[38px] lg:flex">
          {links.map((link) => {
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
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <PillButton href="/contact" variant="sage" icon="/icons/medical.svg" size="sm">
            Book Online
          </PillButton>
          <PillButton href="/#emergency" variant="emergency" icon="/icons/medical-white.svg" size="sm">
            24/7 • Emergency Service
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
          {links.map((link) => {
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
          <PillButton href="/contact" variant="sage" icon="/icons/medical.svg" size="sm">
            Book Online
          </PillButton>
          <PillButton href="/#emergency" variant="emergency" icon="/icons/medical-white.svg" size="sm">
            24/7 • Emergency Service
          </PillButton>
        </div>
      ) : null}
    </header>
  );
}
