import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Feedback } from "@/components/feedback";
import { News } from "@/components/news";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { ServicesHero } from "@/components/services-hero";
import { Testimonials } from "@/components/testimonials";
import { Vets } from "@/components/vets";

export const metadata = {
  title: "Services | Arabian Paws Veterinary Clinic",
  description:
    "Complete care and specialised expertise at Arabian Paws in Majan, Dubai — clinical care, veterinary dentistry, 24/7 emergency, VIP home care, grooming and wellness.",
};

export default function ServicesPage() {
  return (
    <main id="home">
      <ServicesHero />
      <Reveal>
        <Services showVisitAll={false} className="pb-8 pt-4 lg:pt-[82px]" />
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
