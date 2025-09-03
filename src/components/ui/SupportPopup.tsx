// src/components/ui/SupportPopup.tsx
"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SupportPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function SupportPopup({ open, onClose }: SupportPopupProps) {
  // Lock/unlock background scroll + ESC to close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handler);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handler);
      };
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Support Card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-[340px] max-w-sm h-[80vh] bg-white shadow-2xl rounded-2xl mt-16 mr-5 mb-5 flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent close on click inside
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto p-6">
              <h2 className="text-xl font-bold mb-2">Support Card</h2>
              <p className="text-gray-600">
                This is the refined layout. You can define what goes inside here
                next.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
