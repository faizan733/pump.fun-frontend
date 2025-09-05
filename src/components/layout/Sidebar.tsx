"use client";

import {
  Home,
  Layers,
  Video,
  MessageCircle,
  CircleUser,
  Headset,
  EllipsisVertical,
  Plus,
  X,
  PanelRightOpen,
  PanelRightClose,
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

  const width = open ? 215 : 80;

  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-w", `${width}px`);
  }, [width]);

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 h-screen transition-[width] duration-300 ease-in-out z-40"
      style={{ width }}
    >
      <div className="flex flex-col h-full w-full bg-[#15161b] border-r border-white/10">
        {/* Header */}
        <div className="flex items-center h-14 pt-5 px-3">
          {open && (
            <div className="flex items-center gap-2">
              <Image
                src="/logos/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-9 w-9"
              />
              <span className="text-white font-bold text-base">Pump.fun</span>
            </div>
          )}

          {/* Toggle - swapped icons, no border/container */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            className="ml-auto flex items-center justify-center text-white hover:text-[#87ef9b] transition-colors"
          >
            {open ? (
              <PanelRightOpen className="h-5 w-5" />
            ) : (
              <PanelRightClose className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Nav */}
        <ul
          className={
            open
              ? "space-y-1 mt-5 px-2"
              : "flex flex-col items-center gap-4 mt-5"
          }
        >
          {NAV.map(({ label, href, icon: Icon, badge }) => {
            const active =
              href === "/" ? pathname === "/" : pathname?.startsWith(href);
            const activeClass = active
              ? "text-[#87ef9b] font-semibold"
              : "text-white/85 hover:text-[#87ef9b]";

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "flex items-center gap-3.5 rounded-lg transition-colors",
                    open
                      ? "px-3 py-2.5"
                      : "flex-col items-center gap-1 py-2 w-16",
                    activeClass,
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6" />
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
                    "bg-[#86efac] flex items-center gap-3 rounded-lg transition-colors",
                    open
                      ? "px-3 py-2.5 justify-center"
                      : "flex flex-col items-center gap-1 py-2 w-16",
                  ].join(" ")}
                >
                  {open ? (
                    <span className="text-black font-medium text-sm text-center w-full">
                      Create coin
                    </span>
                  ) : (
                    <Plus className="h-6 w-6 text-black" />
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

                  <div className="mt-2 rounded-md p-2">
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

                    {/* Learn more button */}
                    <Link
                      href="/learn-more"
                      className="mt-3 block w-full text-center rounded-md bg-emerald-600 px-3 py-2 text-xs font-semibold text-black hover:bg-emerald-500"
                    >
                      Learn more
                    </Link>
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
