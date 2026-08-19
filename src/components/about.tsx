import { Frame, PillButton } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="px-5 py-[72px] text-center lg:px-[80px] lg:py-[110px]">
      <Frame className="px-0 lg:px-0">
        <p className="mx-auto max-w-[1223px] text-[28px] leading-[36px] tracking-[-1px] text-black md:text-[40px] md:leading-[48px]">
          Arabian Paws Vet Clinic is one of the premier veterinary clinics 🏥 in Majan,
          Dubai 🇦🇪. We are a modern, multidisciplinary veterinary hospital offering a
          full range of services 👩‍⚕️ for pets 🐶🐱.
        </p>
        <PillButton href="#vets" variant="ghost" className="mt-10">
          More About Us
        </PillButton>
      </Frame>
    </section>
  );
}
