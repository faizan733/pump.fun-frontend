"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-[#131B29] text-white text-md font-medium rounded-lg px-4 py-3 mx-4 mt-2 flex items-center justify-center">
      <p className="truncate text-md">
        🚀 Pump is better on mobile: faster trades, chat, and more.
      </p>
      <button className="ml-4 bg-[#83efaa] hover:bg-[#78D99C] text-black px-2 py-1 rounded-sm text-sm font-semibold">
        Download now →
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-black"
        onClick={() => setVisible(false)}
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
