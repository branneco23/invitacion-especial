export type Step = "intro" | "modal" | "envelope" | "invitation" | "rsvp";

export interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export interface ItineraryItem {
  time: string;
  title: string;
  icon: string;
}

export interface LocationInfo {
  title: string;
  place: string;
  time: string;
  address: string;
  mapUrl: string;
}