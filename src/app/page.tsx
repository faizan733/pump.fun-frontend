import CoinSearch from "@/components/coins/CoinSearch";
import TrendingRow from "@/components/coins/TrendingRow";
import SortBar from "@/components/coins/SortBar";
import CoinCard from "@/components/coins/CoinCard";

const coins = [
  {
    id: "misa-amane-grok-companion",
    name: "Misa Amane Grok Companion",
    symbol: "MISA",
    image: "/coins/misa.jpg",
    marketCap: "$7.6K",
    replies: 98,
    changePct: -8.09,
    age: "2h ago",
  },
  // add more mock items with unique `id`
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 space-y-10">
      <section aria-label="Search coins">
        <CoinSearch />
      </section>

      <section aria-labelledby="trending-heading" className="space-y-4">
        <h2 id="trending-heading" className="sr-only">
          Now Trending
        </h2>
        <TrendingRow />
      </section>

      <section aria-label="Sort and filters">
        <SortBar />
      </section>

      <section aria-labelledby="all-coins-heading" className="space-y-4">
        <h2 id="all-coins-heading" className="text-lg font-semibold">
          All Coins
        </h2>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {coins.map((coin) => (
            <div role="listitem" key={coin.id}>
              <CoinCard coin={coin} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
