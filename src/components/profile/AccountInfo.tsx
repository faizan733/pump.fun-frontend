"use client";

import Image from "next/image";
import { Copy, ExternalLink } from "lucide-react";

export default function AccountInfo() {
  return (
    <div className="md:col-span-2 w-full max-w-3xl mx-auto py-6 flex flex-col gap-4">
      {/* Top row: Avatar + Info + Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-5 border-white">
            <Image
              src="/coins/coin1.jpg"
              alt="Avatar"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Username + Address */}
          <div>
            <h2 className="text-lg font-semibold text-white">undefined</h2>
            <div className="flex items-center gap-2 mt-1">
              {/* Wallet Address with Copy */}
              <div className="flex items-center gap-1 text-xs border border-white/30 px-2 py-0.5 rounded-md text-white/80 hover:bg-white/10">
                <span>8KRaJ...FNU0</span>
                <Copy className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
              </div>

              {/* Solscan Button */}
              <button className="flex items-center gap-1 text-xs border border-white/30 px-2 py-0.5 rounded-md text-white/80 hover:bg-white/10">
                View on solscan
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button className="cursor-pointer px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg font-medium text-sm">
          Login to follow
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-12 text-center mt-2">
        <div>
          <p className="text-2xl font-semibold text-white">223</p>
          <p className="text-xs text-white/50">Followers</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-white">0</p>
          <p className="text-xs text-white/50">Following</p>
        </div>
        <div>
          <p className="text-2  xl font-semibold text-white">0</p>
          <p className="text-xs text-white/50">Created Coins</p>
        </div>
      </div>
    </div>
  );
}
