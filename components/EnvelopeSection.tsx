"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeSectionProps {
  guestName: string;
  reservedSeats: number;
  eventDate: string;
  onOpen: () => void;
}

export default function EnvelopeSection({
  guestName,
  reservedSeats,
  eventDate,
  onOpen,
}: EnvelopeSectionProps) {
  return (
    <motion.div
      key="envelope"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.5 }}
      onClick={onOpen}
      className="w-full bg-[#581825] border border-[#802336] rounded-2xl p-6 text-center shadow-2xl cursor-pointer relative overflow-hidden group perspective-1000 max-w-sm mx-auto"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 origin-top pointer-events-none"
        initial={{ rotateX: 0 }}
        whileHover={{ rotateX: 25 }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="w-0 h-0 mx-auto"
          style={{
            borderLeft: "180px solid transparent",
            borderRight: "180px solid transparent",
            borderTop: "110px solid #6b1d2f",
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.4))"
          }}
        />
      </motion.div>

      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-30">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#c29b38] p-[2px] shadow-xl group-hover:scale-105 transition-transform">
          <div className="w-full h-full rounded-full bg-[#581825] flex items-center justify-center border border-amber-200">
            <Heart className="w-5 h-5 text-amber-200 fill-amber-200/50" />
          </div>
        </div>
      </div>

      <div className="pt-24 space-y-2">
        <h2 className="font-cursive text-5xl text-[#ffffff] drop-shadow-md">
          Save the date
        </h2>
        
        <p className="text-xs tracking-[0.25em] text-amber-200 font-semibold">
          {eventDate}
        </p>

        <div className="py-2 text-amber-200 text-xs tracking-widest font-light">
          🥂 🥂
        </div>

        <div className="pt-2 border-t border-amber-200/30">
          <p className="font-cursive text-4xl text-[#ffffff] drop-shadow-sm">
            {guestName || "Lucía Jaimes"}
          </p>
          <p className="text-xs text-amber-100/90 font-normal tracking-wide mt-1">
            Hemos reservado <span className="font-bold text-amber-200">{reservedSeats}</span> lugares para ti
          </p>
        </div>
      </div>
    </motion.div>
  );
}