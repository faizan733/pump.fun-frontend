"use client";

import {
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  LifeBuoy,
  MessageSquare,
  MoreHorizontal,
  Plus,
  User,
} from "lucide-react";
import Image from "next/image"; // 👈 keep this at the top only
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Advanced", href: "/advanced", icon: Layers },
  { label: "Chats", href: "/chats", icon: MessageSquare },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Support", href: "/support", icon: LifeBuoy },
  { label: "More", href: "/more", icon: MoreHorizontal },
];

export default function Sidebar() {
  const pathname = usePathname();

  // layout knobs
  const TOPBAR_H = 80; // TopBar h-20
  const GAP_TOP = 8; // small gap under TopBar
  const LEFT_MARGIN = 16; // left margin
  const RAIL_W = 80; // collapsed width
  const PANEL_W = 320; // expanded width

  const [open, setOpen] = useState(false);
  const width = open ? PANEL_W : RAIL_W;

  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-w", `${width}px`);
  }, [width]);

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname?.startsWith(href),
    [pathname]
  );

  // keep consistent radius
  const panelRadius = "rounded-2xl";

  return (
    <aside
      className="hidden md:block sticky self-start mb-4 transition-[width] duration-300 ease-in-out"
      style={{
        top: TOPBAR_H + GAP_TOP,
        marginLeft: LEFT_MARGIN,
        width,
      }}
    >
      <div
        className={[
          "bg-[#0c1116] border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
          "px-3 py-3 overflow-hidden",
          "transition-[width] duration-300 ease-in-out",
          panelRadius,
        ].join(" ")}
      >
        {/* header / toggle */}
        <div
          className={`flex items-center mb-2 ${
            open ? "justify-between" : "justify-center"
          }`}
        >
          <div className={open ? "flex" : "hidden"}>
            <div className="h-9  px-3 flex items-center gap-2">
              <Image
                src="/logos/ordi-logo.svg"
                alt="Logo"
                width={20}
                height={20}
                className="h-7 w-7"
              />
              <span className="text-white font-semibold">ORDI</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            className="h-7 w-7 my-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
          >
            {open ? (
              <ChevronLeft className="h-4 w-4 text-white/80" />
            ) : (
              <ChevronRight className="h-4 w-4 text-white/80" />
            )}
          </button>
        </div>

        {/* nav */}
        <nav
          className={
            open ? "space-y-1 px-1" : "flex flex-col items-center gap-3"
          }
        >
          {NAV.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);

            return open ? (
              <Link
                key={href}
                href={href}
                className={[
                  "flex items-center gap-3 rounded-xl px-4 py-3",
                  active
                    ? "bg-emerald-500 text-black"
                    : "hover:bg-white/5 text-white/85",
                ].join(" ")}
              >
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <span className={active ? "font-semibold" : ""}>{label}</span>
              </Link>
            ) : (
              <Link
                key={href}
                href={href}
                title={label}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={[
                    "h-12 w-12 rounded-full border flex items-center justify-center",
                    active
                      ? "bg-emerald-500 text-black border-emerald-400"
                      : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-white/70">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* footer CTA */}
        <div className="pt-2 mx-2">
          {open ? (
            <Link
              href="/create"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 shadow"
            >
              <Plus className="h-5 w-5" />
              Create Coin
            </Link>
          ) : (
            <div className="flex items-center justify-center">
              <Link
                href="/create"
                aria-label="Create Coin"
                className="h-12 w-12 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow"
              >
                <Plus className="h-6 w-6" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
