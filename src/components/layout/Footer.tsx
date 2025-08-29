// components/layout/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-4 border-t border-neutral-800 bg-gradient-to-t from-black/40 to-transparent px-6 py-6 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 sm:flex-row">
        {/* Left side */}
        <div className="text-xs sm:text-sm">@name.xyz 2025</div>

        {/* Right side links */}
        <nav className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms Of Service
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/fees" className="hover:text-white transition-colors">
            Fees
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/revenue" className="hover:text-white transition-colors">
            Revenue
          </Link>
          <span className="opacity-50">|</span>
          <Link
            href="/tech-updates"
            className="hover:text-white transition-colors"
          >
            Tech Updates
          </Link>
        </nav>
      </div>
    </footer>
  );
}
