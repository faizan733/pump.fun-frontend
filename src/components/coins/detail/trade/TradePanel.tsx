"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AmountInput from "./AmountInput";

export default function TradePanel({ coin }: { coin: any }) {
  const Chip = ({ children }: any) => (
    <button className="rounded-lg border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800">
      {children}
    </button>
  );
  const Tab = ({ active, children }: any) => (
    <button
      className={`rounded-lg px-3 py-1.5 text-sm ${
        active
          ? "bg-emerald-600 text-white"
          : "bg-neutral-900 border border-neutral-800 text-neutral-300"
      }`}
    >
      {children}
    </button>
  );

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Trade</CardTitle>
          <div className="flex gap-2">
            <Tab active>Buy</Tab>
            <Tab>Sell</Tab>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <button className="underline underline-offset-2">
            Switch to TARIFF
          </button>
          <button className="underline underline-offset-2">
            Set max slippage
          </button>
        </div>

        <AmountInput />

        <div className="flex flex-wrap gap-2">
          <Chip>0.1 SOL</Chip>
          <Chip>0.5 SOL</Chip>
          <Chip>1 SOL</Chip>
          <Chip>Max</Chip>
        </div>

        <Button className="w-full">Log in to buy</Button>
      </CardContent>
    </Card>
  );
}
