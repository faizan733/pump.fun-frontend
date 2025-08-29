"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import { FormState } from "./types";

export default function PreviewCard({ form }: { form: FormState }) {
  return (
    <Card className="bg-[#1C1C1E] border-white/10">
      <CardHeader>
        <CardTitle className="text-white/90">Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl ring-1 ring-white/10">
              {form.iconUrl ? (
                <Image
                  src={form.iconUrl}
                  alt="Preview icon"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-white/30">
                  <ImageIcon className="h-7 w-7" />
                </div>
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate font-semibold">
                  {form.name || "Your coin name"}
                </p>
                <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                  {(form.ticker || "TICK").toUpperCase()}
                </span>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-white/70">
                {form.description || "A preview how the coins will look like"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
