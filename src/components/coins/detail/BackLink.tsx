"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ className = "" }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 text-neutral-300 hover:text-white ${className}`}
    >
      <ArrowLeft className="h-5 w-5" /> Back
    </button>
  );
}
