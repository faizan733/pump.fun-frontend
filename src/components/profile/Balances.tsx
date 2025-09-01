"use client";

import Image from "next/image";

const balances = [
  {
    name: "Coin One",
    symbol: "C1",
    amount: "1.4143",
    value: "$264",
    logo: "/coins/coin1.jpg",
  },
  {
    name: "Coin Two",
    symbol: "C2",
    amount: "2.00",
    value: "$520",
    logo: "/coins/coin2.jpg",
  },
  {
    name: "Coin Three",
    symbol: "C3",
    amount: "0.75",
    value: "$180",
    logo: "/coins/coin3.jpg",
  },
  {
    name: "Coin Four",
    symbol: "C4",
    amount: "10",
    value: "$940",
    logo: "/coins/coin4.jpg",
  },
];

export default function Balances() {
  return (
    <div className="rounded-2xl p-6 px-9">
      <div className="flex items-center text-2xl gap-10 justify-start border-b border-white/10 pb-3 mb-4">
        <h3 className="text-white font-semibold">Balances</h3>
        <h3 className="text-white font-semibold">Followers</h3>
      </div>

      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scroll">
        {balances.map((coin, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={coin.logo}
                  alt={coin.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white">{coin.name} balance</p>
                <p className="text-xs text-white/50">
                  {coin.amount} {coin.symbol}
                </p>
              </div>
            </div>
            <p className="text-white font-semibold">{coin.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
