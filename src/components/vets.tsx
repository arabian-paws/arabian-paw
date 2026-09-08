import { Frame, PillButton } from "@/components/ui";

const vets = [
  {
    name: "Dr Hafiz Mudasser",
    role: "Medical Director, Veterinary Surgeon",
    experience: "12 Years Of Experience",
    image: "/images/vet-mudasser.webp",
    offset: false,
  },
  {
    name: "Mohsin Shafique",
    role: "General Manager",
    experience: "5 Years Of Experience",
    image: "/images/vet-mohsin.webp",
    offset: true,
  },
  {
    name: "Usman Ali",
    role: "Senior Veterinary Nurse",
    experience: null,
    image: "/images/vet-usman.webp",
    offset: false,
  },
  {
    name: "Hamid",
    role: "Nurse",
    experience: null,
    image: "/images/vet-hamid.webp",
    offset: true,
  },
];

export function Vets({ showCta = true }: { showCta?: boolean }) {
  return (
    <section
      id="vets"
      className="relative mt-6 w-full overflow-hidden rounded-[48px] bg-sage-dots py-16 lg:py-[80px]"
    >
      <Frame className="relative z-10">
        <h2 className="mb-8 text-center font-display text-[36px] uppercase leading-[34px] text-olive">
          Meet Our Team
        </h2>
        <div className="grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {vets.map((vet) => (
            <article
              key={vet.name}
              className={`group relative h-[488px] overflow-hidden rounded-[24px] bg-cream transition-transform duration-500 hover:-translate-y-2 ${vet.offset ? "xl:mt-[80px]" : ""}`}
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="absolute inset-0 size-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 h-[45%] bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-[18px] left-[18px] right-[22px] z-10 flex items-end justify-between gap-3">
                <div className="min-w-0 flex-1 rounded-2xl border border-[#d7d7d7] bg-white px-3 py-3 shadow-[0px_2px_4px_rgba(25,33,61,0.08)]">
                  <p className="text-[20px] font-medium leading-[26px] text-ink">{vet.name}</p>
                  <p className="text-[14px] leading-[20px] text-muted-2">{vet.role}</p>
                  {vet.experience ? (
                    <p className="mt-1 text-[12px] font-medium leading-[16px] text-olive">
                      {vet.experience}
                    </p>
                  ) : null}
                </div>
                <span className="mb-1.5 inline-flex size-[34px] shrink-0 items-center justify-center overflow-clip rounded-full bg-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <img src="/icons/arrow-out.svg" alt="" className="size-4 object-contain" />
                </span>
              </div>
            </article>
          ))}
        </div>
        {showCta ? (
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-[480px] text-[22px] leading-[24px] text-olive">
              Our founding team brings together veterinary, nursing and administrative expertise,
              with years of experience working in professional veterinary environments.
            </p>
            <PillButton href="/our-vets" variant="olive" className="w-[200px] px-0">
              Meet Our Team
            </PillButton>
          </div>
        ) : (
          <p className="mt-10 max-w-[640px] text-[22px] leading-[24px] text-olive">
            Our founding team brings together veterinary, nursing and administrative expertise, with
            years of experience working in professional veterinary environments.
          </p>
        )}
      </Frame>
    </section>
  );
}
