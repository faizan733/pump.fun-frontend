"use client";

import { useState } from "react";
import { Coins, LogIn, Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  const [dark, setDark] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur">
      <div className="w-full h-16 md:h-20  px-4 md:px-5 flex items-center gap-3 md:gap-4">
        {/* Logo → Homepage */}
        <Link
          href="/"
          className="text-xl md:text-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/logos/ordi-logo.svg"
            alt="ORDI Logo"
            className="h-7 w-7 md:h-8 md:w-8"
          />
          <span className="text-white">ORDI</span>
        </Link>

        {/* ticker badges (desktop only, unchanged) */}
        <div className="hidden ml-6 lg:flex items-center gap-2 flex-1">
          {[
            "bSSQd2 sold 0.67899 SOL ofPLTFRM | Mcap:$7878978h",
            "bSSQd2 sold 0.67899 SOL ofPLTFRM | Mcap:$7878978h",
          ].map((t, i) => (
            <span
              key={i}
              className={`rounded-md text-black text-xs font-semibold px-3.5 py-2.5 ${
                i === 0 ? "bg-lime-400" : "bg-sky-400"
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
            {/* Dark toggle icon */}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="h-9 w-9 inline-grid place-items-center rounded-full border border-white/15 bg-white/5 text-white/90"
            >
              {dark ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

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
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode toggle pill */}
            <button
              onClick={() => setDark((d) => !d)}
              className="group flex items-center gap-3 rounded-full px-4 py-2 text-sm text-white
                         border border-white/15 bg-gradient-to-r from-emerald-900/60 to-emerald-700/40"
            >
              <span>Dark Mode</span>
              <span
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors
                            ${dark ? "bg-emerald-400" : "bg-slate-600"}`}
              >
                <span
                  className={`h-4 w-4 rounded-full bg-white transition-transform
                              ${dark ? "translate-x-4" : "translate-x-1"}`}
                />
              </span>
            </button>

            {/* Create Coins */}
            <Link
              href="/create"
              className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium
                         bg-white text-slate-900 border border-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.4)]"
            >
              <span>Create Coins</span>
              <Coins className="h-4 w-4" />
            </Link>

            {/* Login */}
            <button
              className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm
                         text-white border border-white/15
                         bg-gradient-to-r from-emerald-900/60 to-emerald-700/40"
            >
              <span>Login</span>
              <LogIn className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
