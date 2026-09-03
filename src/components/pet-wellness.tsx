import { Frame, PillButton } from "@/components/ui";

export function PetWellness() {
  return (
    <section className="relative mt-6 w-full overflow-hidden rounded-[48px] bg-cream-soft py-16 lg:py-[80px]">
      <Frame>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mb-6 font-display text-[36px] uppercase leading-[34px] text-olive">
            Keeping Them Well, Not Just Treating Them When They Aren&apos;t.
          </h2>
          <p className="mb-4 text-[18px] leading-[26px] text-olive/80">
            Routine veterinary visits give you the chance to stay ahead of
            potential health concerns before they become serious. From regular
            assessments to preventive care and dental health, we help pet owners
            make informed decisions about their pet&apos;s wellbeing.
          </p>
          <p className="mb-8 text-[15px] italic leading-[22px] text-olive/60">
            Our approach is focused on your pet&apos;s individual needs, age,
            lifestyle and health history.
          </p>
          <PillButton href="/contact" variant="olive">
            Book a Wellness Appointment
          </PillButton>
        </div>
      </Frame>
    </section>
  );
}
