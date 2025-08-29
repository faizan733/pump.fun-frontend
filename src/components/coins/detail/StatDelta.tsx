export default function StatDelta({
  valueUSD,
  deltaUSD,
  deltaPct,
}: {
  valueUSD: number;
  deltaUSD: number;
  deltaPct: number;
}) {
  const neg = deltaUSD < 0;
  return (
    <div>
      <div className="text-3xl font-semibold">${valueUSD.toLocaleString()}</div>
      <div className={`text-sm ${neg ? "text-rose-400" : "text-emerald-400"}`}>
        {neg ? "-" : "+"}${Math.abs(deltaUSD).toLocaleString()} ({deltaPct}%)
      </div>
    </div>
  );
}
