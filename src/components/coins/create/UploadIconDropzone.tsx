"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, UploadCloud, Lock } from "lucide-react";
import clsx from "clsx";
import { RefObject } from "react";

type Props = {
  loggedIn: boolean;
  iconUrl: string | null | undefined;
  inputRef: RefObject<HTMLInputElement>;
  onPick: () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadIconDropzone({
  loggedIn,
  iconUrl,
  inputRef,
  onPick,
  onDrop,
  onSelect,
}: Props) {
  return (
    <Card className="bg-[#101417]/80 border-dashed border-white/10">
      <CardContent className="p-0">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className={clsx(
            "relative m-4 flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-white/15",
            loggedIn ? "bg-black/20" : "bg-black/10"
          )}
        >
          {iconUrl ? (
            <div className="relative h-44 w-44 overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src={iconUrl}
                alt="Coin icon preview"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-white/70">
              <ImageIcon className="h-10 w-10" />
              <p className="text-sm">Select video or image to upload</p>
              <Button
                type="button"
                variant="secondary"
                disabled={!loggedIn}
                onClick={onPick}
                className="gap-2"
              >
                {loggedIn ? (
                  <UploadCloud className="h-4 w-4" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
                {loggedIn ? "Upload" : "Login In"}
              </Button>
              {!loggedIn && (
                <p className="text-xs text-white/50">
                  You must be logged in to upload.
                </p>
              )}
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={onSelect}
          />
        </div>
      </CardContent>
    </Card>
  );
}
