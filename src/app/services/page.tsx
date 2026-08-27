import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Feedback } from "@/components/feedback";
import { News } from "@/components/news";
import { Reveal } from "@/components/reveal";
import { ServicesCatalog } from "@/components/services-catalog";
import { ServicesHero } from "@/components/services-hero";
import { Testimonials } from "@/components/testimonials";
import { Vets } from "@/components/vets";

export const metadata = {
  title: "Services | Arabian Paws Veterinary Clinic",
  description:
    "Explore Emergency & ICU, diagnostics, surgery, dentistry, grooming, nutrition, and VIP home care at Arabian Paws Vet Clinic in Majan, Dubai.",
};

export default function ServicesPage() {
  return (
    <main id="home">
      <ServicesHero />
      <Reveal>
        <ServicesCatalog />
      </Reveal>
      <Reveal>
        <Vets />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Feedback />
      </Reveal>
      <Reveal>
        <News />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </main>
  );
}
