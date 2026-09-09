import Image from "next/image";
import { Frame } from "@/components/ui";

const socials = [
  {
    src: "/icons/social-instagram.svg",
    label: "Instagram",
    href: "https://www.instagram.com/arabianpaws.ae/",
  },
  {
    src: "/icons/social-linkedin.svg",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/arabianpaws.ae/posts/?feedView=all",
  },
  {
    src: "/icons/social-facebook.svg",
    label: "Facebook",
    href: "https://www.facebook.com/arabianpaws.ae",
  },
  {
    src: "/icons/social-youtube.svg",
    label: "YouTube",
    href: "https://www.youtube.com/@arabianpaws-ae",
  },
];

function Photo({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="420px"
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-20">
      <Frame>
        <h2 className="text-center font-display text-[36px] uppercase leading-[60px] text-olive">
          Follow us
        </h2>
        <p className="mx-auto max-w-[480px] text-center text-sm font-medium leading-[20px] text-muted">
          Take a closer look at Arabian Paws, our modern clinic, our team, and the care we provide every day.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Photo src="/images/gallery-1.png" alt="Cat at the clinic" className="h-[398px]" />
            <Photo src="/images/gallery-3.png" alt="Family with a dog" className="h-[398px]" />
          </div>
          <Photo src="/images/smiling-vet.webp" alt="Smiling veterinarian with a beagle" className="h-[398px] md:h-[820px]" />
          <div className="flex flex-col gap-6">
            <Photo src="/images/gallery-2.png" alt="Woman with a dog" className="h-[398px]" />
            <Photo src="/images/gallery-4.png" alt="Rabbit at the clinic" className="h-[398px]" />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-[39px] items-center justify-center overflow-hidden rounded-full bg-cream transition-transform duration-300 hover:scale-110"
            >
              <img src={social.src} alt="" className="size-[17px] object-contain" />
            </a>
          ))}
        </div>
      </Frame>
    </section>
  );
}
