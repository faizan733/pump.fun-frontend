// lib/coins.ts
export type CoinLite = {
  id: string;
  name: string;
  symbol: string;
  image: string; // path in /public/coins or remote URL
  mcap: string;
  replies: number;
};

export const coins: CoinLite[] = [
  {
    id: "coin1",
    name: "Pill Money Podz",
    symbol: "PMP",
    image: "/coins/coin1.jpg",
    mcap: "$475.7k",
    replies: 98,
  },
  {
    id: "coin2",
    name: "Pill Money Podz",
    symbol: "PMP",
    image: "/coins/coin2.jpg",
    mcap: "$1.2M",
    replies: 67,
  },
  {
    id: "coin3",
    name: "Pill Money Podz",
    symbol: "PMP",
    image: "/coins/coin3.jpg",
    mcap: "$890k",
    replies: 120,
  },
  {
    id: "coin4",
    name: "Pill Money Podz",
    symbol: "PMP",
    image: "/coins/coin4.jpg",
    mcap: "$2.1M",
    replies: 45,
  },
];

export function getCoinById(id: string) {
  return coins.find((c) => c.id === id) || null;
}
