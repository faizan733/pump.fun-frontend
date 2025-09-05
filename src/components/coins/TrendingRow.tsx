// components/coins/TrendingRow.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { coins } from "@/lib/coins"; // shared data

export default function TrendingRow() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // ✅ Always create 6 cards, cycle through coins if fewer than 6
  const trendingCoins = Array.from({ length: 6 }).map(
    (_, idx) => coins[idx % coins.length]
  );

  // scroll by ~60% of visible width
  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const dx = Math.round(el.clientWidth * 0.6) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  // ensure active card is visible
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[active] as HTMLElement | undefined;
    if (child) {
      const childLeft = child.offsetLeft;
      const childRight = childLeft + child.clientWidth;
      const viewLeft = el.scrollLeft;
      const viewRight = viewLeft + el.clientWidth;
      if (childLeft < viewLeft || childRight > viewRight) {
        el.scrollTo({ left: Math.max(childLeft - 12, 0), behavior: "smooth" });
      }
    }
  }, [active]);

  // keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActive((s) => Math.min(s + 1, trendingCoins.length - 1));
      } else if (e.key === "ArrowLeft") {
        setActive((s) => Math.max(s - 1, 0));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [trendingCoins.length]);

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium">Now Trending</h2>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="h-8 w-8 rounded-full bg-white/6 border border-white/10 hover:bg-white/8 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="h-8 w-8 rounded-full bg-white/6 border border-white/10 hover:bg-white/8 flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* scroller */}
      <div
        ref={scrollerRef}
        className="overflow-x-auto pr-2 no-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="min-w-max flex gap-3 items-start py-0">
          {trendingCoins.map((coin, i) => {
            const isActive = i === active;
            return (
              <Link
                key={`${coin.id}-${i}`} // 👈 use index in key to avoid duplicates
                href={`/coins/${coin.id}`}
                onMouseEnter={() => setActive(i)}
                className={[
                  "shrink-0 group inline-flex items-start gap-3 rounded-lg p-3 transition-shadow",
                  "bg-[#111214] border border-white/6",
                  "min-w-[240px] md:min-w-[260px]",
                  isActive
                    ? "bg-gray-950"
                    : "hover:shadow-[0_6px_18px_rgba(0,0,0,0.45)]",
                ].join(" ")}
                aria-label={`${coin.name} — Market Cap ${coin.mcap}`}
              >
                {/* left image */}
                <div className="relative h-14 w-14 md:h-[70px] md:w-[70px] shrink-0 overflow-hidden rounded-sm bg-white/5">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* right content */}
                <div className="flex flex-col justify-center pr-1">
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <div className="text-sm font-semibold leading-5 text-white">
                        {coin.name}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm">(Coin name)</span>
                  </div>
                  <div className="mt-1 font-medium text-[13px]">
                    <div className="text-emerald-400">
                      <span>market cap:</span> <span>{coin.mcap}</span>
                    </div>
                    <div className="text-white/70  font-thin">
                      <span>replies:</span> <span>{coin.replies}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
