"use client";
import { Search } from "lucide-react";

export default function CoinSearch() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/90" />
      <input
        placeholder="Search..."
        className="w-full rounded-full bg-[#1c1f24] px-12 py-4 text-sm 
                   text-white placeholder:text-white/50 
                   outline-none border-b border-white focus:border-emerald-500"
      />
    </div>
  );
}
