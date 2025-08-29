import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressBar from "./ProgressBar";

export default function PositionCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">$0.00 • 0 TARIFF</CardTitle>
          <div className="text-xs text-neutral-400">Position • Trades</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-xs text-neutral-400">Profit Indicator</div>
        <ProgressBar value={20} />
      </CardContent>
    </Card>
  );
}
