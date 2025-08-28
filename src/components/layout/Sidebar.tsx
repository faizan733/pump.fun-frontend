"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Layers,
  MessageSquare,
  User,
  LifeBuoy,
  MoreHorizontal,
  Plus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Advanced", href: "/advanced", icon: Layers },
  { label: "Chats", href: "/chats", icon: MessageSquare },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Support", href: "/support", icon: LifeBuoy },
  { label: "More", href: "/more", icon: MoreHorizontal },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Tune these to your design
  const TOPBAR_H = 80; // TopBar h-20 => 80px. If h-16, set 64.
  const OFFSET_TOP = TOPBAR_H + 16; // space below header
  const OFFSET_LEFT = 16; // gap from left edge
  const RAIL_W = 64; // compact pill width
  const PANEL_W = 280; // expanded overlay width

  // --- COMPACT PILL (auto height) ---
  return (
    <>
      <div
        className="hidden md:flex fixed z-40"
        style={{ top: OFFSET_TOP, left: OFFSET_LEFT, width: RAIL_W }}
        aria-label="Primary navigation"
      >
        <div className="w-full rounded-3xl bg-[#0c1116] border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-2 py-2">
          {/* Top toggle */}
          <div className="flex items-center justify-center mb-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Expand sidebar"
              className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4 text-white/80" />
            </button>
          </div>

          {/* Icons stack */}
          <nav className="flex flex-col items-center gap-3">
            {NAV.map(({ label, href, icon: Icon }) => {
              const active =
                href === "/" ? pathname === "/" : pathname?.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-1"
                  title={label}
                >
                  <div
                    className={[
                      "h-10 w-10 rounded-full border flex items-center justify-center",
                      active
                        ? "bg-emerald-500 text-black border-emerald-400"
                        : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] text-white/70">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-3 flex items-center justify-center">
            <button
              aria-label="Create Coin"
              className="h-10 w-10 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow"
              type="button"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* --- EXPANDED OVERLAY PANEL (auto height, overlays content) --- */}
      {open && (
        <div
          className="hidden md:block fixed z-50"
          style={{
            top: OFFSET_TOP,
            left: OFFSET_LEFT + RAIL_W + 12, // pill + gap
            width: PANEL_W,
          }}
        >
          <div className="rounded-3xl bg-[#0c1116] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Header row */}
            <div className="p-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Collapse sidebar"
                className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
              >
                <ChevronLeft className="h-4 w-4 text-white/80" />
              </button>
              <div className="h-8 rounded-md bg-white text-slate-900 font-semibold px-3 flex items-center">
                Logo
              </div>
            </div>

            {/* Nav list */}
            <nav className="px-3 pb-3 space-y-1">
              {NAV.map(({ label, href, icon: Icon }) => {
                const active =
                  href === "/" ? pathname === "/" : pathname?.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center gap-3 rounded-xl px-3 py-2",
                      active
                        ? "bg-emerald-500 text-black"
                        : "hover:bg-white/5 text-white/85",
                    ].join(" ")}
                  >
                    <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={active ? "font-semibold" : ""}>
                      {label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom CTA full-width */}
            <div className="px-3 pb-3">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-2 shadow"
              >
                <Plus className="h-4 w-4" />
                Create Coin
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
