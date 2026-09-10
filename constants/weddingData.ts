import { ItineraryItem, LocationInfo } from "@/types/wedding";

export const Constants = {
  bgImageUrl: "https://res.cloudinary.com/dbbzk99pj/image/upload/v1788909267/karlaydiego/d21c5eeb-fa39-489e-af31-776b4974fb9b_qgvhfc.png",
  brideAndGroom: "D. Alejandro & K. Sofia",
  subtitle: "¡NOS CASAMOS!",
  reservedSeats: 2,
  eventDate: "06 . 12 . 2026",
  targetDateStr: "2026-12-06T17:00:00",
};

export const ITINERARY_DATA: ItineraryItem[] = [
  { time: "05:00 PM", title: "Ceremonia Religiosa", icon: "💒" },
  { time: "06:30 PM", title: "Coctel de Bienvenida", icon: "🥂" },
  { time: "07:30 PM", title: "Entrada de los Novios & Brindis", icon: "✨" },
  { time: "08:30 PM", title: "Cena Especial", icon: "🍽️" },
  { time: "10:00 PM", title: "Fiesta & Celebración", icon: "🎉" },
];

export const LOCATIONS_DATA: { ceremony: LocationInfo; reception: LocationInfo } = {
  ceremony: {
    title: "Ceremonia",
    place: "Iglesia San José",
    time: "05:00 PM",
    address: "Carrera 5 # 10-20",
    mapUrl: "https://maps.google.com",
  },
  reception: {
    title: "Recepción",
    place: "Hacienda Los Olivos",
    time: "06:30 PM",
    address: "Km 4 Vía Principal",
    mapUrl: "https://maps.google.com",
  },
};