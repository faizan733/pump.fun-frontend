// src/app/support/page.tsx
"use client";

import { useState } from "react";
import SupportPopup from "@/components/ui/SupportPopup";

export default function SupportPage() {
  const [open, setOpen] = useState(true); // default open for demo

  return (
    <main className="h-screen flex items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-emerald-500 text-black rounded-xl"
      >
        Open Support
      </button>

      <SupportPopup open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
