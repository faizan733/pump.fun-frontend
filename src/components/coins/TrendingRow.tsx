// components/coins/TrendingRow.tsx
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { coins } from "@/lib/coins"; // 👈 shared data

const items = Array.from({ length: 6 });

export default function TrendingRow() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const dx = dir === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Now Trending</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="h-8 w-8 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="h-8 w-8 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="overflow-x-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        <div className="min-w-max flex gap-6">
          {items.map((_, i) => {
            const coin = coins[i % coins.length]; // cycle 1..4
            return (
              <Link
                key={i}
                href={`/coins/${coin.id}`}
                className="shrink-0 group inline-flex items-start gap-5 rounded-lg border border-black bg-[#1c1c1e] p-3 transition-colors hover:border-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center mr-1.5">
                  <div className="text-[15px] font-semibold leading-5">
                    {coin.name}
                  </div>
                  <div className="mt-1">
                    <span className="inline-flex items-center rounded-sm bg-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      {coin.symbol}
                    </span>
                  </div>
                  <div className="mt-1.5 text-[13px] text-white/70">
                    <span className="opacity-80">Market Cap :</span>{" "}
                    <span className="font-medium text-emerald-400">
                      {coin.mcap}
                    </span>
                  </div>
                  <div className="text-[13px] text-white/80">
                    <span className="opacity-80">Replies :</span>{" "}
                    <span className="font-semibold">{coin.replies}</span>
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
