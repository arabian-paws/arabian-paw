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

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-cream-soft">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
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

        <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Photo src="/images/gallery-1.jpg" alt="Little changes can mean something — signs a cat may need a vet visit" />
            <Photo src="/images/gallery-4.jpg" alt="Our doors are open. Arabian Paws is open 24/7 in Majan, Dubai" />
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-olive md:min-h-[640px] lg:min-h-[820px]">
            <video
              className="absolute inset-0 size-full object-contain"
              src="/videos/follow-us-center.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Arabian Paws clinic video"
            />
          </div>

          <div className="flex flex-col gap-6">
            <Photo src="/images/gallery-2.jpg" alt="Bad breath is often a sign of dental disease. Book a dental check" />
            <Photo src="/images/gallery-3.jpg" alt="Better care starts at home" />
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
