"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Props = {
  name: string;
  ticker: string;
  description: string;
  onChange: (
    patch: Partial<{ name: string; ticker: string; description: string }>
  ) => void;
};

export default function FormCard({
  name,
  ticker,
  description,
  onChange,
}: Props) {
  return (
    <Card className="bg-[#1C1C1E] border-white/10">
      <CardHeader>
        <CardTitle className="text-white/90">Create new coin</CardTitle>
        <p className="text-sm text-white/60">Coin details</p>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Create Coins</Label>
          <Input
            id="name"
            placeholder="Name Your Coins"
            value={name}
            onChange={(e) => onChange({ name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ticker">Ticker</Label>
          <Input
            id="ticker"
            placeholder="Add a coin ticker (e.g. $DOGE)"
            value={ticker}
            onChange={(e) => onChange({ ticker: e.target.value })}
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="desc">Description (Optional)</Label>
          <Textarea
            id="desc"
            placeholder="Write a short description"
            rows={4}
            value={description}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
}
