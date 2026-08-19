import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";

function Card({
  quote,
  name,
  location,
  avatar,
  className,
}: {
  quote: string;
  name: string;
  location: string;
  avatar: string;
  className: string;
}) {
  return (
    <article
      className={`h-[300px] rounded-2xl border border-[#d7d7d7] p-6 shadow-[0px_2px_4px_rgba(25,33,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_24px_rgba(25,33,61,0.12)] ${className}`}
    >
      <span className="relative block h-[29px] w-[42px] overflow-clip">
        <img src="/icons/quote.svg" alt="" className="size-full object-contain" />
      </span>
      <p className="mt-6 font-urbanist text-lg font-medium leading-[27px] text-muted">{quote}</p>
      <div className="mt-8 flex items-center gap-4">
        <div className="relative size-[60px] overflow-hidden rounded-lg">
          <Image src={avatar} alt={name} fill className="object-cover" sizes="60px" />
        </div>
        <div>
          <p className="font-urbanist text-lg font-semibold leading-[22.5px] text-ink">{name}</p>
          <p className="font-urbanist text-base font-medium leading-5 text-muted">{location}</p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-20">
      <Frame>
        <div className="grid items-start gap-10 lg:grid-cols-[480px_1fr]">
          <div className="lg:pt-[220px]">
            <h2 className="font-display text-[36px] uppercase leading-[40px] text-olive">
              This is what
              <br />
              our clients say
            </h2>
            <p className="mt-8 max-w-[480px] text-[22px] leading-[24px] text-olive">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit,
            </p>
            <PillButton href="#feedback" variant="olive" className="mt-8 w-[166px] px-0">
              See All
            </PillButton>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-5 sm:pt-[72px]">
              <Card
                quote="Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmodfugiat tempor incididunt ut labore etnulla."
                name="Andy Smith"
                location="San Francisco, CA"
                avatar="/images/avatar-milla.png"
                className="bg-white"
              />
              <Card
                quote="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                name="Sahara Connor"
                location="New York, NY"
                avatar="/images/avatar-milly.png"
                className="bg-cream"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Card
                quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse."
                name="Milla Collins"
                location="New York, NY"
                avatar="/images/avatar-andy.png"
                className="bg-white"
              />
              <Card
                quote="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                name="Milly Taylor"
                location="San Francisco, CA"
                avatar="/images/avatar-sahara.png"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
