import Image from "next/image";
import {
  Users,
  Target,
  Crown,
  GraduationCap,
  EyeOff,
  Search,
  Star,
  Twitter,
  Globe,
} from "lucide-react";

interface TokenCardProps {
  logo: string;
  name: string;
  volume: string;
  marketCap: string;
  tx: string;
  price: string;
  change: string;
}

export default function TokenCard({
  logo,
  name,
  volume,
  marketCap,
  tx,
  price,
  change,
}: TokenCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-[#1a1d1f] rounded-2xl p-4 flex items-start gap-4 shadow border border-white/10">
      {/* Logo */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-black/30">
        <Image
          src={logo}
          alt={name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Middle Section */}
      <div className="flex-1 min-w-0">
        {/* Title row */}
        <div className="flex justify-between items-center">
          <h3 className="font-normal text-white truncate leading-tight">
            {name}
          </h3>
          <div className="text-xs text-gray-300 flex gap-1 whitespace-nowrap">
            <span>
              <span className="font-medium">V</span> {volume}
            </span>
            <span>
              <span className="font-medium">MC</span>{" "}
              <span className="text-yellow-400">{marketCap}</span>
            </span>
          </div>
        </div>

        {/* Second row: 5s + icons + TX */}
        <div className="flex justify-between items-center mt-1 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-green-400">5s</span>
            <EyeOff className="w-3 h-3" />
            <Search className="w-3 h-3" />
            <Star className="w-3 h-3" />
            <Twitter className="w-3 h-3" />
            <Globe className="w-3 h-3" />
          </div>
          <span className="text-gray-300 whitespace-nowrap font-medium">
            TX {tx} {price}
          </span>
        </div>

        {/* Third row: pump address */}
        <div className="text-xs text-gray-300 mt-1">f9cu....pump</div>

        {/* Fourth row: badges + price change pill */}
        <div className="flex justify-between items-center mt-2">
          {/* badges */}
          <div className="flex gap-1">
            <div className="flex items-center gap-1 text-gray-300 bg-gray-800 rounded-md px-2 py-0.5 text-[11px]">
              <Users className="w-3 h-3" /> 8
            </div>
            <div className="flex items-center gap-1 text-gray-300 bg-gray-800 rounded-md px-2 py-0.5 text-[11px]">
              <Target className="w-3 h-3" /> 4%
            </div>
            <div className="flex items-center gap-1 text-gray-300 bg-gray-800 rounded-md px-2 py-0.5 text-[11px]">
              <GraduationCap className="w-3 h-3" /> 6%
            </div>
            <div className="flex items-center gap-1 text-gray-300 bg-gray-800 rounded-md px-2 py-0.5 text-[11px]">
              <Crown className="w-3 h-3" /> 2%
            </div>
          </div>

          {/* price change pill */}
          <span
            className={`${
              isPositive ? "bg-emerald-500" : "bg-red-500"
            } text-white font-medium px-3 py-1 ml-2 rounded-md text-xs shadow-md`}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
