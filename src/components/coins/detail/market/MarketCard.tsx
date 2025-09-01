import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatDelta from "../StatDelta";
import ProgressBar from "../ProgressBar";
import ChartControls from "./ChartControls";
import MarketChart from "./MarketChart";

interface CoinData {
  marketCap: number;
  ath: number;
  marketCapDelta: number;
  marketCapDeltaPct: number;
}

export default function MarketCard({ coin }: { coin: CoinData }) {
  const athPct = (coin.marketCap / coin.ath) * 100;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Market Cap</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <StatDelta
            valueUSD={coin.marketCap}
            deltaUSD={coin.marketCapDelta}
            deltaPct={coin.marketCapDeltaPct}
          />
          <div className="min-w-[220px]">
            <ProgressBar value={athPct} />
            <div className="mt-1 text-right text-xs text-neutral-400">
              ATH ${coin.ath.toLocaleString()}
            </div>
          </div>
        </div>

        <ChartControls />
        <div className="text-xs text-neutral-500">
          TARIFF/SOL Market Cap (USD) • Volume 2.14
        </div>

        <MarketChart />
      </CardContent>
    </Card>
  );
}
