// app/board/page.tsx
import CoinCard from "@/components/coins/CoinCard";
import CoinSearch from "@/components/coins/CoinSearch";
import SortBar from "@/components/coins/SortBar";
import TrendingRow from "@/components/coins/TrendingRow";

const coins = Array.from({ length: 13 }, (_, i) => ({
  id: `coin-${i}`,
  name: `Coin ${i + 1}`,
  symbol: `C${i + 1}`,
  image: "/placeholder.png", // put a placeholder image in /public
  marketCap: `$${(450 + i * 5).toFixed(0)}k`,
  replies: 0,
  changePct: i % 2 === 0 ? 3.2 : -2.1,
  age: `${i + 1}h`,
}));

export default function PumpBoardPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-6 space-y-8">
      <div className="sticky top-20 z-40 bg-[#15161b] backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <CoinSearch />
      </div>

      <section className="space-y-4">
        <TrendingRow />
      </section>

      <section aria-label="Sort and filters">
        <SortBar />
      </section>

      <section className="space-y-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </section>
    </div>
  );
}
