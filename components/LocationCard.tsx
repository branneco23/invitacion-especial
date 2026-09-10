import { LucideIcon, MapPin } from "lucide-react";
import { LocationInfo } from "@/types/wedding";

interface LocationCardProps {
  data: LocationInfo;
  icon: LucideIcon;
}

export default function LocationCard({ data, icon: Icon }: LocationCardProps) {
  return (
    <div className="bg-[#f5f0e6] p-5 rounded-2xl border border-[#e2d7c5] space-y-3 text-center">
      <div className="w-10 h-10 rounded-full bg-[#581825] text-amber-100 flex items-center justify-center mx-auto shadow-md">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-[#1a1817]">
        {data.title}
      </h3>
      <div className="space-y-1 text-xs text-[#59524c]">
        <p className="font-medium text-[#1a1817]">{data.place}</p>
        <p>Hora: {data.time}</p>
        <p className="flex items-center justify-center gap-1 text-[#8c7a6b] pt-1">
          <MapPin className="w-3.5 h-3.5" /> {data.address}
        </p>
      </div>
      <a
        href={data.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-[11px] font-semibold text-[#581825] underline pt-1 hover:text-[#802336]"
      >
        Ver en Google Maps
      </a>
    </div>
  );
}