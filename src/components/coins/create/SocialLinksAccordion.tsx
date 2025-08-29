"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2, Globe, Twitter } from "lucide-react";
import { SocialLinks } from "./types";

type Props = {
  value: SocialLinks;
  onChange: (v: SocialLinks) => void;
};

export default function SocialLinksAccordion({ value, onChange }: Props) {
  return (
    <Card className="bg-[#101417]/80 border-white/10">
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="socials">
            <AccordionTrigger className="text-left">
              <div className="inline-flex items-center gap-2">
                <Link2 className="h-4 w-4" />
                Add Social Links (Optional)
              </div>
            </AccordionTrigger>
            <AccordionContent className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Website
                </Label>
                <Input
                  placeholder="https://example.com"
                  value={value.website ?? ""}
                  onChange={(e) =>
                    onChange({ ...value, website: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label className="inline-flex items-center gap-2">
                  <Twitter className="h-4 w-4" /> Twitter/X
                </Label>
                <Input
                  placeholder="https://x.com/your-handle"
                  value={value.twitter ?? ""}
                  onChange={(e) =>
                    onChange({ ...value, twitter: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <Label>Telegram</Label>
                <Input
                  placeholder="https://t.me/your-channel"
                  value={value.telegram ?? ""}
                  onChange={(e) =>
                    onChange({ ...value, telegram: e.target.value })
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
