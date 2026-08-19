"use client";

import Image from "next/image";
import { useRef } from "react";
import { Frame, PillButton } from "@/components/ui";

const products = [
  { name: "Small dog dish", price: "$ 23.00 USD", image: "/images/product-dish.png" },
  { name: "Dog ball", price: "$ 8.00 USD", image: "/images/product-ball.png" },
  { name: "Sand shovel", price: "$ 21.00 USD", image: "/images/product-shovel.png" },
  { name: "Travel bowl", price: "$ 19.00 USD", image: "/images/product-dish.png" },
  { name: "Fetch ball", price: "$ 10.00 USD", image: "/images/product-ball.png" },
  { name: "Garden scoop", price: "$ 18.00 USD", image: "/images/product-shovel.png" },
];

function NavButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous products" : "Next products"}
      onClick={onClick}
      className={`absolute top-1/2 z-20 size-9 -translate-y-1/2 rounded-full lg:size-[36px] ${className}`}
    >
      <img
        src="/icons/nav-arrow.svg"
        alt=""
        className={`size-full object-contain transition-transform duration-300 hover:scale-110 ${direction === "prev" ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export function Products() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector("article");
    const styles = getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 16;
    const step = card ? card.getBoundingClientRect().width + gap : scroller.clientWidth / 3;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    let next = scroller.scrollLeft + dir * step;

    if (dir === 1 && next > maxScroll - 8) next = 0;
    if (dir === -1 && next < 8) next = maxScroll;

    scroller.scrollTo({ left: next, behavior: "smooth" });
  };

  return (
    <section
      id="products"
      className="relative w-full overflow-hidden rounded-[48px] bg-[#fff4e0] py-16 lg:py-[80px]"
    >
      <img
        src="/images/products-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full scale-110 object-cover object-center"
      />

      <Frame className="relative z-10">
        <h2 className="text-center font-display text-[32px] uppercase leading-[40px] text-olive lg:text-[36px] lg:leading-[45px]">
          Our featured products
        </h2>
        <p className="mx-auto mt-3 max-w-[540px] text-center text-sm font-medium leading-[20px] text-muted">
          Lorem ipsum dolor sit amet consectetur adipiselit sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <div className="relative mx-auto mt-12 max-w-[932px]">
          <NavButton
            direction="prev"
            onClick={() => scrollByCard(-1)}
            className="left-1 lg:-left-[54px]"
          />

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className="group w-[85%] shrink-0 snap-start rounded-[12px] bg-white p-2 shadow-[0px_2px_8px_rgba(25,33,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_rgba(25,33,61,0.14)] sm:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[10px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="300px"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 font-urbanist text-[10.5px] font-medium text-ink shadow-sm">
                    {product.price}
                  </span>
                </div>
                <p className="mt-3 px-1 font-urbanist text-[16px] font-medium leading-[22px] text-ink">
                  {product.name}
                </p>
                <div className="mt-3 flex gap-2 px-1 pb-1">
                  <button
                    type="button"
                    className="h-[40px] flex-1 rounded-full bg-olive font-urbanist text-xs font-medium text-white hover:bg-[#2c2f22]"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="h-[40px] flex-1 rounded-full bg-[#f5f5f5] font-urbanist text-xs font-medium text-ink hover:bg-[#ececec]"
                  >
                    Buy now
                  </button>
                </div>
              </article>
            ))}
          </div>

          <NavButton
            direction="next"
            onClick={() => scrollByCard(1)}
            className="right-1 lg:-right-[54px]"
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-[480px] text-[22px] leading-[24px] text-olive">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit,
          </p>
          <PillButton href="#gallery" variant="olive" className="w-[200px] px-0">
            See All
          </PillButton>
        </div>
      </Frame>
    </section>
  );
}
