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
              Experience you can rely on. Care you can see. Our team brings years of practical
              experience across veterinary care, nursing and clinic administration.
            </p>
            <PillButton href="/#feedback" variant="olive" className="mt-8 w-[200px] px-0">
              Give Feedback
            </PillButton>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-5 sm:pt-[72px]">
              <Card
                quote="Veterinary professionals with extensive hands-on experience caring for pets."
                name="Andy Smith"
                location="Majan, Dubai"
                avatar="/images/avatar-milla.png"
                className="bg-white"
              />
              <Card
                quote="A purpose-designed clinic with contemporary equipment and clinical spaces."
                name="Sahara Connor"
                location="Jumeirah, Dubai"
                avatar="/images/avatar-milly.png"
                className="bg-cream"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Card
                quote="Specialised veterinary dental care supported by advanced technology."
                name="Milla Collins"
                location="Arabian Ranches, Dubai"
                avatar="/images/avatar-andy.png"
                className="bg-white"
              />
              <Card
                quote="Premium veterinary services delivered with considered pricing and complimentary parking."
                name="Milly Taylor"
                location="Al Barari, Dubai"
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
