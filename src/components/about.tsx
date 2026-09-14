import { Frame, PillButton } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="px-5 py-[72px] text-center lg:px-[80px] lg:py-[110px]">
      <Frame className="px-0 lg:px-0">
        <p className="mx-auto max-w-[1223px] text-[20px] leading-[35px] tracking-[-0.4px] text-black">
          Understanding your pet is at the heart of better veterinary care. We focus on recognising changes early, understanding their individual needs, and providing informed care through every stage of life.
        </p>
        <PillButton href="/about" variant="ghost" className="mt-10">
          More About Us
        </PillButton>
      </Frame>
    </section>
  );
}
