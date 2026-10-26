import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { MembershipCompare } from "@/components/membership-compare";
import { MembershipHero } from "@/components/membership-hero";
import { MembershipPlans } from "@/components/membership-plans";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { MEMBERSHIP_FAQS } from "@/data/membership";

export const metadata = {
  title: "Membership | Arabian Paws",
  description:
    "Annual memberships for cats and dogs at Arabian Paws in Majan, Dubai — grooming, vaccinations, parasite prevention, consultations and Grand Opening pricing.",
};

export default function MembershipPage() {
  return (
    <main id="home">
      <MembershipHero />
      <Reveal>
        <MembershipPlans />
      </Reveal>
      <Reveal>
        <MembershipCompare />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq items={MEMBERSHIP_FAQS} />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </main>
  );
}
