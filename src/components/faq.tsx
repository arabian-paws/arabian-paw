"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why is a strong brand identity important?",
    answer:
      "A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today's competitive market.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most pet owners notice clearer communication and easier booking within the first visit. Ongoing care plans typically show health improvements over a few weeks, depending on the treatment.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Wellness packages can be paused or cancelled with notice. Emergency and one-off clinical services are billed per visit.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Arabian Paws supports pet travel, relocation paperwork, and visiting pet owners across Dubai and the wider region.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in companion animal medicine, emergency care, dentistry, diagnostics, grooming, nutrition, and VIP home care.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-[80px]">
      <h2 className="mb-16 text-center font-display text-[36px] uppercase leading-[40px] text-black">
        Questions?
        <br />
        We&apos;re here to assist!
      </h2>

      <div className="flex flex-col gap-5">
        {faqs.map((item, index) => {
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
