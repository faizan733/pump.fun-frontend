"use client";

import { useParams } from "next/navigation";
import BackLink from "@/components/coins/detail/BackLink";
import CoinHeaderCard from "@/components/coins/detail/CoinHeaderCard";
import MarketCard from "@/components/coins/detail/market/MarketCard";
import TradePanel from "@/components/coins/detail/trade/TradePanel";
import PositionCard from "@/components/coins/detail/PositionCard";
import ChatCard from "@/components/coins/detail/ChatCard";
import BondingCurveCard from "@/components/coins/detail/BondingCurveCard";

export default function CoinDetailPage() {
  const { id } = useParams();

  // TEMP mock; replace with fetch by `id`
  const coin = {
    id: String(id),
    name: "Pill Money Podz",
    symbol: "PMP",
    logoUrl: "/coins/misa.jpg",
    creator: "9HFZ5B…7K2X",
    launchedAt: Date.now() - 18 * 60 * 60 * 1000, // 18h ago
    bondedPct: 0,
    marketCap: 5300,
    marketCapDelta: -501,
    marketCapDeltaPct: -8.69,
    ath: 5800,
  };

  return (
    <div className="px-4 py-6">
      <BackLink className="mb-4" />
      <CoinHeaderCard coin={coin} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <MarketCard coin={coin} />

        <div className="space-y-6">
          <TradePanel coin={coin} />
          <PositionCard />
          <ChatCard />
          <BondingCurveCard raisedUSD={0} targetUSD={0} progress={0} />
        </div>
      </div>
    </div>
  );
}
