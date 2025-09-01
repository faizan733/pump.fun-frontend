"use client";

import Image from "next/image";

const users = ["ACT1", "cryptonody", "improv", "ansems", "caitlyn"];

export default function WhoToFollow() {
  return (
    <div className="bg-[#2E2E31] border border-white/10 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">Who to follow</h3>
      <div className="space-y-3">
        {users.map((user, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={`/coins/coin${(i % 4) + 1}.jpg`}
                  alt={user}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white">{user}</p>
                <p className="text-xs text-white/50">
                  {2000 + i * 100} followers
                </p>
              </div>
            </div>
            <button className="px-3 py-1 text-xs rounded bg-emerald-500 hover:bg-emerald-400 text-black font-medium">
              Login to follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
