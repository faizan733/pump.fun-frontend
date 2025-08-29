// Using a simple SVG line to avoid heavy setup; swap with Recharts later.
export default function MarketChart() {
  return (
    <div className="h-64 w-full rounded-xl bg-black/20">
      <svg viewBox="0 0 100 40" className="h-full w-full">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points="0,30 10,26 20,28 30,24 40,27 50,25 60,22 70,24 80,27 90,29 100,26"
          className="text-neutral-300"
        />
      </svg>
    </div>
  );
}
