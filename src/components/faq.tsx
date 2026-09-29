"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Where is Arabian Paws located?",
    answer:
      "Arabian Paws Veterinary Clinic is located in Majan, Dubai, conveniently serving Majan, Al Barari and surrounding residential communities.",
  },
  {
    question: "Is Arabian Paws open 24/7?",
    answer:
      "Yes. Arabian Paws provides 24/7 emergency veterinary services for pets requiring urgent care.",
  },
  {
    question: "Do you provide veterinary dental services?",
    answer:
      "Yes. Veterinary dentistry is one of our key areas of expertise, with specialised dental services supported by advanced technology.",
  },
  {
    question: "Is parking available?",
    answer: "Yes. Complimentary customer parking is available at the clinic.",
  },
  {
    question: "What should I expect at my pet's first visit?",
    answer:
      "Your first visit typically includes a full health assessment, a discussion of your pet's history and any current concerns, and a recommended plan for ongoing care. Bring any previous medical records if you have them.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Majan, Dubai, but our veterinary services are available across Dubai.",
  },
  {
    question: "Do I need an appointment for emergency care?",
    answer:
      "No\u2026 for emergencies, contact the clinic directly and come in as soon as possible. Do not wait for an online booking confirmation.",
  },
];

export function Faq({
  items = faqs,
}: {
  items?: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-[80px]">
      <h2 className="mb-16 text-center font-display text-[36px] uppercase leading-[40px] text-black">
        Questions?
        <br />
        We&apos;re here to help.
      </h2>

      <div className="flex flex-col gap-5">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className={`rounded-[7px] border border-[#d7d7d7] px-8 py-6 text-left transition-colors duration-300 hover:border-olive/40 ${isOpen ? "bg-cream" : "bg-white hover:bg-cream-soft"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xl font-medium tracking-[-0.16px] text-black md:text-2xl">
                  {item.question}
                </span>
                <span
                  className={`relative size-6 shrink-0 overflow-clip transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <img src="/icons/faq-arrow.svg" alt="" className="size-full object-contain" />
                </span>
              </div>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="mt-4 max-w-[764px] text-base leading-6 tracking-[-0.16px] text-black">
                    {item.answer}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
}
