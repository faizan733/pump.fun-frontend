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

  // ⛔️ Removed auto-scroll into view logic

  // keyboard navigation (still updates active index, but no auto-scroll)
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
        <div className="min-w-max flex gap-4 items-start py-0">
          {trendingCoins.map((coin, i) => {
            const isActive = i === active;
            return (
              <Link
                key={`${coin.id}-${i}`}
                href={`/coins/${coin.id}`}
                onMouseEnter={() => setActive(i)}
                className={[
                  "shrink-0 group inline-flex items-start gap-3 rounded-xl p-2.5",
                  "min-w-[260px] md:min-w-[280px] border border-white/6",
                  // ✅ smooth transition for background color
                  "transition-colors duration-300 ease-in-out",
                  isActive ? "bg-[#181a1f]" : "bg-[#1c2530] hover:bg-[#181a1f]",
                ].join(" ")}
                aria-label={`${coin.name} — Market Cap ${coin.mcap}`}
              >
                {/* left image */}
                <div className="relative h-14 w-14 md:h-[75px] md:w-[75px] shrink-0 overflow-hidden rounded-sm bg-white/5">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    fill
                    sizes="70px"
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
                      <div className="text-xs text-white font-semibold">
                        ({coin.symbol})
                      </div>
                    </div>
                  </div>

                  <div className="mt-0.5 font-medium text-[13px]">
                    <div className="text-[#83efaa]">
                      <span>market cap:</span> <span>{coin.mcap}</span>
                    </div>
                    <div className="text-white/70 font-thin">
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
