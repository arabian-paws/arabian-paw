type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function Logo({ className = "", variant = "header" }: LogoProps) {
  const paw = variant === "footer" ? "/icons/logo-paw-footer.svg" : "/icons/logo-paw.svg";
  const arabian = variant === "footer" ? "/icons/logo-arabian-footer.svg" : "/icons/logo-arabian.svg";
  const paws = variant === "footer" ? "/icons/logo-paws-footer.svg" : "/icons/logo-paws.svg";

  return (
    <div className={`relative h-[77px] w-[173px] shrink-0 ${className}`} aria-label="Arabian Paws">
      <span className="absolute inset-[7%_66.5%_0_0] overflow-clip">
        <img src={paw} alt="" className="size-full object-contain object-left-top" />
      </span>
      <span className="absolute inset-[32.75%_0_40%_41.8%] overflow-clip">
        <img src={arabian} alt="" className="size-full object-contain object-left" />
      </span>
      <span className="absolute inset-[57.5%_19%_21%_41.8%] overflow-clip">
        <img src={paws} alt="" className="size-full object-contain object-left" />
      </span>
      <p className="absolute inset-[82%_0_6%_41.8%] text-[8px] leading-none tracking-[0.08em] text-gold">
        VETERINARY CLINIC
      </p>
    </div>
  );
}
