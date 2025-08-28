"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Now Trending</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/15"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/15"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={ref}
        className="overflow-x-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        <div className="min-w-max flex gap-6">
          {items.map((_, i) => (
            <div key={i} className="shrink-0">
              {/* Card */}
              <div className="group inline-flex items-start gap-3 rounded-2xl border border-black bg-[#1c1c1e] p-3 transition-colors hover:border-black">
                {/* Image */}
                <div className="h-24 w-24 shrink-0 rounded-lg bg-white/10 ring-1 ring-white/10" />

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <div className="text-[15px] font-semibold leading-5">
                    Pill Money Podz
                  </div>

                  <div className="mt-1">
                    <span className="inline-flex items-center rounded-sm bg-emerald-200 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
                      PMP
                    </span>
                  </div>

                  <div className="mt-1.5 text-[13px] text-white/65">
                    <span className="opacity-80">Market Cap :</span>{" "}
                    <span className="font-semibold text-emerald-400">
                      $475.7k
                    </span>
                  </div>

                  <div className="text-[13px] text-white/65">
                    <span className="opacity-80">Replies :</span>{" "}
                    <span className="font-semibold text-white">98</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
