export default function TickerStrip() {
  const items = [
    { label: "0.0500 SOL ↗", color: "text-emerald-400" },
    { label: "0.0500 SOL ↘", color: "text-red-400" },
    { label: "0.0500 SOL ↗", color: "text-emerald-400" },
    { label: "0.0500 SOL ↗", color: "text-emerald-400" },
  ];

  return (
    <div className="w-full bg-black/50 border-b border-white/10 py-2 px-4 flex items-center gap-6 overflow-x-auto text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="text-white">Sticky</span>
          <span className={item.color}>🪙 {item.label}</span>
        </span>
      ))}
    </div>
  );
}
