// app/board/page.tsx
import CoinSearch from "@/components/coins/CoinSearch";
import TrendingRow from "@/components/coins/TrendingRow";
import SortBar from "@/components/coins/SortBar";
import CoinCard from "@/components/coins/CoinCard";

const coinImages = [
  "/coins/coin1.jpg",
  "/coins/coin2.jpg",
  "/coins/coin3.jpg",
  "/coins/coin4.jpg",
];

const coins = Array.from({ length: 13 }, (_, i) => ({
  id: `coin-${i}`,
  name: `Coin ${i + 1}`,
  symbol: `C${i + 1}`,
  image: coinImages[i % coinImages.length], // 👈 cycle 1..4
  marketCap: `$${(400 + i * 12).toFixed(0)}k`,
  replies: 12 + i,
  changePct: i % 3 === 0 ? -2.4 : 3.1,
  age: `${i + 1}h`,
}));

export default function PumpBoardPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-6 space-y-8">
      <div className="top-20 z-40">
        <CoinSearch />
      </div>

      <section className="space-y-4">
        <TrendingRow />
      </section>

      <section aria-label="Sort and filters">
        <SortBar />
      </section>

      <section className="space-y-5">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </section>
    </div>
  );
}
