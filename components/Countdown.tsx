// components/Countdown.tsx
"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // Formato: "YYYY-MM-DDTHH:mm:ss"
}

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        };
      }
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    };

    // Calcular inmediatamente y luego actualizar cada segundo
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null; // Evita parpadeos en renderizado inicial

  return (
    <div className="my-3 py-2 px-3 bg-amber-950/40 border border-amber-200/20 rounded-xl backdrop-blur-sm">
      <p className="text-[10px] text-amber-200/70 tracking-widest uppercase mb-1.5 font-light">
        Faltan para el gran día
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col">
          <span className="font-mono text-lg md:text-xl font-bold text-amber-100 leading-tight">
            {String(timeLeft.dias).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-amber-200/60 font-light">
            Días
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg md:text-xl font-bold text-amber-100 leading-tight">
            {String(timeLeft.horas).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-amber-200/60 font-light">
            Horas
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg md:text-xl font-bold text-amber-100 leading-tight">
            {String(timeLeft.minutos).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-amber-200/60 font-light">
            Min
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-lg md:text-xl font-bold text-amber-100 leading-tight">
            {String(timeLeft.segundos).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-amber-200/60 font-light">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
}