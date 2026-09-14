import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "cream" | "olive" | "emergency" | "sage" | "ghost";
  icon?: string;
  className?: string;
  type?: "button" | "submit";
  size?: "sm" | "md";
  external?: boolean;
  subtitle?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  cream: "bg-cream text-olive",
  olive: "bg-olive text-cream border border-olive",
  emergency: "bg-emergency text-white",
  sage: "bg-sage text-olive",
  ghost: "bg-cream text-black border border-olive",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-[47px] gap-1.5 px-[18px] text-[11px] font-bold leading-none",
  md: "h-[60px] px-8 text-[18px] font-normal leading-none",
};

export const WHATSAPP_EMERGENCY = "https://wa.me/971565110765";
export const WHATSAPP_DISPLAY = "+971 56 511 0765";
export const PHONE_LANDLINE = "tel:+97142599244";
export const PHONE_DISPLAY = "04 259 9244";

export function PillButton({
  href,
  children,
  variant = "cream",
  icon,
  className = "",
  type = "button",
  size = "md",
  external = false,
  subtitle,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(58,61,45,0.22)] active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;
  const iconSize = size === "sm" ? "size-[14px]" : "size-[18px]";

  const content = (
    <>
      {icon ? (
        <span className={`relative ${iconSize} shrink-0 overflow-clip`}>
          <img src={icon} alt="" className="size-full object-contain" />
        </span>
      ) : null}
      {subtitle ? (
        <span className="flex min-w-0 flex-col items-start justify-center leading-[1.05]">
          <span className={size === "sm" ? "text-[11px] font-bold" : "text-[16px]"}>{children}</span>
          <span className={size === "sm" ? "text-[9px] font-medium opacity-90" : "text-[11px] opacity-90"}>
            {subtitle}
          </span>
        </span>
      ) : (
        <span className="whitespace-nowrap">{children}</span>
      )}
    </>
  );

  if (href) {
    const isTel = href.startsWith("tel:");
    const isExternal =
      external || href.startsWith("http") || href.startsWith("https://wa.me") || isTel;
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(isTel ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}

export function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-[80px] ${className}`}>
      {children}
    </div>
  );
}
