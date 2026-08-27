import { Frame, PillButton } from "@/components/ui";

const vets = [
  {
    name: "John Carter",
    role: "Veterinary Doctor",
    image: "/images/doctor-john.png",
    imgClass: "left-1/2 top-[6%] h-[148%] w-auto -translate-x-1/2",
    offset: false,
  },
  {
    name: "Lilly Woods",
    role: "Nursing & Clinical Support",
    image: "/images/doctor-lilly.png",
    imgClass: "left-1/2 top-[14%] h-[98%] w-auto -translate-x-1/2",
    offset: true,
  },
  {
    name: "Ilsa Moore",
    role: "Clinic Operations",
    image: "/images/doctor-ilsa.png",
    imgClass: "left-1/2 top-[16%] h-[102%] w-auto -translate-x-1/2",
    offset: false,
  },
];

export function Vets() {
  return (
    <section
      id="vets"
      className="relative mt-6 w-full overflow-hidden rounded-[48px] bg-sage-dots py-16 lg:py-[80px]"
    >
      <Frame className="relative z-10">
        <h2 className="mb-8 text-center font-display text-[36px] uppercase leading-[34px] text-olive">
          OUR VETS
        </h2>
        <div className="grid items-start gap-6 md:grid-cols-3">
          {vets.map((vet) => (
            <article
              key={vet.name}
              className={`group relative h-[488px] overflow-hidden rounded-[24px] bg-cream transition-transform duration-500 hover:-translate-y-2 ${vet.offset ? "md:mt-[80px]" : ""}`}
            >
              <img
                src={vet.image}
                alt={vet.name}
                className={`absolute max-w-none object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] ${vet.imgClass}`}
              />
              <div className="absolute bottom-[18px] left-[18px] right-[22px] z-10 flex items-end justify-between gap-3">
                <div className="min-w-[170px] rounded-2xl border border-[#d7d7d7] bg-white px-3 py-3 shadow-[0px_2px_4px_rgba(25,33,61,0.08)]">
                  <p className="text-2xl font-medium leading-[30px] text-ink">{vet.name}</p>
                  <p className="text-base leading-[22.5px] text-muted-2">{vet.role}</p>
                </div>
                <span className="mb-1.5 inline-flex size-[34px] shrink-0 items-center justify-center overflow-clip rounded-full bg-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <img src="/icons/arrow-out.svg" alt="" className="size-4 object-contain" />
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-[480px] text-[22px] leading-[24px] text-olive">
            Experience behind every decision. Our founding team brings together veterinary, nursing
            and administrative expertise.
          </p>
          <PillButton href="/about#vets" variant="olive" className="w-[200px] px-0">
            Meet Our Team
          </PillButton>
        </div>
      </Frame>
    </section>
  );
}
