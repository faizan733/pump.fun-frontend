"use client";

import { useState } from "react";
import { Coins, LogIn, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
  const [dark, setDark] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur">
      <div className="w-full h-16 md:h-16 flex items-center gap-3 md:gap-4">
        {/* ticker badges (desktop only, unchanged) */}
        <div className="hidden ml-5 lg:flex items-center gap-2 flex-1">
          {[
            "bSSQd2 sold 0.67899 SOL ofPLTFRM | Mcap:$7878978h",
            "4EBUdr created Stream",
          ].map((t, i) => (
            <span
              key={i}
              className={`rounded-sm text-black text-sm px-2.5 py-1.5 ${
                i === 0 ? "bg-yellow-200" : "bg-sky-400"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          {/* Mobile: compact icon buttons (except Login) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Create (icon only on mobile) */}
            <Link
              href="/create"
              aria-label="Create Coins"
              className="h-9 w-9 inline-grid place-items-center rounded-full border border-emerald-500 bg-white text-slate-900 shadow-[0_0_0_2px_rgba(16,185,129,0.4)]"
            >
              <Coins className="h-4 w-4" />
            </Link>

            {/* Login (keep name on mobile) */}
            <button
              className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm
                         text-white border border-white/15
                         bg-gradient-to-r from-emerald-900/60 to-emerald-700/40"
            >
              <span>Login</span>
              <LogIn className="h-4 w-4" />
            </button>
          </div>

          {/* Desktop: original pills (unchanged) */}
          <div className="hidden md:flex items-center gap-3 mr-4">
            {/* Create Coins */}
            <Link
              href="/create"
              className="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium
                          bg-[#83efaa] hover:bg-[#78D99C] text-black"
            >
              <span>Create coin</span>
            </Link>

            {/* Login */}
            <button
              className="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium
                          bg-[#83efaa] hover:bg-[#78D99C] text-black"
            >
              <span>Log in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
