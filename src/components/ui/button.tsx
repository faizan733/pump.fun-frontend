import * as React from "react";

type Variant = "default" | "destructive" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const variants: Record<Variant, string> = {
  default:
    "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500",
  destructive: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  ghost:
    "bg-transparent hover:bg-neutral-800 text-neutral-200 focus:ring-neutral-600",
};

export function Button({
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
