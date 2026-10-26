"use client";

import { useMemo, useState } from "react";
import { Frame, PillButton } from "@/components/ui";
import {
  PACKAGE_SECTIONS,
  carePackageWhatsappUrl,
  packagesFor,
  type PackageCategory,
  type PetType,
} from "@/data/membership";

const PETS: { id: PetType; label: string }[] = [
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
];

export function CarePackages({ category }: { category: PackageCategory }) {
  const section = PACKAGE_SECTIONS.find((item) => item.id === category);
  const [pet, setPet] = useState<PetType>("cat");
  const packages = useMemo(() => packagesFor(category, pet), [category, pet]);

  if (!section) return null;

  return (
    <section id={category} className="scroll-mt-6 pt-16 lg:pt-[86px]">
      <Frame>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[-0.16px] text-olive-muted">
            Service
          </p>
          <h2 className="mt-2 font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
            {section.title}
          </h2>
          <p className="mt-4 text-[16px] leading-[24px] text-olive sm:text-[20px]">{section.intro}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-cream p-1">
            {PETS.map((option) => {
              const active = pet === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPet(option.id)}
                  className={`rounded-full px-7 py-2.5 text-[15px] font-bold tracking-[-0.16px] ${
                    active ? "bg-olive text-cream" : "text-olive hover:bg-gold/50"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#d7d7d7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[2px_2px_1px_rgba(58,61,45,0.5)]"
            >
              <div className="flex flex-1 flex-col px-6 py-7">
                <p className="text-[13px] font-bold uppercase tracking-[-0.16px] text-olive-muted">
                  {pet === "cat" ? "Cat" : "Dog"} · {section.title}
                </p>
                <h3 className="mt-2 font-display text-[22px] uppercase leading-[26px] text-olive">
                  {pkg.title}
                </h3>
                <p className="mt-3 font-display text-[28px] leading-none text-olive">
                  AED {pkg.price}
                  <span className="ml-1 text-[14px] font-sans font-medium text-olive/70">+ VAT</span>
                </p>
                <p className="mt-4 text-[15px] leading-[22px] text-black">{pkg.summary}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[20px] text-olive">
                      <img src="/icons/paw-mark.svg" alt="" className="mt-0.5 size-4 shrink-0 object-contain" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-[9px] bg-cream-soft px-4 py-3">
                  <p className="text-[12px] font-bold uppercase tracking-[-0.16px] text-olive">
                    Free with this package
                  </p>
                  <p className="mt-1 text-[13px] leading-[18px] text-olive">{pkg.freeWith}</p>
                </div>
                <div className="mt-auto pt-6">
                  <PillButton
                    href={carePackageWhatsappUrl(pkg)}
                    variant="olive"
                    size="sm"
                    className="w-full"
                  >
                    {pkg.cta}
                  </PillButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}
