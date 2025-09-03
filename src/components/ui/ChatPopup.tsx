"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ChatPopup() {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 min-h-screen z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[400px] max-w-sm rounded-2xl bg-black text-white p-6 shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <h2 className="text-lg font-semibold text-center">
              XYZ chat available now on app
            </h2>
            <p className="text-sm text-gray-400 text-center mt-1">
              Chat with friends, share coins, and discover alpha all in one
              place.
            </p>

            {/* QR Code Box */}
            <div className="mt-5 rounded-xl border border-gray-700 p-5 flex flex-col items-center">
              <h3 className="text-sm mb-3 uppercase text-gray-300">XYZ APP</h3>

              <div className="bg-white p-3 rounded-xl">
                <img
                  src="/qr-placeholder.png"
                  alt="QR Code"
                  className="h-32 w-32"
                />
              </div>

              <p className="text-xs text-gray-400 text-center mt-3">
                Scan to Download
              </p>

              {/* CTA inside border */}
              <button className="mt-4 w-full rounded-xl bg-green-600 hover:bg-green-500 py-2 text-sm font-medium cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
