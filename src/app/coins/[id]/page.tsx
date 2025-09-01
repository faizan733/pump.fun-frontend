// app/coins/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import BackLink from "@/components/coins/detail/BackLink";
import CoinHeaderCard from "@/components/coins/detail/CoinHeaderCard";
import MarketCard from "@/components/coins/detail/market/MarketCard";
import TradePanel from "@/components/coins/detail/trade/TradePanel";
import PositionCard from "@/components/coins/detail/PositionCard";
import ChatCard from "@/components/coins/detail/ChatCard";
import BondingCurveCard from "@/components/coins/detail/BondingCurveCard";
import { getCoinById } from "@/lib/coins";

export default function CoinDetailPage() {
  const { id } = useParams<{ id: string }>();
  const base = getCoinById(String(id)); // 👈 grab shared coin (has image)

  // Fallback if not found (avoid crash)
  const coin = base ?? {
    id: String(id),
    name: "Unknown Coin",
    symbol: "UNK",
    image: "/coins/coin1.jpg",
    mcap: "$0",
    replies: 0,
  };

  // Compose the object expected by your detail components
  const coinDetail = {
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    logoUrl: coin.image, // 👈 pass the same image
    creator: "9HFZ5B…7K2X",
    launchedAt: Date.now() - 18 * 60 * 60 * 1000,
    bondedPct: 0,
    marketCap: 5300,
    marketCapDelta: -501,
    marketCapDeltaPct: -8.69,
    ath: 5800,
  };

  return (
    <div className="px-4 py-6">
      <BackLink className="mb-4" />
      <CoinHeaderCard coin={coinDetail} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <MarketCard coin={coinDetail} />
        <div className="space-y-6">
          <TradePanel />
          <PositionCard />
          <ChatCard />
          <BondingCurveCard raisedUSD={0} targetUSD={0} progress={0} />
        </div>
      </div>
    </div>
  );
}
