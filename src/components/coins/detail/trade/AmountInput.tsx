export default function AmountInput() {
  return (
    <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2">
      <input
        type="number"
        placeholder="0.00"
        className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
      />
      <span className="ml-2 rounded-md bg-neutral-800 px-2 py-1 text-xs">
        SOL
      </span>
    </div>
  );
}
