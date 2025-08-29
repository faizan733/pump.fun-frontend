export default function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium bg-black/50 text-white/80 ${className}`}
    >
      {children}
    </span>
  );
}
