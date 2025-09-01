"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ImageIcon, Info, UploadCloud, Lock } from "lucide-react";
import { RefObject } from "react";
import clsx from "clsx";

type Props = {
  loggedIn: boolean;
  bannerUrl?: string | null;
  inputRef: RefObject<HTMLInputElement | null>;
  onPick: () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ResolutionCard({
  loggedIn,
  bannerUrl,
  inputRef,
  onPick,
  onDrop,
  onSelect,
}: Props) {
  return (
    <Card className="bg-[#1C1C1E] border-gray-300">
      <CardHeader className="flex-row items-center gap-2">
        <Info className="h-4 w-4 text-white/70" />
        <CardTitle className="text-white/90">
          Resolution and aspect ratio
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/70 space-y-3">
        <p>
          <strong>Icon:</strong> min <b>1000×1000</b> px, <b>1:1</b> square
          recommended.
        </p>
        <p>
          <strong>Video:</strong> <b>16:9</b> at <b>1080p+</b> recommended.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="banner">
            <AccordionTrigger>Add Banner (Optional)</AccordionTrigger>
            <AccordionContent>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                className={clsx(
                  "mt-2 flex min-h-[140px] items-center justify-center rounded-xl border border-dashed border-white/15",
                  loggedIn ? "bg-black/20" : "bg-black/10"
                )}
              >
                {bannerUrl ? (
                  <div className="relative h-40 w-full overflow-hidden rounded-xl">
                    <Image
                      src={bannerUrl}
                      alt="Banner preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-white/70">
                    <ImageIcon className="h-6 w-6" />
                    <Button
                      type="button"
                      variant="ghost"
                      disabled={!loggedIn}
                      onClick={onPick}
                      className="gap-2"
                    >
                      {loggedIn ? (
                        <UploadCloud className="h-4 w-4" />
                      ) : (
                        <Lock className="h-4 w-4" />
                      )}
                      {loggedIn ? "Upload banner" : "Login In"}
                    </Button>
                  </div>
                )}
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onSelect}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
