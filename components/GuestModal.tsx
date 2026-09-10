"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, UserCheck } from "lucide-react";

interface GuestModalProps {
  isOpen: boolean;
  onSave: (name: string) => void;
}

export default function GuestModal({ isOpen, onSave }: GuestModalProps) {
  const [tempName, setTempName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onSave(tempName.trim());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm bg-[#fcfaf7] border border-[#e5dcd0] rounded-3xl p-6 text-center shadow-2xl relative"
          >
            <div className="w-10 h-10 rounded-full bg-[#f0e8dc] flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Sparkles className="w-5 h-5 text-[#b8860b]" />
            </div>

            <h3 className="font-serif text-xl text-[#1a1817] font-semibold mb-1">
              Bienvenido/a
            </h3>
            <p className="text-xs text-[#59524c] mb-4 font-normal">
              Por favor, ingresa tu nombre para ver tu invitación:
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                autoFocus
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Ej. Lucía Jaimes"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f5f0e6] border border-[#d3c7b4] text-[#1a1817] placeholder-[#8c7a6b] text-sm text-center font-medium focus:outline-none focus:border-[#b8860b] transition-all"
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-[#581825] hover:bg-[#42121b] text-amber-100 font-semibold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                Ver Invitación
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}