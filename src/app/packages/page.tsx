import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { CarePackages } from "@/components/membership-care-packages";
import { PackagesHero } from "@/components/packages-hero";
import { Reveal } from "@/components/reveal";
import { PACKAGE_FAQS, PACKAGE_SECTIONS } from "@/data/membership";

export const metadata = {
  title: "Health Care Packages | Arabian Paws",
  description:
    "Surgery and dental packages at Arabian Paws in Majan, Dubai. Spay, castration and dental care for cats and dogs, each with pre-operative blood testing.",
};

export default function PackagesPage() {
  return (
    <main id="home">
      <PackagesHero />
      {PACKAGE_SECTIONS.map((section) => (
        <Reveal key={section.id}>
          <CarePackages category={section.id} />
        </Reveal>
      ))}
      <Reveal>
        <Faq items={PACKAGE_FAQS} />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </main>
  );
}
