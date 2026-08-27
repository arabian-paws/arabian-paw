import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { InnerServiceBlocks } from "@/components/inner-service-blocks";
import { InnerServiceHero } from "@/components/inner-service-hero";
import { InnerServiceReasons } from "@/components/inner-service-reasons";
import { News } from "@/components/news";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";

export const metadata = {
  title: "24/7 Emergency & Critical Care | Arabian Paws",
  description:
    "24/7 emergency veterinary care in Majan. Triage, ICU, trauma and poisoning management, emergency surgery, and continuous monitoring at Arabian Paws.",
};

export default function EmergencyServicePage() {
  return (
    <main id="home">
      <InnerServiceHero />
      <Reveal>
        <InnerServiceBlocks />
      </Reveal>
      <Reveal>
        <InnerServiceReasons />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq />
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
