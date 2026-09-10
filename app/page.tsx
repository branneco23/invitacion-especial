"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Step } from "@/types/wedding";
import { Constants } from "@/constants/weddingData";
import { useCountdown } from "@/hooks/useCountdown";

import BackgroundOverlay from "@/components/BackgroundOverlay";
import MusicPlayer from "@/components/MusicPlayer";
import GuestModal from "@/components/GuestModal";
import EnvelopeSection from "@/components/EnvelopeSection";
import InvitationDetails from "@/components/InvitationDetails";
import RsvpForm from "@/components/RsvpForm";

export default function VirtualWeddingInvitation() {
  const [step, setStep] = useState<Step>("intro");
  const [guestName, setGuestName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  // Hook del contador por si se desea consumir en cualquier vista
  const timeLeft = useCountdown(Constants.targetDateStr);

  const handleSaveName = (name: string) => {
    setGuestName(name);
    setStep("envelope");
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-x-hidden select-none py-8 px-4 md:px-8">
      {/* 1. Fondo */}
      <BackgroundOverlay imageUrl={Constants.bgImageUrl} />

      {/* 2. ETAPA 1: Pantalla Inicial */}
      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            onClick={() => setStep("modal")}
            className="fixed inset-0 z-40 flex flex-col justify-between items-center px-6 py-12 cursor-pointer bg-[#faf7f2]/95 backdrop-blur-md text-[#2b2927]"
          >
            <div className="text-center pt-6 space-y-1">
              <p className="text-xs tracking-[0.35em] text-[#8c7a6b] uppercase font-medium">
                {Constants.subtitle}
              </p>
              <h1 className="font-cursive text-6xl md:text-8xl text-[#1a1817] drop-shadow-sm font-normal">
                {Constants.brideAndGroom}
              </h1>
            </div>

            <div className="text-center my-auto max-w-sm space-y-8">
              <p className="font-serif text-sm md:text-base text-[#4a443f] leading-relaxed font-light px-2">
                Con inmensa felicidad compartimos con ustedes uno de los momentos más importantes de nuestras vidas:
                <span className="block italic mt-1 font-semibold text-[#1a1817]">el inicio de una nueva historia juntos.</span>
              </p>

              <div className="space-y-1">
                <p className="text-xs tracking-[0.3em] uppercase text-[#8c7a6b] font-semibold">
                  Diciembre
                </p>
                <div className="flex items-center justify-center gap-6 text-[#1a1817] border-y border-[#d8cfc4] py-3">
                  <span className="text-xs uppercase tracking-widest text-[#59524c] font-medium">Sábado</span>
                  <span className="font-serif text-6xl font-bold tracking-tight text-[#1a1817]">26</span>
                  <span className="text-xs tracking-widest text-[#59524c] font-medium">2026</span>
                </div>
              </div>

              {/* Reproductor de música */}
              <MusicPlayer isPlaying={isPlaying} onTogglePlay={togglePlay} />
            </div>

            <div className="w-full max-w-sm bg-[#581825] text-amber-100 text-center py-3 px-4 rounded-xl shadow-md border border-[#802336]">
              <p className="text-xs tracking-[0.2em] font-medium uppercase">
                Falta poco para nuestro gran día
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. ETAPA 2: Pop-up Modal para Nombre */}
      <GuestModal isOpen={step === "modal"} onSave={handleSaveName} />

      {/* 4. ETAPAS 3, 4 y 5: Flujo principal */}
      {step !== "intro" && (
        <>
          <header className="relative z-10 text-center space-y-1 mt-2 md:mt-4 max-w-2xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-cursive text-6xl md:text-8xl text-stone-50 drop-shadow-lg font-normal tracking-wide"
            >
              {Constants.brideAndGroom}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm tracking-[0.35em] text-amber-100 uppercase drop-shadow-md font-medium"
            >
              {Constants.subtitle}
            </motion.p>
          </header>

          <section className="relative z-10 my-auto w-full max-w-md md:max-w-xl mx-auto py-4">
            {step === "envelope" && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs md:text-sm text-amber-100 text-center font-normal mb-3 tracking-widest drop-shadow-md"
              >
                Dale clic al sobre para abrir
              </motion.p>
            )}

            <AnimatePresence mode="wait">
              {step === "envelope" && (
                <EnvelopeSection
                  guestName={guestName}
                  reservedSeats={Constants.reservedSeats}
                  eventDate={Constants.eventDate}
                  onOpen={() => setStep("invitation")}
                />
              )}

              {step === "invitation" && (
                <InvitationDetails
                  guestName={guestName}
                  reservedSeats={Constants.reservedSeats}
                  onGoToRsvp={() => setStep("rsvp")}
                />
              )}

              {step === "rsvp" && (
                <motion.div
                  key="rsvp"
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full shadow-2xl"
                >
                  <RsvpForm />
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <footer className="relative z-10 text-center pb-2">
            <p className="text-xs text-amber-100/90 font-light tracking-widest uppercase drop-shadow">
              ¡Acompáñanos a celebrar!
            </p>
          </footer>
        </>
      )}
    </main>
  );
}