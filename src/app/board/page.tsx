// app/board/page.tsx
import CoinSearch from "@/components/coins/CoinSearch";
import TrendingRow from "@/components/coins/TrendingRow";
import SortBar from "@/components/coins/SortBar";
import CoinCard from "@/components/coins/CoinCard";

const coins = Array.from({ length: 9 });

export default function PumpBoardPage() {
  return (
    // Only bottom padding for spacing, no extra top padding
    <div className="mx-auto max-w-[1200px] px-4 pb-6 space-y-8">
      {/* Search directly under TopBar */}
      <div className="sticky top-20 z-40 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
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
          {coins.map((_, i) => (
            <CoinCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
