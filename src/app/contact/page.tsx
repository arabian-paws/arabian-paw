import { ContactHero } from "@/components/contact-hero";
import { ContactMap } from "@/components/contact-map";
import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Gallery } from "@/components/gallery";
import { News } from "@/components/news";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";

export const metadata = {
  title: "Contact | Arabian Paws Veterinary Clinic",
  description:
    "Book an appointment with Arabian Paws Veterinary Clinic in Majan, Dubai. 24/7 emergency service and specialised dental care.",
};

export default function ContactPage() {
  return (
    <main id="home">
      <ContactHero />
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <ContactMap />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <News />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </main>
  );
}
