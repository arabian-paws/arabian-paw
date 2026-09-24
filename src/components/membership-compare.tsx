import { Frame, PillButton } from "@/components/ui";
import {
  MEMBERSHIP_COMPARE_ROWS,
  MEMBERSHIP_PLANS,
  membershipWhatsappUrl,
  type CompareValue,
} from "@/data/membership";

function CellValue({ value }: { value: CompareValue }) {
  if (value === true) {
    return (
      <img src="/icons/paw-mark.svg" alt="Included" className="mx-auto size-5 object-contain" />
    );
  }
  if (value === false || value === "—") {
    return <span className="text-olive/40">—</span>;
  }
  return <span>{value}</span>;
}

export function MembershipCompare() {
  return (
    <section id="compare" className="scroll-mt-6 py-16 lg:py-[100px]">
      <Frame>
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-display text-[28px] uppercase leading-[34px] text-olive sm:text-[36px] sm:leading-[40px]">
            Compare Memberships
          </h2>
          <p className="mt-4 text-[16px] leading-[24px] text-olive sm:text-[20px]">
            See what each annual plan includes, then join the membership that fits your pet.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[12px] border border-[#d7d7d7] bg-white">
          <table className="min-w-[720px] w-full border-collapse text-left">
            <thead>
              <tr className="bg-olive text-cream">
                <th className="px-5 py-5 text-[13px] font-bold uppercase tracking-[-0.16px]">
                  What&apos;s included
                </th>
                {MEMBERSHIP_PLANS.map((plan) => (
                  <th key={plan.id} className="px-5 py-5 text-center">
                    <p className="font-display text-[18px] uppercase leading-[20px]">{plan.title}</p>
                    <p className="mt-1 text-[12px] font-medium text-cream/80">{plan.priceLabel}</p>
                    {plan.popular ? (
                      <p className="mt-1 text-[11px] font-bold uppercase text-gold">Most Popular</p>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MEMBERSHIP_COMPARE_ROWS.map((row, index) => (
                <tr
                  key={row.label}
                  className={index % 2 === 0 ? "bg-cream-soft/60" : "bg-white"}
                >
                  <th className="px-5 py-4 text-[14px] font-medium text-olive">{row.label}</th>
                  {row.values.map((value, valueIndex) => (
                    <td
                      key={`${row.label}-${valueIndex}`}
                      className="px-5 py-4 text-center text-[14px] text-olive"
                    >
                      <CellValue value={value} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-cream">
                <th className="px-5 py-5 text-[14px] font-bold text-olive">Join</th>
                {MEMBERSHIP_PLANS.map((plan) => (
                  <td key={`${plan.id}-join`} className="px-4 py-5 text-center">
                    <PillButton
                      href={membershipWhatsappUrl(plan)}
                      variant="olive"
                      size="sm"
                      className="w-full min-w-[140px]"
                    >
                      Join a Membership
                    </PillButton>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Frame>
    </section>
  );
}
