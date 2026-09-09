"use client";

import { FormEvent } from "react";
import { Frame, PillButton } from "@/components/ui";

const fieldClass =
  "w-full rounded-[12px] border border-[#d7d7d7] bg-white px-[18px] text-base tracking-[-0.8px] text-ink outline-none placeholder:text-[#b1b1b1] transition-shadow duration-300 focus:border-olive/30 focus:shadow-[0px_6px_18px_rgba(58,61,45,0.14)]";

const DEPARTMENTS = [
  "Emergency & ICU",
  "VIP Home Care",
  "Diagnostics & Lab",
  "Surgery",
  "Dentistry",
  "Travel & Relocation",
  "Wellness & Vaccines",
  "Grooming & Spa",
  "Pet Food & Nutrition",
  "Boutique & Accessories",
];

export function ContactHero() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="book" className="pt-8 lg:pt-[40px]">
      <Frame>
        <div
          className="hero-rise grid items-start gap-2 lg:grid-cols-2"
          style={{ animationDelay: "80ms" }}
        >
          <div className="flex flex-col gap-2">
            <div className="rounded-[12px] bg-[#fff8eb] px-6 py-10 sm:px-[42px] sm:py-[43px]">
              <h1 className="max-w-[446px] font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
                Come and visit us with your pet.
              </h1>
              <p className="mt-10 max-w-[552px] text-[18px] leading-[24px] text-olive sm:text-[22.5px]">
                Whether your pet needs a routine check-up, specialised dental care or immediate
                veterinary attention, our team is here to help.
              </p>
              <PillButton
                href="#form"
                variant="olive"
                icon="/icons/medical-cream.svg"
                className="mt-10"
              >
                Book an Appointment
              </PillButton>
            </div>

            <a
              href="https://maps.google.com/?q=Majan+Dubai"
              className="flex h-[96px] items-center gap-8 rounded-[12px] bg-olive px-6 text-cream sm:px-[42px]"
            >
              <img src="/icons/contact-globe.svg" alt="" className="size-[52px] object-contain" />
              <span className="text-[22px] tracking-[-1.4px] sm:text-[28px]">Majan, Dubai</span>
            </a>
            <a
              href="mailto:Info@arabianpaws.ae"
              className="flex h-[96px] items-center gap-8 rounded-[12px] bg-cream px-6 text-olive sm:px-[42px]"
            >
              <img src="/icons/contact-mail.svg" alt="" className="size-[52px] object-contain" />
              <span className="text-[18px] tracking-[-1.4px] sm:text-[28px]">
                Info@arabianpaws.ae
              </span>
            </a>
            <a
              href="tel:+97142599244"
              className="flex h-[96px] items-center gap-8 rounded-[12px] bg-sage px-6 text-olive sm:px-[42px]"
            >
              <img src="/icons/contact-call.svg" alt="" className="size-[52px] object-contain" />
              <span className="text-[22px] tracking-[-1.4px] sm:text-[28px]">04 259 9244</span>
            </a>
            <a
              href="https://wa.me/971565110765"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[96px] items-center gap-8 rounded-[12px] bg-emergency px-6 text-white sm:px-[42px]"
            >
              <img src="/icons/medical-white.svg" alt="" className="size-[40px] object-contain" />
              <span className="text-[18px] tracking-[-1.0px] sm:text-[24px]">
                24/7 Emergency · +971 56 511 0765
              </span>
            </a>
          </div>

          <form
            id="form"
            onSubmit={onSubmit}
            className="flex flex-col gap-1.5 rounded-[12px] bg-olive px-5 py-10 shadow-[2px_2px_2px_rgba(0,0,0,0.25)] sm:px-[59px] sm:py-[54px] lg:min-h-[721px]"
          >
            <h2 className="mb-2 font-display text-[22px] uppercase leading-[28px] text-cream sm:text-[26px]">
              Your Pet's Next Visit Starts Here
            </h2>
            <p className="mb-4 text-sm leading-5 text-cream/80">
              Tell us a little about your pet and the reason for your visit. Our team will help arrange the appropriate appointment.
            </p>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              <input name="firstName" placeholder="First Name" className={`h-[52px] ${fieldClass}`} />
              <input name="lastName" placeholder="Last Name" className={`h-[52px] ${fieldClass}`} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`h-[52px] ${fieldClass}`}
            />
            <label className={`flex h-[52px] items-center gap-2.5 ${fieldClass} pr-3`}>
              <span className="relative h-[12px] w-[24px] shrink-0 overflow-hidden rounded-[2px]">
                <img src="/icons/flag-ae.svg" alt="" className="size-full object-cover" />
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#b1b1b1]"
              />
            </label>
            <label className={`relative flex h-[52px] items-center ${fieldClass} pr-10`}>
              <span className="sr-only">Select service</span>
              <select
                name="service"
                defaultValue=""
                className="h-full w-full appearance-none bg-transparent text-base tracking-[-0.8px] text-ink outline-none"
              >
                <option value="" disabled>
                  Select Service
                </option>
                {DEPARTMENTS.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <img
                src="/icons/arrow-drop-down.svg"
                alt=""
                className="pointer-events-none absolute right-[18px] top-1/2 size-6 -translate-y-1/2"
              />
            </label>
            <input
              name="petName"
              placeholder="Pet Name"
              className={`h-[52px] ${fieldClass}`}
            />
            <textarea
              name="reason"
              placeholder="Reason for Visit"
              className={`h-[180px] resize-none py-[18px] lg:h-[200px] ${fieldClass}`}
            />
            <input
              type="datetime-local"
              name="preferredDateTime"
              placeholder="Preferred Date & Time"
              className={`h-[52px] ${fieldClass}`}
            />
            <button
              type="submit"
              className="flex h-[60px] w-full items-center justify-center rounded-[12px] border border-cream bg-gold text-[20px] font-bold tracking-[-1.2px] text-olive transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(58,61,45,0.22)] sm:text-[24px]"
            >
              Book Appointment
            </button>
            <p className="mt-2 text-center text-sm leading-5 text-cream/80">
              For emergencies, please contact the clinic directly rather than submitting an online
              booking request.
            </p>
          </form>
        </div>

        <p className="mt-6 text-center text-xs font-light leading-5 text-[#6b6b6b]">
          Arabian Paws Veterinary Clinic L.L.C. — Trade License No. 1642346, DCCI Membership No. 696577
        </p>
      </Frame>
    </section>
  );
}
