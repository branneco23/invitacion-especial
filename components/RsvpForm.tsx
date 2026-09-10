// components/RsvpForm.tsx
"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Heart } from "lucide-react";

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("si");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d4af37", "#f3e5ab", "#84a98c"],
    });

    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fdfbf7]/90 border border-[#e2d7c5] p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md">
      {submitted ? (
        <div className="text-center py-6 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#6b8e23] mx-auto animate-bounce" />
          <h3 className="text-xl font-semibold text-[#2c2a29]">¡Asistencia Confirmada!</h3>
          <p className="text-[#65625e] text-xs">
            Gracias <span className="font-semibold text-[#2c2a29]">{name}</span>, guardamos tu respuesta. ¡Nos vemos en la celebración!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="text-center mb-4">
            <Heart className="w-6 h-6 text-[#c29b38] mx-auto mb-1 fill-[#c29b38]/20" />
            <h3 className="text-xl font-serif text-[#2c2a29] font-medium">Confirma tu Asistencia</h3>
            <p className="text-xs text-[#65625e]">Por favor dinos si podrás acompañarnos</p>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-[#54504c] mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escribe tu nombre"
              className="w-full px-4 py-2.5 rounded-xl bg-[#f7f4ef] border border-[#d3c7b4] text-[#2c2a29] placeholder-[#a39c93] text-sm focus:outline-none focus:border-[#c29b38] focus:ring-1 focus:ring-[#c29b38] transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-[#54504c] mb-1">
              ¿Asistirás?
            </label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#f7f4ef] border border-[#d3c7b4] text-[#2c2a29] text-sm focus:outline-none focus:border-[#c29b38] focus:ring-1 focus:ring-[#c29b38] transition-all"
            >
              <option value="si">¡Sí, ahí estaré!</option>
              <option value="no">Lo siento, no puedo ir</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#84a98c] hover:bg-[#6b8e23] text-white font-medium rounded-xl text-sm transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Enviar Confirmación
          </button>
        </form>
      )}
    </div>
  );
}