"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type Props = {
  onSearch?: (query: string) => void;
  initialValue?: string;
};

export default function CoinSearch({ onSearch, initialValue = "" }: Props) {
  const [q, setQ] = useState(initialValue);

  const submit = () => {
    if (onSearch) onSearch(q.trim());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-14">
      <div className="flex items-center rounded-md">
        {/* Input with icon */}
        <div className="flex items-center flex-1 rounded-md border border-white/20 overflow-hidden">
          <div className="pl-3">
            <Search className="h-5 w-5 text-white/70" />
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search..."
            className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50
                       focus:outline-none"
            aria-label="Search"
          />
        </div>

        {/* Button separated with gap */}
        <button
          type="button"
          onClick={submit}
          className="ml-2 rounded-md px-4 py-2 text-sm font-semibold  bg-[#83efaa] hover:bg-[#78D99C] text-black hover:brightness-95"
        >
          Search
        </button>
      </div>
    </div>
  );
}
