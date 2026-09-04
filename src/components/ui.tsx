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
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  cream: "bg-cream text-olive",
  olive: "bg-olive text-cream border border-olive",
  emergency: "bg-emergency text-white",
  sage: "bg-sage text-olive",
  ghost: "bg-cream text-black border border-olive",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-[47px] gap-1.5 px-[22px] text-[12px] font-bold leading-none",
  md: "h-[60px] px-8 text-[18px] font-normal leading-none",
};

export const WHATSAPP_EMERGENCY = "https://wa.me/971565110765";

export function PillButton({
  href,
  children,
  variant = "cream",
  icon,
  className = "",
  type = "button",
  size = "md",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full text-center whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(58,61,45,0.22)] active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;
  const iconSize = size === "sm" ? "size-[15px]" : "size-[18px]";

  const content = (
    <>
      {icon ? (
        <span className={`relative ${iconSize} shrink-0 overflow-clip`}>
          <img src={icon} alt="" className="size-full object-contain" />
        </span>
      ) : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
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
