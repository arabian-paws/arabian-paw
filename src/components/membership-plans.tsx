import { Frame, PillButton } from "@/components/ui";
import { MEMBERSHIP_INTRO, MEMBERSHIP_PLANS, membershipWhatsappUrl } from "@/data/membership";

const tones = {
  cream: "bg-cream-soft",
  sage: "bg-sage",
  gold: "bg-gold",
};

export function MembershipPlans() {
  return (
    <section id="memberships" className="pt-16 lg:pt-[100px]">
      <Frame>
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
            Membership Packages{" "}
            <span className="normal-case">(Cats &amp; Dogs)</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[24px] text-olive sm:text-[20px] sm:leading-[26px]">
            {MEMBERSHIP_INTRO}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {MEMBERSHIP_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex h-full flex-col rounded-[12px] px-6 py-8 sm:px-7 ${tones[plan.tone]} ${
                plan.popular ? "shadow-[2px_2px_1px_rgba(58,61,45,0.5)] lg:-translate-y-3" : ""
              }`}
            >
              {plan.popular ? (
                <span className="absolute right-5 top-5 rounded-full bg-olive px-3 py-1 text-[11px] font-bold uppercase tracking-[-0.16px] text-cream">
                  Most Popular
                </span>
              ) : null}
              <p className="text-[13px] font-bold uppercase tracking-[-0.16px] text-olive/70">
                Annual plan
              </p>
              <h3 className="mt-2 font-display text-[28px] uppercase leading-[30px] text-olive">
                {plan.title}
              </h3>
              <p className="mt-4 font-display text-[34px] leading-none text-olive">
                AED {plan.price}
                <span className="ml-1 text-[14px] font-sans font-medium text-olive/70">+ VAT</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[20px] text-olive">
                    <img src="/icons/paw-mark.svg" alt="" className="mt-0.5 size-4 shrink-0 object-contain" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PillButton
                  href={membershipWhatsappUrl(plan)}
                  variant="olive"
                  size="sm"
                  className="w-full"
                >
                  Join a Membership
                </PillButton>
              </div>
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}
