import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { InnerServiceBlocks } from "@/components/inner-service-blocks";
import { InnerServiceHero } from "@/components/inner-service-hero";
import { InnerServiceReasons } from "@/components/inner-service-reasons";
import { CarePackages } from "@/components/membership-care-packages";
import { News } from "@/components/news";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import type { PackageCategory } from "@/data/membership";
import { getService, SERVICES } from "@/data/services";
import { notFound } from "next/navigation";

const SERVICE_PACKAGES: Record<string, PackageCategory> = {
  surgery: "surgery",
  dentistry: "dental",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const packageCategory = SERVICE_PACKAGES[service.slug];

  return (
    <main id="home">
      <InnerServiceHero service={service} />
      <Reveal>
        <InnerServiceBlocks blocks={service.blocks} />
      </Reveal>
      {packageCategory ? (
        <Reveal>
          <CarePackages category={packageCategory} />
        </Reveal>
      ) : null}
      <Reveal>
        <InnerServiceReasons
          title={service.reasonsTitle}
          intro={service.reasonsIntro}
          reasons={service.reasons}
        />
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
