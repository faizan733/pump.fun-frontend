"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`h-5 w-9 rounded-full p-0.5 transition ${
        checked ? "bg-emerald-500" : "bg-white/20"
      }`}
    >
      <span
        className={`block h-4 w-4 rounded-full bg-white transition-transform transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

const TAGS = [
  "BLYAT Brigade 💊",
  "🔥Card Duetlists🃏",
  "Cat Kingdom 😺",
  "Doggo Domination 🐕",
  "Money Madness 💸",
  "Meme Royals 👑",
  "🔥Pump Hype 🚀",
  "Streaming Universe 📺",
  "SKINtastic 🎨",
  "🔥Solona Invasion🟩",
];

export default function SortBar() {
  const [anim, setAnim] = useState(true);
  const [nsfw, setNsfw] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        {/* Sort pill */}
        <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#83efaa] px-4 py-2 text-sm  text-black shadow cursor-pointer">
          Sort: Feature 🔥
          <ChevronDown className="h-4 w-4" />
        </button>

        {/* Left stacked toggles */}
        <div className="flex flex-col gap-2 text-xs text-white/90">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap">Show Animations :</span>
            <span className="text-emerald-400">ON</span>
            <Toggle checked={anim} onChange={() => setAnim(!anim)} />
            <span className="text-white/60">OFF</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap">Include nsfw :</span>
            <span className="text-emerald-400">ON</span>
            <Toggle checked={nsfw} onChange={() => setNsfw(!nsfw)} />
            <span className="text-white/60">OFF</span>
          </div>
        </div>

        {/* Tags area: takes remaining space and scrolls horizontally */}
        <div className="ml-4 flex-1 min-w-0">
          <div
            className="flex gap-3 items-center overflow-x-auto no-scrollbar whitespace-nowrap px-1 py-0.5"
            role="list"
          >
            {TAGS.map((t, i) => (
              <button
                key={i}
                role="listitem"
                className="inline-block rounded-sm bg-[#1f2937] border border-[#1f2937] px-3 py-2 text-sm text-white hover:bg-[#374151] shadow-sm"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
