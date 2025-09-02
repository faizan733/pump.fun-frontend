export default function AdvancedPageFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/60 text-white/70 text-sm py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Left Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Tech Updates
          </a>
        </div>

        {/* Right Status */}
        <div className="flex gap-6 items-center">
          <span className="text-emerald-400">● Stable Connection</span>
          <span>$74.1k</span>
          <button className="px-3 py-1 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400">
            Wallet Tracker
          </button>
        </div>
      </div>
    </footer>
  );
}
