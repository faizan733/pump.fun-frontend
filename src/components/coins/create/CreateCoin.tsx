// src/components/coins/create/CreateCoin.tsx
"use client";

import { useMemo, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FormState } from "./types";
import FormCard from "./FormCard";
import SocialLinksAccordion from "./SocialLinksAccordion";
import UploadIconDropzone from "./UploadIconDropzone";
import PreviewCard from "./PreviewCard";
import FileRulesCard from "./FileRulesCard";
import ResolutionCard from "./ResolutionCard";

const LOGGED_IN = false; // TODO: wire to your auth

export default function CreateCoin() {
  const [form, setForm] = useState<FormState>({
    name: "",
    ticker: "",
    description: "",
    socials: {},
    iconFile: null,
    iconUrl: null,
    bannerFile: null,
    bannerUrl: null,
  });

  const iconInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const canSubmit = useMemo(
    () =>
      form.name.trim().length > 0 && form.ticker.trim().length > 0 && LOGGED_IN,
    [form.name, form.ticker]
  );

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleFile = useCallback((file: File, kind: "icon" | "banner") => {
    const url = URL.createObjectURL(file);
    if (kind === "icon") {
      setForm((f) => ({ ...f, iconFile: file, iconUrl: url }));
    } else {
      setForm((f) => ({ ...f, bannerFile: file, bannerUrl: url }));
    }
  }, []);

  const onSelectFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: "icon" | "banner"
  ) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file, kind);
  };

  const onDrop = (
    e: React.DragEvent<HTMLDivElement>,
    kind: "icon" | "banner"
  ) => {
    e.preventDefault();
    if (!LOGGED_IN) return;
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file, kind);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: send FormData(form) to your API
    alert("Demo submit — wire to API.");
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-screen-2xl px-4 pb-10">
      <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        {/* LEFT */}
        <div className="space-y-5">
          <FormCard
            name={form.name}
            ticker={form.ticker}
            description={form.description}
            onChange={(p) => setForm((f) => ({ ...f, ...p }))}
          />

          <SocialLinksAccordion
            value={form.socials}
            onChange={(socials) => setField("socials", socials)}
          />

          <UploadIconDropzone
            loggedIn={LOGGED_IN}
            iconUrl={form.iconUrl}
            inputRef={iconInputRef}
            onPick={() => iconInputRef.current?.click()}
            onDrop={(e) => onDrop(e, "icon")}
            onSelect={(e) => onSelectFile(e, "icon")}
          />

          <div className="rounded-lg border border-white/10 bg-[#101417]/60 p-3 text-xs text-white/60">
            Coin data (social links, banner, etc.) can only be added now, and
            can’t be changed after creation.
          </div>

          <Button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-3"
          >
            {LOGGED_IN ? "Create coin" : "Login in to create coin"}
          </Button>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          <PreviewCard form={form} />

          <FileRulesCard />

          <ResolutionCard
            loggedIn={LOGGED_IN}
            bannerUrl={form.bannerUrl}
            inputRef={bannerInputRef}
            onPick={() => bannerInputRef.current?.click()}
            onDrop={(e) => onDrop(e, "banner")}
            onSelect={(e) => onSelectFile(e, "banner")}
          />
        </div>
      </div>
    </form>
  );
}
