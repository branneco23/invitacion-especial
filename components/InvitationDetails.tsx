"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, CheckCircle2 } from "lucide-react";
import LocationCard from "./LocationCard";
import Itinerary from "./Itinerary";
import { ITINERARY_DATA, LOCATIONS_DATA } from "@/constants/weddingData";

interface InvitationDetailsProps {
  guestName: string;
  reservedSeats: number;
  onGoToRsvp: () => void;
}

export default function InvitationDetails({
  guestName,
  reservedSeats,
  onGoToRsvp,
}: InvitationDetailsProps) {
  return (
    <motion.div
      key="invitation-details"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#faf7f2]/95 backdrop-blur-md border border-[#e5dcd0] rounded-3xl p-6 md:p-8 shadow-2xl text-[#2b2927] space-y-8"
    >
      <div className="text-center space-y-2 border-b border-[#e5dcd0] pb-6">
        <Sparkles className="w-6 h-6 text-[#b8860b] mx-auto" />
        <h2 className="font-cursive text-4xl md:text-5xl text-[#1a1817]">
          Nuestra Celebración
        </h2>
        <p className="text-xs tracking-widest uppercase text-[#8c7a6b] font-medium">
          Para: {guestName || "Lucía Jaimes"} ({reservedSeats} pases)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LocationCard data={LOCATIONS_DATA.ceremony} icon={Calendar} />
        <LocationCard data={LOCATIONS_DATA.reception} icon={Clock} />
      </div>

      <Itinerary items={ITINERARY_DATA} />

      <div className="pt-4 text-center">
        <button
          onClick={onGoToRsvp}
          className="w-full py-3 bg-[#581825] hover:bg-[#42121b] text-amber-100 font-semibold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          Confirmar Asistencia (RSVP)
        </button>
      </div>
    </motion.div>
  );
}