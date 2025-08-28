// app/page.tsx
import CoinSearch from "@/components/coins/CoinSearch";
import TrendingRow from "@/components/coins/TrendingRow";
import SortBar from "@/components/coins/SortBar";
import CoinCard from "@/components/coins/CoinCard";

// Placeholder list for now (replace with real data later)
const coins = Array.from({ length: 9 });

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 space-y-10">
      {/* Search */}
      <section aria-label="Search coins">
        <CoinSearch />
      </section>

      {/* Now Trending */}
      <section aria-labelledby="trending-heading" className="space-y-4">
        <h2 id="trending-heading" className="sr-only">
          Now Trending
        </h2>
        <TrendingRow />
      </section>

      {/* Sort controls */}
      <section aria-label="Sort and filters">
        <SortBar />
      </section>

      {/* All coins grid */}
      <section aria-labelledby="all-coins-heading" className="space-y-4">
        <h2 id="all-coins-heading" className="text-lg font-semibold">
          All Coins
        </h2>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {coins.map((_, i) => (
            <div role="listitem" key={`coin-skel-${i}`}>
              <CoinCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
