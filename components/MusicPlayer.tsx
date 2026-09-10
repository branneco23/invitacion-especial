"use client";

import { useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Repeat } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: (e: React.MouseEvent) => void;
  // URL en línea directa de audio MP3 (Piano Suave)
  songUrl?: string;
  songTitle?: string;
}

export default function MusicPlayer({
  isPlaying,
  onTogglePlay,
  // Audio instrumental en línea
  songUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
  songTitle = "Bendición Nupcial - Piano de Adoración",
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.log("Error de reproducción:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="pt-2 space-y-2 text-center">
      {/* Audio en línea */}
      <audio ref={audioRef} src={songUrl} loop preload="auto" />

      <div className="flex items-center justify-center gap-6 text-[#59524c]">
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-[#1a1817] transition-colors"
          title="Repetir"
        >
          <Repeat className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-[#1a1817] transition-colors"
          title="Anterior"
        >
          <SkipBack className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onTogglePlay}
          className="w-12 h-12 rounded-full bg-[#1a1817] text-[#faf7f2] flex items-center justify-center shadow-lg hover:scale-105 transition-all"
          title={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-[#1a1817] transition-colors"
          title="Siguiente"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-0.5">
        <p className="text-[12px] font-semibold text-[#1a1817] tracking-wide">
          {songTitle}
        </p>
        <p className="text-[11px] tracking-wide text-[#736a62] font-medium">
          {isPlaying ? "Reproduciendo alabanza suave..." : "Haz clic para escuchar la canción"}
        </p>
      </div>
    </div>
  );
}