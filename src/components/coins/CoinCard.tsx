"use client";

import Image from "next/image";
import Link from "next/link";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  creator?: string;
  creatorIcon?: string;
  marketCap: string;
  changePct: number;
  age?: string;
  description?: string;
};

function formatAge(age?: string) {
  if (!age) return "–";

  const a = age.trim().toLowerCase();

  const match = a.match(
    /^(\d+)\s*(m|min|mins|h|hr|hrs|d|day|days|w|wk|wks|mo|mos|month|months|y|yr|yrs|year|years)$/
  );
  if (match) {
    const n = Number(match[1]);
    const unit = match[2];

    if (["m", "min", "mins"].includes(unit)) {
      return `${n} min ago`;
    }
    if (["h", "hr", "hrs"].includes(unit)) {
      return `${n} hr${n > 1 ? "s" : ""} ago`;
    }
    if (["d", "day", "days"].includes(unit)) {
      return `${n} day${n > 1 ? "s" : ""} ago`;
    }
    if (["w", "wk", "wks"].includes(unit)) {
      return `${n} wk${n > 1 ? "s" : ""} ago`;
    }
    if (["mo", "mos", "month", "months"].includes(unit)) {
      return `${n} mo${n > 1 ? "s" : ""} ago`;
    }
    if (["y", "yr", "yrs", "year", "years"].includes(unit)) {
      return `${n} yr${n > 1 ? "s" : ""} ago`;
    }
  }

  const last = a.slice(-1);
  const num = Number(a.slice(0, -1));
  if (!Number.isNaN(num)) {
    if (last === "m") return `${num} min ago`;
    if (last === "h") return `${num} hr${num > 1 ? "s" : ""} ago`;
    if (last === "d") return `${num} day${num > 1 ? "s" : ""} ago`;
    if (last === "w") return `${num} wk${num > 1 ? "s" : ""} ago`;
    if (last === "y") return `${num} yr${num > 1 ? "s" : ""} ago`;
  }

  return a.includes("ago") ? a : `${a} ago`;
}

export default function CoinCard({ coin }: { coin: Coin }) {
  const up = coin.changePct >= 0;
  const pct = Math.abs(coin.changePct).toFixed(2);
  const progPct = Math.max(6, Math.min(100, Math.abs(coin.changePct)));

  return (
    <Link
      href={`/coins/${coin.id}`}
      className="block"
      aria-label={`${coin.name} — MC ${coin.marketCap}`}
    >
      <article className="flex items-start gap-4 rounded-lg p-2">
        <div
          className="relative flex-shrink-0 rounded-lg overflow-hidden"
          style={{ width: 160, height: 160 }}
        >
          <Image
            src={coin.image}
            alt={coin.name}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div className="flex flex-col gap-1">
            <div className="text-base font-semibold text-white leading-tight line-clamp-1">
              {coin.name}
            </div>
            <div className="text-xs font-medium text-white/70 leading-tight">
              {coin.symbol}
            </div>

            <div className="flex items-center gap-2 text-xs text-white/60">
              <div className="relative h-6 w-6 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                <Image
                  src={coin.creatorIcon ?? coin.image}
                  alt={coin.creator ?? "creator"}
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </div>
              <span className="text-xs text-white/80 font-medium truncate">
                {coin.creator ?? "unknown"}
              </span>

              <div className="flex items-center gap-1 text-xs text-white/60">
                <span>{formatAge(coin.age)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center font-bold gap-1 mt-1.5">
            <div className="text-xs text-white/60">MC</div>
            <div className="text-xs">{coin.marketCap}</div>

            <div className="flex-1 min-w-0">
              <div className="h-2 w-full rounded-full bg-neutral-800/60 overflow-hidden ml-1.5">
                <div
                  className={`h-2 rounded-full ${
                    up ? "bg-emerald-400" : "bg-rose-400"
                  }`}
                  style={{ width: `${progPct}%` }}
                />
              </div>
            </div>

            <div
              className={`ml-3 text-xs font-bold ${
                up ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {up ? "↑" : "↓"} {pct}%
            </div>
          </div>

          <div className="text-xs text-neutral-300 line-clamp-2 mt-1">
            {coin.description ?? "No description available for this token."}
          </div>
        </div>
      </article>
    </Link>
  );
}
