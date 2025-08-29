// app/board/page.tsx
import CoinSearch from "@/components/coins/CoinSearch";
import TrendingRow from "@/components/coins/TrendingRow";
import SortBar from "@/components/coins/SortBar";
import CoinCard from "@/components/coins/CoinCard";

const coins = Array.from({ length: 13 }, (_, i) => ({
  id: `coin-${i}`,
  name: `Coin ${i + 1}`,
  symbol: `C${i + 1}`,
  image: "/placeholder.png", // add a file at /public/placeholder.png
  marketCap: `$${(400 + i * 12).toFixed(0)}k`,
  replies: 12 + i,
  changePct: i % 3 === 0 ? -2.4 : 3.1, // some up/down
  age: `${i + 1}h`,
}));

export default function PumpBoardPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-6 space-y-8">
      <div className=" top-20 z-40 ">
        <CoinSearch />
      </div>

      <section className="space-y-4">
        <TrendingRow />
      </section>

      <section aria-label="Sort and filters">
        <SortBar />
      </section>

      <h2 id="all-coins-heading" className="mb-6 text-lg font-semibold">
        All Coins
      </h2>
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
