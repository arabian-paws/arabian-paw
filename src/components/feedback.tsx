"use client";

import { FormEvent } from "react";
import { Frame, PillButton } from "@/components/ui";

const fieldClass =
  "w-full rounded-[12px] border border-transparent bg-white px-[18px] text-base tracking-[-0.8px] text-ink shadow-[0px_2px_8px_rgba(0,0,0,0.08)] outline-none placeholder:text-[#b1b1b1] transition-shadow duration-300 focus:border-olive/20 focus:shadow-[0px_6px_18px_rgba(58,61,45,0.14)]";

export function Feedback() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="feedback" className="relative w-full overflow-hidden rounded-[48px] bg-sage-dots py-16 lg:py-[100px]">
      <Frame className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,480px)_minmax(0,506px)] lg:justify-between lg:gap-16">
        <div className="max-w-[480px]">
          <h2 className="font-display text-[32px] uppercase leading-[38px] text-olive lg:text-[36px] lg:leading-[40px]">
            Share Your
            <br />
            Feedback
          </h2>
          <p className="mt-8 text-[22px] leading-[24px] text-olive">
            Tell us a little about your pet and the reason for your visit. Our team will help
            arrange the appropriate appointment.
          </p>
          <PillButton href="#news" variant="olive" className="mt-10 w-[166px] px-0">
            See All
          </PillButton>
        </div>

        <form onSubmit={onSubmit} className="flex w-full flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input name="firstName" placeholder="First Name" className={`h-[52px] ${fieldClass}`} />
            <input name="lastName" placeholder="Last Name" className={`h-[52px] ${fieldClass}`} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`h-[52px] ${fieldClass}`}
          />
          <label className={`flex h-[52px] items-center gap-2.5 ${fieldClass} pr-3`}>
            <span className="relative h-[12px] w-[24px] shrink-0 overflow-hidden rounded-[2px]">
              <img src="/icons/flag-ae.svg" alt="" className="size-full object-cover" />
            </span>
            <span className="text-[10px] leading-none text-[#8a8a8a]" aria-hidden>
              ▾
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#b1b1b1]"
            />
          </label>
          <textarea
            name="message"
            placeholder="Message"
            className={`h-[260px] resize-none py-[16px] ${fieldClass}`}
          />
        </form>
      </Frame>
    </section>
  );
}
