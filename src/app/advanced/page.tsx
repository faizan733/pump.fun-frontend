"use client";

import TopBar from "@/components/layout/TopBar";
import CoinSearch from "@/components/coins/CoinSearch";
import TickerStrip from "@/components/advanced/TickerStrip";
import CategoryColumn from "@/components/advanced/CategoryColumn";
import AdvancedPageFooter from "@/components/advanced/AdvancedPageFooter"; // ✅ updated

export default function AdvancedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Ticker Strip */}
      <TickerStrip />

      {/* Search */}
      <div className="container mx-auto px-4 py-4 flex justify-start">
        <div className="w-full max-w-md">
          <CoinSearch />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryColumn title="NEWLY CREATED" />
          <CategoryColumn title="ABOUT TO GRADUATE" />
          <CategoryColumn title="GRADUATED" />
        </div>
      </main>

      {/* Footer */}
      <AdvancedPageFooter />
    </div>
  );
}
