import { Vets } from "@/components/vets";
import { PetWellness } from "@/components/pet-wellness";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Our Vets | Arabian Paws",
  description:
    "Meet the Arabian Paws team — veterinary surgeons, nurses, grooming and clinic leadership with years of professional experience.",
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
