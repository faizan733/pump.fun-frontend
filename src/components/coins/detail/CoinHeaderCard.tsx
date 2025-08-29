"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Pill from "./Pill";
import { Star, Copy } from "lucide-react";

export type CoinHeader = {
  name: string;
  symbol: string;
  logoUrl: string; // e.g. "/coins/coin1.jpg" or remote URL
  creator: string;
  launchedAt: number; // ms since epoch
};

export default function CoinHeaderCard({ coin }: { coin: CoinHeader }) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative h-14 w-14 overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image
              src={coin.logoUrl}
              alt={coin.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          {/* Title + meta */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">{coin.name}</h1>
              <Pill className="bg-emerald-600/20 text-emerald-300">
                {coin.symbol}
              </Pill>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <Pill>{coin.creator}</Pill>
              <Pill>
                {Math.round((Date.now() - coin.launchedAt) / 3600000)}h ago
              </Pill>
              <Pill>0.0% bonded</Pill>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border border-neutral-800 p-2 hover:bg-neutral-800"
            onClick={() => navigator.clipboard.writeText(coin.symbol)}
            aria-label="Copy symbol"
            type="button"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            className="rounded-lg border border-neutral-800 p-2 hover:bg-neutral-800"
            aria-label="Favorite"
            type="button"
          >
            <Star className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
