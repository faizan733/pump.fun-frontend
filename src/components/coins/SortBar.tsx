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
        className={`block h-4 w-4 rounded-full bg-white transition ${
          checked ? "translate-x-4" : ""
        }`}
      />
    </button>
  );
}

const TAGS = [
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
  "🔥🔥 YZY Hpye 🐒",
];

export default function SortBar() {
  const [anim, setAnim] = useState(true);
  const [nsfw, setNsfw] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-3">
        {/* Sort pill */}
        <button className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow cursor-pointer">
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

        {/* Tags area to the right */}
        <div className="ml-auto flex flex-wrap items-center gap-3">
          {TAGS.map((t, i) => (
            <button
              key={i}
              className="rounded-xl bg-white/10 border cursor-pointer border-white/15 px-2 py-2 text-sm text-white hover:bg-white/15 shadow-sm"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
