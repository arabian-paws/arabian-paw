import Link from "next/link";
import { Frame, PillButton } from "@/components/ui";

function Badge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[48px] items-center justify-center rounded-full border border-olive bg-cream px-8 text-[18px] leading-none text-black ${className}`}
    >
      3 Services
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

function VipCard({ className, href = "/services/vip-home-care" }: { className: string; href?: string }) {
  return (
    <Link href={href} className="block">
      <article
        className={`group flex size-[314px] flex-col items-center justify-center gap-7 rounded-xl transition-transform duration-500 hover:-translate-y-1 ${className}`}
      >
        <h3 className="text-center font-display text-[23px] uppercase leading-[22px] text-olive">
          VIP Home Care
        </h3>
        <Badge />
      </article>
    </Link>
  );
}

export function Services() {
  return (
    <section id="services" className="pb-8 pt-4">
      <Frame>
        <h2 className="mb-10 text-center font-display text-[36px] uppercase leading-[34px] text-olive">
          Services of our clinic
        </h2>

        <div className="mx-auto grid w-fit max-w-full grid-cols-1 justify-center justify-items-center gap-2 sm:grid-cols-2 xl:grid-cols-[repeat(4,314px)] xl:grid-rows-[repeat(4,314px)]">
          <PhotoCard
            title="Emergency & ICU"
            bg="bg-gold"
            href="/services/emergency"
            className="xl:col-start-1 xl:row-start-1"
          >
            <Animal
              src="/images/kitten.png"
              wrapClass="left-0 top-[9px] h-[305px] w-[314px]"
              imgClass="left-[-9.66%] top-0 h-[146.56%] w-[130.78%]"
            />
          </PhotoCard>

          <VipCard className="xl:col-start-2 xl:row-start-1" />

          <PhotoCard title="Diagnostics & Lab" bg="bg-cream" href="/services/diagnostics" className="xl:col-start-3 xl:row-start-1">
            <Animal
              src="/images/basenji.png"
              wrapClass="left-0 top-[68px] h-[246px] w-[314px]"
              imgClass="left-0 top-0 h-[128.97%] w-[151.59%]"
            />
          </PhotoCard>

          <PhotoCard title="Surgery" bg="bg-sage" href="/services/surgery" className="xl:col-start-4 xl:row-start-1">
            <Animal
              src="/images/hero-cat.png"
              wrapClass="inset-0"
              imgClass="left-[-54.15%] top-[10.69%] h-full w-[157.18%]"
            />
          </PhotoCard>

          <p className="flex size-[314px] items-center px-1 text-[18px] leading-[22px] tracking-[-1px] text-black xl:col-start-1 xl:row-start-2">
            Located in Majan, Dubai, our clinic provides comprehensive veterinary care in a modern,
            thoughtfully designed environment, with particular expertise in veterinary dentistry.
          </p>

          <PhotoCard
            title="Dentistry"
            titleClass="text-white"
            bg="bg-olive-muted"
            href="/services/dentistry"
            className="xl:col-start-2 xl:row-start-2"
          >
            <Animal
              src="/images/rabbit.png"
              wrapClass="left-[10px] top-[54px] h-[260px] w-[294px]"
              imgClass="left-[-6.47%] top-0 h-[111.87%] w-[148.6%]"
            />
          </PhotoCard>

          <VipCard className="xl:col-start-3 xl:row-start-2" />

          <PhotoCard title="Wellness & Vaccines" bg="bg-gold" href="/services/wellness" className="xl:col-start-4 xl:row-start-2">
            <Animal
              src="/images/cockatoo.png"
              wrapClass="left-0 top-[69px] h-[245px] w-[271px]"
              imgClass="left-[-7.13%] top-0 h-full w-[107.24%]"
            />
          </PhotoCard>

          <PhotoCard title="Grooming & Spa" bg="bg-gold" href="/services/grooming" className="xl:col-start-1 xl:row-start-3">
            <Animal
              src="/images/brown-dog.png"
              wrapClass="left-0 top-[11px] h-[303px] w-[314px]"
              imgClass="left-[-26.75%] top-0 h-[196.11%] w-[157.96%]"
            />
          </PhotoCard>

          <VipCard className="xl:col-start-2 xl:row-start-3" />

          <PhotoCard title="Travel & Relocation" bg="bg-cream" href="/services/travel" className="xl:col-start-3 xl:row-start-3">
            <Animal
              src="/images/husky.png"
              wrapClass="left-0 top-[46px] h-[268px] w-[314px]"
              imgClass="left-[-21.06%] top-0 h-[122.01%] w-[156.13%]"
            />
          </PhotoCard>

          <PhotoCard title="Boutique & Accessories" bg="bg-sage" href="/services/boutique" className="xl:col-start-4 xl:row-start-3">
            <Animal
              src="/images/red-cat.png"
              wrapClass="left-0 top-[63px] h-[251px] w-[314px]"
              imgClass="left-[-19.43%] top-0 h-[183.86%] w-[151.59%]"
            />
          </PhotoCard>

          <VipCard className="xl:col-start-1 xl:row-start-4" />

          <PhotoCard
            title="Pet Food & Nutrition"
            titleClass="text-white"
            bg="bg-olive-muted"
            href="/services/nutrition"
            className="xl:col-start-2 xl:row-start-4"
          >
            <Animal
              src="/images/hero-cat.png"
              wrapClass="inset-0"
              imgClass="left-[-54.15%] top-[10.69%] h-full w-[157.18%]"
            />
          </PhotoCard>

          <article className="relative h-[314px] w-[314px] overflow-hidden rounded-xl bg-olive p-6 transition-transform duration-500 hover:-translate-y-1 sm:col-span-2 sm:w-[636px] xl:col-span-2 xl:col-start-3 xl:row-start-4 xl:w-[636px]">
            <h3 className="max-w-[220px] font-display text-[23px] uppercase leading-[22px] text-gold">
              Visit our all services
            </h3>
            <p className="absolute bottom-[28px] left-[26px] max-w-[358px] text-[20px] leading-[23px] text-white">
              Complete care. Specialised expertise. Support through routine healthcare, illness and
              treatment.
            </p>
            <PillButton href="/services" variant="cream" className="absolute bottom-[18px] right-[18px]">
              See All
            </PillButton>
          </article>
        </div>
      </Frame>
    </section>
  );
}
