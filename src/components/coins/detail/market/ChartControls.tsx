"use client";
export default function ChartControls() {
  const Btn = ({ children }: any) => (
    <button className="rounded-lg border border-neutral-800 bg-neutral-900/50 px-2.5 py-1 text-xs text-neutral-300 hover:bg-neutral-800">
      {children}
    </button>
  );
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <Btn>1m</Btn>
      <Btn>5m</Btn>
      <Btn>1h</Btn>
      <Btn>1d</Btn>
      <span className="mx-2 h-4 w-px bg-neutral-800" />
      <Btn>Trade Display</Btn>
      <Btn>Hide All Bubbles</Btn>
      <span className="mx-2 h-4 w-px bg-neutral-800" />
      <Btn>Price/MCAP</Btn>
      <Btn>USD/SOL</Btn>
    </div>
  );
}
