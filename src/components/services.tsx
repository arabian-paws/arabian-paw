import Link from "next/link";
import { Frame, PillButton } from "@/components/ui";

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
  gridClass = "",
  href,
  wide = false,
  children,
}: {
  title: string;
  titleClass?: string;
  bg: string;
  gridClass?: string;
  href: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block ${wide ? "h-[314px] w-full max-w-[636px] sm:col-span-2" : "size-[314px]"} ${gridClass}`}
    >
      <article
        className={`group relative size-full overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-1 ${bg}`}
      >
        {children}
        <h3
          className={`absolute left-[26px] top-[26px] z-10 w-[200px] font-display text-[23px] uppercase leading-[22px] ${titleClass}`}
        >
          {title}
        </h3>
        <Badge className="absolute bottom-[18px] right-[18px] z-20" />
      </article>
    </Link>
  );
}

export function Services({
  showVisitAll = true,
  showHeading = true,
  className = "pb-8 pt-4",
}: {
  showVisitAll?: boolean;
  showHeading?: boolean;
  className?: string;
}) {
  return (
    <section id="services" className={className}>
      <Frame>
        {showHeading ? (
          <h2 className="mb-8 text-center font-display text-[32px] uppercase leading-[34px] text-olive sm:mb-10 sm:text-[36px]">
            Services of our clinic
          </h2>
        ) : null}

        <div className="mx-auto grid w-fit max-w-full grid-cols-1 justify-center justify-items-center gap-2 sm:grid-cols-2 xl:grid-cols-[repeat(4,314px)] xl:grid-rows-[repeat(3,314px)]">
          <PhotoCard
            title="Emergency & ICU"
            bg="bg-gold"
            href="/services/emergency"
            gridClass="xl:col-start-1 xl:row-start-1"
          >
            <Animal
              src="/images/kitten.png"
              wrapClass="left-0 top-[9px] h-[305px] w-[314px]"
              imgClass="left-[-9.66%] top-0 h-[146.56%] w-[130.78%]"
            />
          </PhotoCard>

          <PhotoCard
            title="VIP Home Care"
            bg="bg-sage"
            href="/services/vip-home-care"
            gridClass="xl:col-start-2 xl:row-start-1"
          >
            <Animal
              src="/images/vip-cockatoo.png"
              wrapClass="left-[40px] top-[12px] h-[302px] w-[274px]"
              imgClass="left-0 top-0 h-[136.42%] w-[100.22%]"
            />
          </PhotoCard>

          <PhotoCard
            title="Diagnostics & Lab"
            bg="bg-cream"
            href="/services/diagnostics"
            gridClass="xl:col-start-3 xl:row-start-1"
          >
            <Animal
              src="/images/basenji.png"
              wrapClass="left-0 top-[68px] h-[246px] w-[314px]"
              imgClass="left-0 top-0 h-[128.97%] w-[151.59%]"
            />
          </PhotoCard>

          <PhotoCard
            title="Surgery"
            bg="bg-sage"
            href="/services/surgery"
            gridClass="xl:col-start-4 xl:row-start-1"
          >
            <Animal
              src="/images/hero-cat.png"
              wrapClass="inset-0"
              imgClass="left-[-54.15%] top-[10.69%] h-full w-[157.18%]"
            />
          </PhotoCard>

          <PhotoCard
            title="Grooming & Spa"
            bg="bg-gold"
            href="/services/grooming"
            gridClass="xl:col-start-1 xl:row-start-2"
          >
            <Animal
              src="/images/brown-dog.png"
              wrapClass="left-0 top-[11px] h-[303px] w-[314px]"
              imgClass="left-[-26.75%] top-0 h-[196.11%] w-[157.96%]"
            />
          </PhotoCard>

          <PhotoCard
            title="Dentistry"
            titleClass="text-white"
            bg="bg-olive-muted"
            href="/services/dentistry"
            gridClass="xl:col-start-2 xl:row-start-2"
          >
            <Animal
              src="/images/rabbit.png"
              wrapClass="left-[10px] top-[54px] h-[260px] w-[294px]"
              imgClass="left-[-6.47%] top-0 h-[111.87%] w-[148.6%]"
            />
          </PhotoCard>

          <PhotoCard
            title="Travel & Relocation"
            bg="bg-sage"
            href="/services/travel"
            gridClass="xl:col-start-3 xl:row-start-2"
          >
            <Animal
              src="/images/travel-terrier.png"
              wrapClass="left-[-12px] top-[68px] h-[246px] w-[259px]"
              imgClass="left-0 top-0 h-[105.28%] w-full"
            />
          </PhotoCard>

          <PhotoCard
            title="Wellness & Vaccines"
            bg="bg-gold"
            href="/services/wellness"
            gridClass="xl:col-start-4 xl:row-start-2"
          >
            <Animal
              src="/images/cockatoo.png"
              wrapClass="left-0 top-[69px] h-[245px] w-[271px]"
              imgClass="left-[-7.13%] top-0 h-full w-[107.24%]"
            />
          </PhotoCard>

          {showVisitAll ? (
            <>
              <article className="relative h-[314px] w-[314px] overflow-hidden rounded-xl bg-olive p-6 transition-transform duration-500 hover:-translate-y-1 sm:col-span-2 sm:w-[636px] xl:col-span-2 xl:col-start-1 xl:row-start-3 xl:w-[636px]">
                <h3 className="max-w-[220px] font-display text-[23px] uppercase leading-[22px] text-gold">
                  Visit our all services
                </h3>
                <p className="absolute bottom-[28px] left-[26px] max-w-[358px] text-[20px] leading-[23px] text-white">
                  Complete care. Specialised expertise. Support through routine healthcare, illness
                  and treatment.
                </p>
                <PillButton
                  href="/services"
                  variant="cream"
                  className="absolute bottom-[18px] right-[18px]"
                >
                  See All
                </PillButton>
              </article>

              <PhotoCard
                title="Pet Food & Nutrition"
                titleClass="text-white"
                bg="bg-olive-muted"
                href="/services/nutrition"
                gridClass="xl:col-start-3 xl:row-start-3"
              >
                <Animal
                  src="/images/pet-food-nutrition.png"
                  wrapClass="inset-0"
                  imgClass="left-0 top-0 h-full w-full object-cover object-left"
                />
              </PhotoCard>

              <PhotoCard
                title="Boutique & Accessories"
                bg="bg-sage"
                href="/services/boutique"
                gridClass="xl:col-start-4 xl:row-start-3"
              >
                <Animal
                  src="/images/red-cat.png"
                  wrapClass="left-0 top-[63px] h-[251px] w-[314px]"
                  imgClass="left-[-19.43%] top-0 h-[183.86%] w-[151.59%]"
                />
              </PhotoCard>
            </>
          ) : (
            <>
              <PhotoCard
                title="Pet Food & Nutrition"
                titleClass="text-white"
                bg="bg-olive-muted"
                href="/services/nutrition"
                wide
                gridClass="xl:col-span-2 xl:col-start-1 xl:row-start-3"
              >
                <Animal
                  src="/images/pet-food-nutrition.png"
                  wrapClass="right-0 bottom-0 top-0 w-[55%]"
                  imgClass="inset-0 h-full w-full object-cover object-left"
                />
              </PhotoCard>

              <PhotoCard
                title="Boutique & Accessories"
                bg="bg-sage"
                href="/services/boutique"
                wide
                gridClass="xl:col-span-2 xl:col-start-3 xl:row-start-3"
              >
                <Animal
                  src="/images/red-cat.png"
                  wrapClass="right-0 bottom-0 h-[280px] w-[380px]"
                  imgClass="right-0 bottom-0 left-auto h-full w-auto max-w-none object-contain object-right-bottom"
                />
              </PhotoCard>
            </>
          )}
        </div>
      </Frame>
    </section>
  );
}
