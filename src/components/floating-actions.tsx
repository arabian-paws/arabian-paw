"use client";

import { useEffect, useRef, useState } from "react";
import {
  WHATSAPP_EMERGENCY,
  PHONE_LANDLINE,
  PHONE_DISPLAY,
  PHONE_MOBILE,
  PHONE_MOBILE_DISPLAY,
} from "@/components/ui";

export function FloatingActions() {
  const [callOpen, setCallOpen] = useState(false);
  const callRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!callRef.current) return;
      if (!callRef.current.contains(event.target as Node)) {
        setCallOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-[60] flex flex-col items-start gap-3 sm:bottom-6 sm:left-6">
      <div ref={callRef} className="relative flex flex-col items-start gap-2">
        {callOpen ? (
          <div className="mb-1 flex min-w-[210px] flex-col overflow-hidden rounded-2xl border border-olive/10 bg-white shadow-[0_12px_32px_rgba(58,61,45,0.22)]">
            <p className="bg-olive px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-cream">
              Call us
            </p>
            <a
              href={PHONE_LANDLINE}
              className="flex flex-col gap-0.5 px-4 py-3 text-olive transition-colors hover:bg-cream-soft"
              onClick={() => setCallOpen(false)}
            >
              <span className="text-[12px] font-medium text-olive/70">Landline</span>
              <span className="text-[15px] font-bold">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={PHONE_MOBILE}
              className="flex flex-col gap-0.5 border-t border-[#ececec] px-4 py-3 text-olive transition-colors hover:bg-cream-soft"
              onClick={() => setCallOpen(false)}
            >
              <span className="text-[12px] font-medium text-olive/70">Mobile</span>
              <span className="text-[15px] font-bold">{PHONE_MOBILE_DISPLAY}</span>
            </a>
          </div>
        ) : null}

        <button
          type="button"
          aria-label="Call us"
          aria-expanded={callOpen}
          onClick={() => setCallOpen((value) => !value)}
          className="flex size-14 items-center justify-center rounded-full bg-olive text-cream shadow-[0_8px_24px_rgba(58,61,45,0.28)] transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
          </svg>
        </button>
      </div>

      <a
        href={WHATSAPP_EMERGENCY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
