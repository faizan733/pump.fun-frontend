"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AccountInfo from "@/components/profile/AccountInfo";
import WhoToFollow from "@/components/profile/WhoToFollow";
import Balances from "@/components/profile/Balances";

export default function ProfilePage() {
  return (
    <main className="flex-1 px-6 md:px-20 pb-6">
      {/* Back */}
      <div className="mb-5 text-xl">
        <Link href="/" className="flex items-center gap-2 text-white">
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </div>

      {/* Outer container */}
      <div className="bg-[#0c1116]/60 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side (stacked) */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <AccountInfo />
            <Balances />
          </div>

          {/* Right side */}
          <div>
            <WhoToFollow />
          </div>
        </div>
      </div>
    </main>
  );
}
