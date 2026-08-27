import { AboutMission } from "@/components/about-mission";
import { AboutValues } from "@/components/about-values";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { Vets } from "@/components/vets";

export const metadata = {
  title: "About Us | Arabian Paws Veterinary Clinic",
  description:
    "Arabian Paws was created to offer pet families in Majan, Dubai a veterinary experience that combines clinical expertise with a higher standard of care.",
};

export default function AboutPage() {
  return (
    <main id="home">
      <AboutMission />
      <Reveal>
        <AboutValues />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Vets />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
    </main>
  );
}
