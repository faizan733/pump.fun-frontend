import TokenCard from "./TokenCard";
import { GripVertical, Pause, Settings2 } from "lucide-react";

interface CategoryColumnProps {
  title: string;
}

export default function CategoryColumn({ title }: CategoryColumnProps) {
  const tokens = [
    {
      logo: "/coins/coin1.jpg",
      name: "NSA NEVER SELL AS...",
      volume: "$705",
      marketCap: "$5.7k",
      tx: "12",
      price: "$705",
      change: "+0.01",
    },
    {
      logo: "/coins/coin2.jpg",
      name: "NSA NEVER SELL AS...",
      volume: "$1.2k",
      marketCap: "$12.4k",
      tx: "18",
      price: "$900",
      change: "+0.05",
    },
    {
      logo: "/coins/coin3.jpg",
      name: "NSA NEVER SELL AS...",
      volume: "$800",
      marketCap: "$7.8k",
      tx: "9",
      price: "$450",
      change: "-0.02",
    },
    {
      logo: "/coins/coin4.jpg",
      name: "NSA NEVER SELL AS...",
      volume: "$460",
      marketCap: "$18.8k",
      tx: "7",
      price: "$450",
      change: "-0.03",
    },
    {
      logo: "/coins/coin1.jpg",
      name: "NSA NEVER SELL AS...",
      volume: "$705",
      marketCap: "$5.7k",
      tx: "12",
      price: "$705",
      change: "+0.01",
    },
  ];

  return (
    <section className="border border-white/30 rounded-2xl px-4 pb-5 pt-2 flex flex-col">
      {/* Header */}
      <div className="-mx-4 mb-4 border-b border-white/30 px-4 pb-2">
        <div className="flex justify-between items-center">
          {/* Left: Drag icon + Title */}
          <div className="flex items-center gap-2">
            <GripVertical className="w-5 h-5 text-green-400" />
            <h2 className="text-green-400 font-normal text-lg">{title}</h2>
          </div>

          {/* Right: Pause + Settings2 */}
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-green-900/40">
              <Pause className="w-5 h-5 text-gray-300" />
            </button>
            <button className="p-2 rounded-lg hover:bg-green-900/40">
              <Settings2 className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Token List → no inner scroll, whole page scrolls */}
      <div className="space-y-4">
        {tokens.map((token, i) => (
          <TokenCard key={i} {...token} />
        ))}
      </div>
    </section>
  );
}
