import { Vets } from "@/components/vets";
import { PetWellness } from "@/components/pet-wellness";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Our Vets | Arabian Paws",
  description:
    "Meet the founding team behind Arabian Paws — veterinary, nursing and administrative expertise with years of professional experience.",
};

export default function OurVetsPage() {
  return (
    <main className="pt-[140px] pb-10">
      <Reveal>
        <Vets showCta={false} />
      </Reveal>
      <Reveal>
        <PetWellness />
      </Reveal>
    </main>
  );
}
