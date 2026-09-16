import { Frame } from "@/components/ui";

const VALUES = [
  {
    title: "Compassion",
    body: "We treat every animal as an individual, with patience, care and respect throughout their visit.",
    icon: "/icons/value-compassion.svg",
    iconClass: "h-[42px] w-[42px]",
  },
  {
    title: "Integrity",
    body: "Pet owners deserve clear communication and honest recommendations about their pet's health.",
    icon: "/icons/value-integrity.svg",
    iconClass: "h-[45px] w-[42px]",
  },
  {
    title: "Quality",
    body: "From clinical assessment to treatment, we pay attention to the details that matter.",
    icon: "/icons/value-quality.svg",
    iconClass: "h-[50px] w-[42px]",
  },
  {
    title: "Love",
    body: "Every decision we make starts with the wellbeing of the animal in front of us.",
    icon: "/icons/value-love.svg",
    iconClass: "h-[38px] w-[42px]",
  },
];

function ValueCard({
  title,
  body,
  icon,
  iconClass,
}: {
  title: string;
  body: string;
  icon: string;
  iconClass: string;
}) {
  return (
    <article className="flex h-full min-h-[280px] flex-col rounded-2xl border border-[#d7d7d7] bg-white p-8 shadow-[0px_2px_6px_rgba(22,23,26,0.08)]">
      <img src={icon} alt="" className={`${iconClass} object-contain`} />
      <h3 className="mt-auto font-display text-2xl leading-[30px] text-olive">{title}</h3>
      <p className="mt-3 max-w-[230px] text-base font-medium leading-[21px] text-muted">{body}</p>
    </article>
  );
}

export function AboutValues() {
  return (
    <section className="py-16 lg:py-[80px]">
      <Frame>
        <h2 className="mx-auto max-w-[446px] text-center font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
          Our values
        </h2>
        <p className="mx-auto mt-6 max-w-[688px] text-center text-[18px] leading-[24px] text-olive sm:text-[22.5px]">
          Veterinary medicine should be thorough without being complicated, and professional
          without losing the personal connection that matters to pet owners.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <article className="relative flex min-h-[294px] flex-col overflow-hidden rounded-[24px] bg-sage p-8 sm:p-[42px]">
            <div className="relative z-10 max-w-[280px] sm:max-w-[240px] lg:max-w-[210px]">
              <h3 className="font-display text-2xl leading-[30px] text-olive">Teamwork</h3>
              <p className="mt-3 text-base font-medium leading-[21px] text-muted">
                Great veterinary care is a team effort. Our veterinary, nursing and support teams
                work together around every patient.
              </p>
            </div>
            <img
              src="/images/about-teamwork-pets.png"
              alt="Dog, cat and rabbit together"
              className="pointer-events-none mt-6 h-[200px] w-[200px] self-end object-contain object-bottom lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[285px] lg:w-[285px]"
            />
          </article>
          <ValueCard
            title="Dedication"
            body="We stay committed to every patient — from the first consultation through recovery and long-term care."
            icon="/icons/value-dedication.svg"
            iconClass="h-[42px] w-[42px]"
          />
          <ValueCard
            title="Respect"
            body="We respect the bond between pets and their families and take the time to listen to both."
            icon="/icons/value-respect.svg"
            iconClass="h-[38px] w-[42px]"
          />
        </div>
      </Frame>
    </section>
  );
}
