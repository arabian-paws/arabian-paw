import Image from "next/image";
import { Frame, PillButton } from "@/components/ui";

export function CtaBanner() {
  return (
    <section id="book" className="pb-16">
      <Frame>
        <div className="relative overflow-hidden rounded-xl bg-gold px-8 py-10 lg:min-h-[428px] lg:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_527px]">
            <div className="relative z-10">
              <h2 className="font-display text-[36px] uppercase leading-[40px] text-olive">
                Your pet&apos;s next visit
                <br />
                starts here
              </h2>
              <p className="mt-6 max-w-[480px] text-[22px] leading-[24px] text-olive">
                Tell us a little about your pet and the reason for your visit. Our team will help
                arrange the appropriate appointment.
              </p>
              <PillButton href="/contact" variant="olive" className="mt-8 w-[200px] px-0">
                Book an Appointment
              </PillButton>
            </div>
            <div className="relative h-[280px] lg:h-[394px]">
              <Image
                src="/images/cta-cats.png"
                alt="Two cats sitting together"
                fill
                className="object-contain object-bottom transition-transform duration-700 hover:scale-[1.03]"
                sizes="527px"
              />
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
