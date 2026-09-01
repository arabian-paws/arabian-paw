import { About } from "@/components/about";
import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Feedback } from "@/components/feedback";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { News } from "@/components/news";
import { Products } from "@/components/products";
import { Reveal } from "@/components/reveal";
import { ServicesCatalog } from "@/components/services-catalog";
import { Testimonials } from "@/components/testimonials";
import { Vets } from "@/components/vets";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <ServicesCatalog showFilters={false} />
      </Reveal>
      <Reveal>
        <Vets />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Products />
      </Reveal>
      <Reveal>
        <Gallery />
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
