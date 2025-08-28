"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Clock, MessageCircle, User2 } from "lucide-react";

// Static coin card component (no props, no external data)
// Drop in: src/components/coins/CoinCard.tsx
// Uses Tailwind + lucide-react + Next/Image

export default function CoinCard() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-sm hover:border-neutral-700">
      {/* Media */}
      <div className="relative h-40 w-full">
        <Image
          src="/coins/misa.jpg" // put a file at public/coins/misa.jpg (or change path)
          alt="Misa Amane Grok Companion"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur">
          MISA
        </div>
      </div>

      {/* Body */}
      <div className="space-y-3 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 text-sm font-semibold text-white">
              Misa Amane Grok Companion
            </h3>
            <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
              <User2 className="h-3.5 w-3.5" />
              <span>@CxcsD</span>
              <span className="opacity-60">•</span>
              <Clock className="h-3.5 w-3.5" />
              <span>2h ago</span>
            </div>
          </div>
          {/* change pill */}
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2 py-0.5 text-xs text-rose-400">
            <ArrowDownRight className="h-3.5 w-3.5" />
            8.09%
          </span>
        </div>

        <p className="line-clamp-2 text-xs text-neutral-300/90">
          Anime companion coin for the Grok enjoyers.
        </p>

        {/* MC + progress */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-400">MC</div>
          <div className="text-sm font-semibold text-rose-400">$7.6K</div>
        </div>
        {/* Progress bar */}
        <div className="h-2 w-full rounded-full bg-neutral-800/70">
          <div className="h-2 w-2/3 rounded-full bg-green-500" />
        </div>

        {/* Sparkline (static SVG) + action */}
        <div className="mt-1 flex items-end justify-between gap-2">
          <div className="flex-1">
            <div className="h-14 w-full">
              <svg viewBox="0 0 100 40" className="h-full w-full">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  points="0,30 10,26 20,28 30,24 40,27 50,25 60,22 70,24 80,27 90,29 100,26"
                  className="text-neutral-300"
                />
              </svg>
            </div>
          </div>
          <Link
            href="#/coin/1"
            className="inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800"
          >
            <MessageCircle className="h-4 w-4" />
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
