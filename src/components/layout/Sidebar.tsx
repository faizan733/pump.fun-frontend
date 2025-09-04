"use client";

import {
  ChevronLeft,
  Home,
  Layers,
  Video,
  MessageCircle,
  CircleUser,
  Headset,
  EllipsisVertical,
  Plus,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Livestreams", href: "/livestreams", icon: Video },
  { label: "Advanced", href: "/advanced", icon: Layers },
  { label: "Chat", href: "/chats", icon: MessageCircle, badge: "NEW" },
  { label: "Profile", href: "/profile", icon: CircleUser },
  { label: "Support", href: "/support", icon: Headset },
  { label: "More", href: "/more", icon: EllipsisVertical },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [showQr, setShowQr] = useState(true);

  const width = open ? 220 : 80;

  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-w", `${width}px`);
  }, [width]);

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen transition-[width] duration-300 ease-in-out z-40"
      style={{ width }}
    >
      <div className="flex flex-col h-full w-full bg-[#0c1116] border-r border-white/10">
        {/* Header */}
        <div className="flex items-center h-14 px-3">
          {open && (
            <div className="flex items-center gap-2">
              <Image
                src="/logos/ordi-logo.svg"
                alt="Logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-white font-semibold text-base">
                Pump.fun
              </span>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-auto h-8 w-8 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronLeft
              className={`h-4 w-4 text-white transition-transform ${
                !open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Nav */}
        <ul
          className={
            open
              ? "space-y-1 mt-5 px-2" // ⬅️ more top margin + bigger gaps
              : "flex flex-col items-center gap-4 mt-5"
          }
        >
          {NAV.map(({ label, href, icon: Icon, badge }) => {
            const active =
              href === "/" ? pathname === "/" : pathname?.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "flex items-center gap-3 rounded-lg",
                    open
                      ? "px-3 py-2.5"
                      : "flex-col items-center gap-1 py-2 w-16",
                    active
                      ? "bg-emerald-500 text-black font-semibold"
                      : "hover:bg-white/5 text-white/85",
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6" /> {/* ⬅️ bigger icons */}
                  {open && (
                    <span className="flex items-center gap-2 text-sm">
                      {label}
                      {badge && (
                        <span className="rounded-md bg-emerald-600/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                          {badge}
                        </span>
                      )}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}

          {/* Create coin */}
          <li>
            {(() => {
              const active = pathname?.startsWith("/create");
              return (
                <Link
                  href="/create"
                  title="Create coin"
                  className={[
                    "flex items-center gap-3 rounded-lg bg-emerald-400 text-black ",
                    open
                      ? "px-3 py-2.5 justify-center"
                      : "flex flex-col items-center gap-1 py-2 w-16",
                    active
                      ? "bg-emerald-500 text-black font-semibold"
                      : "hover:bg-white/5 ",
                  ].join(" ")}
                >
                  {open ? (
                    <span className="font-medium text-sm text-center w-full">
                      Create coin
                    </span>
                  ) : (
                    <Plus className="h-6 w-6" /> // ⬅️ bigger icon here too
                  )}
                </Link>
              );
            })()}
          </li>
        </ul>

        {/* Smaller QR card at bottom */}
        {showQr && (
          <div className="mt-auto mb-3 px-2">
            <div className="relative rounded-lg border border-emerald-500 bg-white/[0.02] p-2 py-5">
              {open ? (
                <>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setShowQr(false)}
                    className="absolute right-2 inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10"
                  >
                    <X className="h-3 w-3 text-white/80" />
                  </button>
                  <p className="text-center text-sm font-semibold text-white">
                    Pump app
                  </p>
                  <div className="mt-2 rounded-md border-white/15 p-2">
                    <Image
                      src="/qr-placeholder.png"
                      alt="QR code"
                      width={100}
                      height={100}
                      className="mx-auto rounded"
                    />
                    <p className="mt-2 text-center text-xs text-white/60">
                      Scan to download
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-1 py-1">
                  <Image
                    src="/qr-placeholder.png"
                    alt="QR"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <span className="text-[10px] text-white/60">App</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
