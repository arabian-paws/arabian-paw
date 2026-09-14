"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Frame, PillButton, WHATSAPP_EMERGENCY, WHATSAPP_DISPLAY } from "@/components/ui";

const DEPARTMENTS = [
  "Emergency & ICU",
  "VIP Home Care",
  "Diagnostics & Lab",
  "Surgery",
  "Dentistry",
  "Travel & Relocation",
  "Wellness & Vaccines",
  "Grooming & Spa",
  "Pet Food & Nutrition",
  "Boutique & Accessories",
] as const;

function Badge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[48px] items-center justify-center rounded-full border border-olive bg-cream px-8 text-[18px] leading-none text-black ${className}`}
    >
      View
    </span>
  );
}

function Animal({
  src,
  wrapClass,
  imgClass,
}: {
  src: string;
  wrapClass: string;
  imgClass: string;
}) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${wrapClass}`}>
      <img
        alt=""
        src={src}
        className={`absolute block max-w-none transition-transform duration-700 ease-out group-hover:scale-105 ${imgClass}`}
      />
    </div>
  );
}

function PhotoCard({
  title,
  titleClass = "text-olive",
  bg,
  className,
  href,
  children,
}: {
  title: string;
  titleClass?: string;
  bg: string;
  className: string;
  href?: string;
  children: React.ReactNode;
}) {
  const card = (
    <article
      className={`group relative size-[314px] overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-1 ${bg} ${className}`}
    >
      {children}
      <h3
        className={`absolute left-[26px] top-[26px] z-10 w-[180px] font-display text-[23px] uppercase leading-[22px] ${titleClass}`}
      >
        {title}
      </h3>
      <Badge className="absolute bottom-[18px] right-[18px] z-20" />
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}

function TextCard({
  title,
  className,
  href,
  children,
}: {
  title: string;
  className: string;
  href?: string;
  children: React.ReactNode;
}) {
  const card = (
    <article
      className={`group flex size-[314px] flex-col items-center justify-center gap-7 rounded-xl px-12 transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      <h3 className="text-center font-display text-[23px] uppercase leading-[22px] text-olive">
        {title}
      </h3>
      {children}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}

type CatalogItem = {
  id: string;
  title: string;
  searchable: boolean;
  gridClass: string;
  node: ReactNode;
};

function items(): CatalogItem[] {
  return [
    {
      id: "emergency",
      title: "Emergency & ICU",
      searchable: true,
      gridClass: "xl:col-start-1 xl:row-start-1",
      node: (
        <PhotoCard title="Emergency & ICU" bg="bg-gold" href="/services/emergency" className="">
          <Animal
            src="/images/kitten.png"
            wrapClass="left-0 top-[9px] h-[305px] w-[314px]"
            imgClass="left-[-9.66%] top-0 h-[146.56%] w-[130.78%]"
          />
        </PhotoCard>
      ),
    },
    {
      id: "vip",
      title: "VIP Home Care",
      searchable: true,
      gridClass: "xl:col-start-2 xl:row-start-1",
      node: (
        <TextCard title="VIP Home Care" href="/services/vip-home-care" className="">
          <Badge />
        </TextCard>
      ),
    },
    {
      id: "diagnostics",
      title: "Diagnostics & Lab",
      searchable: true,
      gridClass: "xl:col-start-3 xl:row-start-1",
      node: (
        <PhotoCard title="Diagnostics & Lab" bg="bg-cream" href="/services/diagnostics" className="">
          <Animal
            src="/images/basenji.png"
            wrapClass="left-0 top-[68px] h-[246px] w-[314px]"
            imgClass="left-0 top-0 h-[128.97%] w-[151.59%]"
          />
        </PhotoCard>
      ),
    },
    {
      id: "surgery",
      title: "Surgery",
      searchable: true,
      gridClass: "xl:col-start-4 xl:row-start-1",
      node: (
        <PhotoCard title="Surgery" bg="bg-sage" href="/services/surgery" className="">
          <Animal
            src="/images/hero-cat.png"
            wrapClass="inset-0"
            imgClass="left-[-54.15%] top-[10.69%] h-full w-[157.18%]"
          />
        </PhotoCard>
      ),
    },
    {
      id: "blurb",
      title: "Arabian Paws Vet Clinic",
      searchable: false,
      gridClass: "xl:col-start-1 xl:row-start-2",
      node: (
        <p className="flex size-[314px] items-center px-1 text-[18px] leading-[22px] tracking-[-1px] text-black">
          Located in Majan, Dubai, our modern clinic offers comprehensive veterinary care, with specialised expertise in veterinary dentistry.
        </p>
      ),
    },
    {
      id: "dentistry",
      title: "Dentistry",
      searchable: true,
      gridClass: "xl:col-start-2 xl:row-start-2",
      node: (
        <PhotoCard title="Dentistry" titleClass="text-white" bg="bg-olive-muted" href="/services/dentistry" className="">
          <Animal
            src="/images/rabbit.png"
            wrapClass="left-[10px] top-[54px] h-[260px] w-[294px]"
            imgClass="left-[-6.47%] top-0 h-[111.87%] w-[148.6%]"
          />
        </PhotoCard>
      ),
    },
    {
      id: "travel",
      title: "Travel & Relocation",
      searchable: true,
      gridClass: "xl:col-start-3 xl:row-start-2",
      node: (
        <TextCard title="Travel & Relocation" href="/services/travel" className="">
          <Badge />
        </TextCard>
      ),
    },
    {
      id: "wellness",
      title: "Wellness & Vaccines",
      searchable: true,
      gridClass: "xl:col-start-4 xl:row-start-2",
      node: (
        <PhotoCard title="Wellness & Vaccines" bg="bg-gold" href="/services/wellness" className="">
          <Animal
            src="/images/cockatoo.png"
            wrapClass="left-0 top-[69px] h-[245px] w-[271px]"
            imgClass="left-[-7.13%] top-0 h-full w-[107.24%]"
          />
        </PhotoCard>
      ),
    },
    {
      id: "grooming",
      title: "Grooming & Spa",
      searchable: true,
      gridClass: "xl:col-start-1 xl:row-start-3",
      node: (
        <PhotoCard title="Grooming & Spa" bg="bg-gold" href="/services/grooming" className="">
          <Animal
            src="/images/brown-dog.png"
            wrapClass="left-0 top-[11px] h-[303px] w-[314px]"
            imgClass="left-[-26.75%] top-0 h-[196.11%] w-[157.96%]"
          />
        </PhotoCard>
      ),
    },
    {
      id: "consult",
      title: "Book our consultation",
      searchable: false,
      gridClass: "xl:col-start-2 xl:row-start-3",
      node: (
        <TextCard title="Book our consultation" className="">
          <PillButton
            href={WHATSAPP_EMERGENCY}
            variant="ghost"
            className="h-[48px] px-8 text-[18px]"
            subtitle={WHATSAPP_DISPLAY}
          >
            Book Appointment
          </PillButton>
        </TextCard>
      ),
    },
    {
      id: "nutrition",
      title: "Pet Food & Nutrition",
      searchable: true,
      gridClass: "xl:col-start-3 xl:row-start-3",
      node: (
        <PhotoCard
          title="Pet Food & Nutrition"
          titleClass="text-white"
          bg="bg-olive-muted"
          href="/services/nutrition"
          className=""
        >
          <Animal
            src="/images/pet-food-nutrition.png"
            wrapClass="inset-0"
            imgClass="left-0 top-0 h-full w-full object-cover object-left"
          />
        </PhotoCard>
      ),
    },
    {
      id: "boutique",
      title: "Boutique & Accessories",
      searchable: true,
      gridClass: "xl:col-start-4 xl:row-start-3",
      node: (
        <PhotoCard title="Boutique & Accessories" bg="bg-sage" href="/services/boutique" className="">
          <Animal
            src="/images/red-cat.png"
            wrapClass="left-0 top-[63px] h-[251px] w-[314px]"
            imgClass="left-[-19.43%] top-0 h-[183.86%] w-[151.59%]"
          />
        </PhotoCard>
      ),
    },
  ];
}

export function ServicesCatalog({
  showFilters = true,
  showAllServicesLink = true,
}: {
  showFilters?: boolean;
  showAllServicesLink?: boolean;
}) {
  const [department, setDepartment] = useState("");
  const [query, setQuery] = useState("");
  const catalog = useMemo(() => items(), []);

  const filtered = catalog.filter((item) => {
    if (!showFilters) return true;
    const hay = item.title.toLowerCase();
    const matchesQuery = !query.trim() || hay.includes(query.trim().toLowerCase());
    const matchesDept = !department || item.title === department;
    if (!item.searchable) {
      return !department && !query.trim();
    }
    return matchesQuery && matchesDept;
  });

  const isDefault = !showFilters || (!department && !query.trim());

  return (
    <section id="services" className={showFilters ? "pb-8 pt-10 lg:pt-[82px]" : "pb-8 pt-4"}>
      <Frame>
        <h2
          className={`mb-10 text-center font-display text-[32px] uppercase leading-[34px] text-olive lg:text-[36px] ${
            showFilters ? "lg:mb-[70px]" : ""
          }`}
        >
          Our Veterinary Services
        </h2>

        {showFilters ? (
        <div className="mb-[88px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block h-[57px] w-full max-w-[506px]">
            <span className="sr-only">Choose a department</span>
            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              className="h-full w-full appearance-none rounded-[12px] border border-[#d7d7d7] bg-white px-[18px] pr-12 text-[16px] tracking-[-0.8px] text-[#1c1b1f] outline-none focus:border-olive/30"
            >
              <option value="">Choose a department</option>
              {DEPARTMENTS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <img
              src="/icons/arrow-drop-down.svg"
              alt=""
              className="pointer-events-none absolute right-[18px] top-1/2 size-6 -translate-y-1/2"
            />
          </label>

          <label className="flex h-[57px] w-full max-w-[314px] items-center gap-3 rounded-[12px] border border-[#d7d7d7] bg-white px-[18px] sm:ml-auto">
            <img src="/icons/search.svg" alt="" className="size-6 shrink-0" />
            <span className="sr-only">Search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="h-full min-w-0 flex-1 bg-transparent text-[16px] tracking-[-0.8px] text-[#1c1b1f] outline-none placeholder:text-[#1c1b1f]"
            />
          </label>
        </div>
        ) : null}

        <div className="mx-auto grid w-fit max-w-full grid-cols-1 justify-center justify-items-center gap-2 sm:grid-cols-2 xl:grid-cols-[repeat(4,314px)] xl:grid-rows-[repeat(3,314px)]">
          {filtered.length ? (
            filtered.map((item) => (
              <div key={item.id} className={isDefault ? item.gridClass : undefined}>
                {item.node}
              </div>
            ))
          ) : (
            <p className="col-span-full py-16 text-center text-lg text-olive">
              No services match your search.
            </p>
          )}
        </div>

        {showAllServicesLink ? (
          <div className="mt-10 flex justify-center">
            <PillButton href="/services" variant="olive" className="w-[200px] px-0">
              All Services
            </PillButton>
          </div>
        ) : null}
      </Frame>
    </section>
  );
}
