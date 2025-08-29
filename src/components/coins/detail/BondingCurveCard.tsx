import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressBar from "./ProgressBar";

export default function BondingCurveCard({
  raisedUSD,
  targetUSD,
  progress,
}: {
  raisedUSD: number;
  targetUSD: number;
  progress: number; // 0..100
}) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Bonding Curve Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ProgressBar value={progress} />
        <div className="text-xs text-neutral-400">
          ${raisedUSD.toLocaleString()} / ${targetUSD.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
}
