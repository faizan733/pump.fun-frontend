export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-neutral-800/70">
      <div
        className="h-2 rounded-full bg-emerald-500"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
