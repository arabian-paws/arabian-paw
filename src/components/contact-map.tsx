import { Frame } from "@/components/ui";

export function ContactMap() {
  return (
    <section className="py-8">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[32px] bg-sage px-5 py-16 sm:rounded-[48px] lg:px-6 lg:py-[124px]">
        <Frame className="px-0 lg:px-0">
          <h2 className="mx-auto max-w-[446px] text-center font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
            Come and visit us with your pet
          </h2>
          <p className="mx-auto mt-6 max-w-[688px] text-center text-[18px] leading-[24px] text-olive sm:text-[22.5px]">
            Arabian Paws Veterinary Clinic, Majan, Dubai. Open 24/7 for emergency service.
            Email us at contact@arabianpaw.ae.
          </p>
          <div className="relative mx-auto mt-16 h-[280px] w-full max-w-[1258px] overflow-hidden rounded-[12px] border border-[#d7d7d7] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] sm:h-[400px] lg:h-[548px]">
            <img
              src="/images/contact-map.png"
              alt="Map of Arabian Paws in Majan, Dubai"
              className="size-full object-cover"
            />
          </div>
        </Frame>
      </div>
    </section>
  );
}
